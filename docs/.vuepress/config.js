module.exports = {
    title: 'kmbzn',
    description: 'Summarizing key concepts from CS lectures.',
    email: 'kmbzn24@gmail.com',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: `/images/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
        }],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-143055167-2'
            }
        ]
    ],
    themeConfig: {
        sidebar: [
            {
                title: '🖥️ Computer Graphics',
                collapsable: true,
                children: [
                    ['/computer-graphics/1-Course-Intro','- 1-Course-Intro'],
                ]
            }
        ],
        sidebarDepth: 0,
        nav: [
            /*
            { text: 'Home', link: '/', target: '_self' },
            { text: 'Github', link: 'https://github.com/gyoogle/tech-interview-for-developer' }
            */
        ],
        smoothScroll: true,
        lastUpdated: '최종 수정 '
    }
}