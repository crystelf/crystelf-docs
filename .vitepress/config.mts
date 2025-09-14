import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Crystelf Docs',
  description: '晶灵相关服务帮助文档',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icon/crystelf-logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon/crystelf-logo.png' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '晶灵核心', link: '/core/' },
          { text: '晶灵机器人', link: '/bot/' },
          { text: '雾雨MC服务器', link: '/fograin/' },
        ],
        sidebar: {
          '/bot/': [
            {
              text: '晶灵智能机器人文档',
              items: [
                { text: '概述', link: '/bot/' },
                { text: '功能速查', link: '/bot/guide' },
                {
                  text: '群管功能',
                  items: [
                    { text: '1', link: '/bot/guide' },
                    { text: '2', link: '/bot/guide' },
                  ],
                },
                { text: '关于使用', link: '/bot/about-use' },
                { text: '答疑', link: '/bot/issue' },
              ],
            },
          ],
          '/core/': [
            {
              text: '晶灵核心文档',
              items: [
                { text: '概述', link: '/core/' },
                { text: '接口速查', link: '/core/guide' },
                {
                  text: '开放接口',
                  items: [
                    { text: '2', link: '/core/1' },
                    { text: '3', link: '/core/2' },
                  ],
                },
              ],
            },
          ],
          '/fograin/': [
            {
              text: '雾雨服务器指南',
              items: [
                { text: '服务器介绍', link: '/fograin/about' },
                {
                  text: '服务器插件使用说明',
                  items: [
                    { text: '1', link: '/fograin/' },
                    { text: '2', link: '/fograin/setup' },
                    { text: '3', link: '/fograin/guide' },
                  ],
                },
                { text: '致谢', link: '/fograin/thanks' },
              ],
            },
          ],
          '/licenses': [
            {
              text: '使用协议',
              items: [
                { text: '晶灵核心', link: '/licenses/agreement/core-agreement' },
                { text: '晶灵智能机器人', link: '/licenses/agreement/bot-agreement' },
                { text: '晶灵计算服务器', link: '/licenses/agreement/compute-agreement' },
                { text: '雾雨MC服务器', link: '/licenses/agreement/fograin-agreement' },
              ],
            },
            {
              text: '隐私政策',
              items: [
                { text: '晶灵核心', link: '/licenses/privacy-policy/core-privacy-policy' },
                { text: '晶灵智能机器人', link: '/licenses/privacy-policy/bot-privacy-policy' },
                { text: '晶灵计算服务器', link: '/licenses/privacy-policy/compute-privacy-policy' },
                { text: '雾雨MC服务器', link: '/licenses/privacy-policy/fograin-privacy-policy' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/crystelf' }],
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Core', link: '/en/core/' },
          { text: 'Bot Service', link: '/en/bot/' },
        ],
        sidebar: {
          '/en/bot/': [
            {
              text: 'Bot Docs',
              items: [
                { text: 'Introduction', link: '/en/bot/' },
                { text: 'Setup', link: '/en/bot/setup' },
                { text: 'Guide', link: '/en/bot/guide' },
              ],
            },
          ],
          '/en/core/': [
            {
              text: 'Core Docs',
              items: [
                { text: 'Overview', link: '/en/core/' },
                { text: 'API', link: '/en/core/api' },
                { text: 'Dev Guide', link: '/en/core/dev-guide' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/crystelf' }],
      },
    },
  },
})
