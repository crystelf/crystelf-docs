import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crystelf Docs",
  description: "晶灵相关服务帮助文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '晶灵核心', link: '/core/' },
      { text: 'Bot 服务', link: '/bot/' },
    ],

    sidebar: {
      '/bot/': [
        {
          text: 'Bot 文档',
          items: [
            { text: '介绍', link: '/bot/' },
            { text: '安装与配置', link: '/bot/setup' },
            { text: '使用指南', link: '/bot/guide' }
          ]
        }
      ],
      '/core/': [
        {
          text: '核心文档',
          items: [
            { text: '概述', link: '/core/' },
            { text: 'API 接口', link: '/core/api' },
            { text: '开发指南', link: '/core/dev-guide' }
          ]
        }
      ]
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/crystelf' }
    ]
  }
})
