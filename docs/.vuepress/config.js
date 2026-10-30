import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Use the same study pages in development and production.
const subjects = [
  ['마이크로프로세서', 'mp'],
  ['데이터사이언스', 'ds'],
  ['컴퓨터보안', 'cs'],
  ['운영체제', 'os/study'],
  ['데이터베이스', 'db'],
  ['프로그래밍언어론', 'pl'],
  ['소프트웨어공학', 'se'],
  ['인공지능', 'ai'],
  ['컴퓨터그래픽스', 'cg'],
]

const sidebar = subjects
  .filter(([, directory]) => existsSync(fileURLToPath(new URL(`../${directory}/`, import.meta.url))))
  .map(([text, directory]) => ({
    text,
    children: readdirSync(fileURLToPath(new URL(`../${directory}/`, import.meta.url)))
      .filter(name => name.endsWith('.md'))
      .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
      .map(name => `/${directory}/${name.slice(0, -3)}`),
  }))

export default defineUserConfig({
  lang: 'ko-KR',
  title: '',
  description: '컴퓨터공학 전공과 개발 학습 기록',
  base: '/',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  // Keep existing extensionless links working.
  extendsPage(page) {
    if (page.path !== '/' && page.path !== '/404.html') {
      const path = page.path.replace(/\.html$/, '').replace(/\/$/, '')
      page.path = path
      page.frontmatter.permalink = path
    }
  },
  extendsMarkdown(md) {
    // Markdown distinguishes indented code from fenced code at the token level.
    md.renderer.rules.code_block = (tokens, index) =>
      `<pre class="indented-code"><code>${md.utils.escapeHtml(tokens[index].content)}</code></pre>\n`
  },
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
  ],
  plugins: [
    markdownMathPlugin({ type: 'katex' }),
    markdownHintPlugin(),
  ],
  theme: {
    name: 'study-notes',
    clientConfigFile: fileURLToPath(new URL('./client.js', import.meta.url)),
    templateBuild: fileURLToPath(new URL('./template.html', import.meta.url)),
    async onPrepared(app) {
      const sections = sidebar.map(section => ({
        text: section.text,
        children: section.children.map(path => ({
          path,
          text: app.pages.find(page => page.path === path).title,
        })),
      }))
      await app.writeTemp('study-sidebar.js', `export default ${JSON.stringify(sections)}`)
    },
  },
  bundler: viteBundler(),
})
