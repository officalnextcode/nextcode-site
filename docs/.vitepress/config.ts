import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'NextCode',
    description: 'A lightweight remote IDE for developers',
    base: '/nextcode-site/',
    locales: {
        root: {
            label: 'English',
            lang: 'en-US',
            themeConfig: {
                nav: [
                    { text: 'Support', link: '/support' },
                    { text: 'Privacy', link: '/privacy' }
                ]
            }
        },

        zh: {
            label: '中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: [
                    { text: '支持', link: '/zh/support' },
                    { text: '隐私政策', link: '/zh/privacy' }
                ]
            }
        }
    },

    themeConfig: {
        logo: '/logo.png', // 可先不放

        socialLinks: [
            { icon: 'github', link: 'https://github.com/yourname/nextcode' }
        ],

        footer: {
            message: '© 2026 NextCode. All rights reserved.'
        }
    }
})
