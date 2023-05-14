module.exports = {
    title: "海南大学RM共享平台",
    description: "该网站用于海南大学RoboMaster战队作为共享知识库",
    base: "/",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: { // 主题设置
        nav: [ // 导航栏
            {
                text: '首页',
                link: '/'
            },{
                text: '周报',
                items: [
                    { text: '视觉组周报', link: '/周报/视觉组周报/' },
                    { text: '电控组周报', link: '/周报/电控组周报/' },
                    { text: '机械组周报', link: '/周报/机械组周报/' },
                ]
            },{
                text: '知识库',
                items: [
                    { text: '视觉组知识库', link: '/知识库/视觉组知识库/' },
                    { text: '电控组知识库', link: '/知识库/电控组知识库/' },
                    { text: '机械组知识库', link: '/知识库/机械组知识库/' },
                ]
            },{
                text: '共享文档',
                items: [
                    { text: '每周工作安排', link: 'https://docs.qq.com/sheet/DR2RLYm9SeXNudFJn?tab=BB08J2' },
                    { text: '招新培训工作安排', link: 'https://docs.qq.com/sheet/DR3Z2TWpDbVVkRXFF?tab=BB08J2' },
                    { text: '预采购清单', link: 'https://docs.qq.com/sheet/DR0JHVVJDRm5BS29F?tab=znt8dm' }
                    ]
            }
        ],
        sidebar: 'auto',
        // sidebar: [ // 侧边栏
        //     {
        //         title: '海南大学RM共享平台',
        //         children: ['/周报/视觉组周报/视觉组-林世鹏-第1周'],
        //         initialOpenGroupIndex: 1,
        //     },{
        //         title: '视觉组周报',
        //         children: ['/周报/视觉组周报/视觉组-林世鹏-第1周'],
        //         initialOpenGroupIndex: 1,
        //     },{
        //         title: '电控组周报',
        //         children: ['/周报/电控组周报/电控组-褚仕成-第1周'],
        //         initialOpenGroupIndex: 1,
        //     },{
        //         title: '机械组周报',
        //         children: ['/周报/机械组周报/机械组-王民爽-第1周'],
        //         initialOpenGroupIndex: 1,
        //     }
        // ]
    },
    plugins: [
        [
            'posts-encrypt',
            {
                route: '/auth',
                passwd: 'rm2024',
                encryptInDev: true,
                // expires: 1000 * 60,
                // version >= 0.1.0
                checkAll: true
            }
        ]
    ]
};
