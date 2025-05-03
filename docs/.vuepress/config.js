module.exports = {
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
        logo: '/images/kmbzn.png',  // ← 이 줄 추가
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
                    ['/computer-graphics/8-Lighting', '8-Lighting'],
                ]
            }
        ],
        sidebarDepth: 0,
        nav: [
        ],
        smoothScroll: true,
        lastUpdated: '최종 수정 '
    }
}