// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  elementPlus: {
    /** Options */
  },
  srcDir: 'app/',
  components: [
    {
      path: '~/components',
      pathPrefix: false // 取消自动前缀，避免名称冲突
    }
  ],
  app: {
    // head
    head: {
      title: 'Tweblog',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content: 'ElementPlus + Nuxt3'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon256.png' },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/fontawesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/brands.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/solid.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/regular.min.css'
        }
      ],
      script: [
        {
          innerHTML: `
    /* 在 index.html 中就初始化颜色，以避免加载过程中的白屏 */
    // 读取本地存储中的 vueuse-color-scheme 值
    const scheme = localStorage.getItem('vueuse-color-scheme') || 'auto';
    // 根据 vueuse-color-scheme 的值设置主题
    if (scheme === 'dark' || (scheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
          `
        }
      ]
    }
  },

  // css
  css: [
    '~/assets/styles/main.scss',
    'element-plus/theme-chalk/dark/css-vars.css',
    'element-plus/theme-chalk/display.css'
  ]
})
