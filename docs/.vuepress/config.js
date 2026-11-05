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
  ['운영체제', 'os'],
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
      .sort((a, b) => a.slice(0, -3).localeCompare(b.slice(0, -3), 'en', { numeric: true }))
      .map(name => `/${directory}/${name.slice(0, -3)}`),
  }))

export default defineUserConfig({
  lang: 'ko-KR',
  title: '',
  description: '학습 노트',
  base: '/',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  // Keep existing extensionless links working.
  extendsPage(page) {
    if (page.path === '/') {
      page.title = 'cs-note'
      page.data.title = 'cs-note'
    }
    if (page.path !== '/' && page.path !== '/404.html') {
      const path = page.path.replace(/\.html$/, '').replace(/\/$/, '')
      page.path = path
      page.frontmatter.permalink = path
    }
  },
  extendsMarkdown(md) {
    // Notes use triple-dollar display delimiters; KaTeX expects double dollars.
    md.core.ruler.before('block', 'triple-dollar-math', state => {
      state.src = state.src.replace(/^\${3}[ \t]*$/gm, () => '$$')
    })
    // Group each heading with its following content, independently of heading rank.
    md.core.ruler.push('print-heading-blocks', state => {
      const tokens = []
      const groups = []
      const closeGroup = () => {
        const token = new state.Token('print_block_close', 'div', -1)
        token.block = true
        tokens.push(token)
        groups.pop()
      }
      for (const token of state.tokens) {
        while (groups.length && (
          token.level < groups.at(-1) ||
          (token.type === 'heading_open' && token.level === groups.at(-1))
        )) closeGroup()
        if (token.type === 'heading_open') {
          const open = new state.Token('print_block_open', 'div', 1)
          open.block = true
          open.attrSet('class', 'print-heading-block')
          tokens.push(open)
          groups.push(token.level)
        }
        tokens.push(token)
      }
      while (groups.length) closeGroup()
      state.tokens = tokens
    })
    const renderFence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens, index, options, env, self) => {
      const language = md.utils.unescapeAll(tokens[index].info).trim().split(/\s+/)[0]
      const code = renderFence(tokens, index, options, env, self)
      if (!language) return code
      return `<div class="fenced-code"><span class="code-language">${md.utils.escapeHtml(language)}</span>${code}</div>\n`
    }
    // Markdown distinguishes indented code from fenced code at the token level.
    md.renderer.rules.code_block = (tokens, index) =>
      `<pre class="indented-code"><code>${md.utils.escapeHtml(tokens[index].content)}</code></pre>\n`
  },
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/icon-192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon-180.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
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
