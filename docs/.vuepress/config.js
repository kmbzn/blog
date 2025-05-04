const { defaultTheme } = require('vuepress')

module.exports = {
  description: 'Summarizing key concepts from CS lectures.',
  email: 'kmbzn24@gmail.com',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/victor-mono@latest/dist/index.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css' }]
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-143055167-2'
    }],
    ['@vuepress/plugin-last-updated', {
        transformer: (timestamp) => {
            const kstOffsetMs = 9 * 60 * 60 * 1000
            const kstDate = new Date(timestamp + kstOffsetMs)
            
            const pad = n => n.toString().padStart(2, '0')
            
            const year = kstDate.getFullYear()
            const month = kstDate.getMonth() + 1
            const day = kstDate.getDate()
            const hour = pad(kstDate.getHours())
            const minute = pad(kstDate.getMinutes())
            const second = pad(kstDate.getSeconds())
            
            return `${year}/${month}/${day} ${hour}:${minute}:${second}`
            }
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
          ['/computer-graphics/3-Transformations-v2', '3-Transformations-v2'],
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
    lastUpdated: 'Last Updated'
  }
}
