const { defaultTheme } = require('vuepress')

module.exports = {
  description: 'Summarizing key concepts from CS lectures.',
  email: 'kmbzn24@gmail.com',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js' }],
    ['script', {}, `
      if (typeof window !== 'undefined') {
        window.addEventListener("DOMContentLoaded", function () {
          renderMathInElement(document.body, {
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "$", right: "$", display: false}
            ],
            throwOnError: false
          });
        });
      }
    `],
    ['meta', { property: 'og:description', content: 'by kmbzn' }],
    ['meta', { property: 'og:image', content: 'https://kmbzn.com/images/og-home.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/victor-mono@latest/dist/index.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css' }]
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  themeConfig: {
    logo: '/images/kmbzn.png',
    sidebar: [
      {
        title: '🖥️ Computer Graphics',
        collapsable: true,
        children: [
          ['/computer-graphics/1-Course-Intro', '1-Course-Intro'],
          ['/computer-graphics/2-Rendering-Basics', '2-Rendering-Basics'],
          ['/computer-graphics/3-Transformations', '3-Transformations'],
          ['/computer-graphics/4-Affine-Space-Frame_Matrix', '4-Affine-Space-Frame_Matrix'],
          ['/computer-graphics/5-Vertex-Processing-1', '5-Vertex-Processing-1'],
          ['/computer-graphics/6-Vertex-Processing-2', '6-Vertex-Processing-2'],
          ['/computer-graphics/7-Hierachical-Modeling-Mesh', '7-Hierachical-Modeling-Mesh'],
          // ['/computer-graphics/8-Lighting', '8-Lighting'],
        ]
      }
    ],
    sidebarDepth: 0,
    nav: [],
    smoothScroll: true,
    lastUpdated: false
  }
}
