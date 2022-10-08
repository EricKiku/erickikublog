module.exports = {
    title: 'EricKiku',
    description: 'EricKiku的博客',
    head: [
        ['link', { rel: 'icon', href: '/faviron.ico' }],
        ['meta', { name: 'keywords', content: 'erickiku,vuepress,html,前端' }]
    ],
    themeConfig: {
        logo: '/assets/img/hero.png',
        lastUpdated: '更新时间：', // string | boolean
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Html', link: '/html/' },
            { text: 'EricKiku', link: 'https://github.com/EricKiku' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                    {text:'Food',items:[
                        {text:'烧鹿尾', link: '/language/chinese/'},
                        {text:'蒸熊掌', link: '/language/chinese/'},
                        {text:'烤山药', link: '/language/chinese/'},
                    ]}
                ]
            }
        ],
        sidebar: [
            {
                title: 'html',   // 必要的
                path: '/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/html/html-a',
                  '/html/html-b'
                ]
            },
            {
                title: 'webpack',
                path: '/webpack/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    '/webpack/webpack-a'
                 ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    },
    
}