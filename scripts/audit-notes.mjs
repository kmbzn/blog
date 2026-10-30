import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createMarkdown } from 'vuepress/markdown'

const md = createMarkdown({ html: true })
const issues = []
let documents = 0
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return []
    const path = join(directory, entry.name)
    return entry.isDirectory() ? files(path) : path.endsWith('.md') ? [path] : []
  })
}
function prose(line) {
  return line.replace(/(`+).*?\1|\$[^$\n]+\$|\b\d{1,2}:\d{2}(?::\d{2})?(?:AM|PM)?\b|https?:\/\/[^\s<>]+|<[^>]*>|(?<=\]\()[^)]+(?=\))/g, '')
}
for (const path of files('docs')) {
  if (path === 'docs/index.md') continue // Intentionally blank landing page.
  documents++
  const lines = readFileSync(path, 'utf8').split('\n')
  const tokens = md.parse(lines.join('\n'), {})
  for (const token of tokens) {
    if (token.type === 'hr') issues.push({ path, line: token.map[0] + 1, rule: 'document-horizontal-rule' })
    const drawing = /[┌┐└┘├┤┼┬┴│─]/.test(token.content)
      || (/^\s*[-=]{2,}\+/m.test(token.content) && /^\s*\|/m.test(token.content))
    if (token.type === 'code_block') {
      if (!drawing) issues.push({ path, line: token.map[0] + 1, rule: 'text-requires-fenced-block' })
      if (/[가-힣]/.test(token.content)) issues.push({ path, line: token.map[0] + 1, rule: 'english-diagram-labels' })
    }
    if (token.type === 'fence' && drawing && ['', 'text', 'diagram', 'ascii', 'plaintext', 'diff'].includes(token.info.trim())) {
      issues.push({ path, line: token.map[0] + 1, rule: 'diagram-requires-indentation' })
    }
  }
  const protectedLines = new Set(tokens
    .filter(token => ['fence', 'code_block'].includes(token.type))
    .flatMap(token => Array.from({ length: token.map[1] - token.map[0] }, (_, i) => token.map[0] + i)))
  let math = false
  let topHeadings = 0
  let lastSection = ''
  const add = (line, rule) => issues.push({ path, line: line + 1, rule })
  for (const [i, line] of lines.entries()) {
    if (protectedLines.has(i)) continue
    if (line.includes('$$')) {
      if ((line.match(/\$\$/g) || []).length % 2) math = !math
      continue
    }
    if (math || /^\s*<!--/.test(line)) continue
    const text = prose(line)
    const heading = /^(#{1,6})\s+(.*)/.exec(line)
    if (heading) {
      const level = heading[1].length
      if (level === 1) {
        topHeadings++
        if (i !== 0) add(i, 'primary-title-position')
      }
      if (level === 2 && /[가-힣]/.test(heading[2])) add(i, 'english-heading')
      if (level === 2) {
        const title = heading[2].trim().toLowerCase()
        if (title === lastSection) add(i, 'consecutive-duplicate-section')
        lastSection = title
      }
    }
    if (/^\s*(?:>\s*)?\*\s/.test(text)) add(i, 'hyphen-list-marker')
    if (text.includes('**')) add(i, 'unnecessary-bold')
    if (text.includes('—')) add(i, 'em-dash')
    const technical = /^\s*(?:\|?\s*:?-+:?\s*\|)+|^\s*\[[^\]]+\]:|^\s*:::/.test(text)
    if (!technical && /(?<!:):(?!:)/.test(text)) add(i, 'prose-colon')
    if (/[가-힣]*(?:습니다|니다|하세요|십시오|하시오)(?=[.!?\s,;)\]]|$)/.test(text)) add(i, 'formal-ending')
    if (/[가-힣]+다[.!?]\s*$/.test(text)) add(i, 'declarative-ending')
  }
  if (topHeadings !== 1) add(0, 'single-primary-title')
}
console.log(JSON.stringify({ documents, issues }, null, 2))
if (issues.length) process.exitCode = 1
