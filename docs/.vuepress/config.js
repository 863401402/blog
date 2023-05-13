module.exports = {
    title: "海南大学RM共享平台",
    description: "该网站用于海南大学RoboMaster战队作为共享知识库",
    base: "/blog/",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: { // 主题设置
        nav: [ // 导航栏
            {
                text: '首页',
                link: '/'
            },{
                text: '视觉组周报',
                link: '/周报/视觉组周报/'
            },{
                text: '电控组周报',
                link: '/周报/电控组周报/'
            },{
                text: '机械组周报',
                link: '/周报/机械组周报/'
            }
        ],
        sidebar: [ // 侧边栏
            {
                title: '海南大学RM共享平台',
                children: ['/周报/视觉组周报/视觉组-林世鹏-第1周'],
                initialOpenGroupIndex: 1,
            },{
                title: '视觉组周报',
                children: ['/周报/视觉组周报/视觉组-林世鹏-第1周'],
                initialOpenGroupIndex: 1,
            },{
                title: '电控组周报',
                children: ['/周报/电控组周报/电控组-褚仕成-第1周'],
                initialOpenGroupIndex: 1,
            },{
                title: '机械组周报',
                children: ['/周报/机械组周报/机械组-王民爽-第1周'],
                initialOpenGroupIndex: 1,
            }
        ]
    },
};
