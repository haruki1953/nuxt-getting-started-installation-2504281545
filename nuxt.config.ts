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
