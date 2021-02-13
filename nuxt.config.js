export default {
  //Project global name
  globalName: 'jGabriel',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jGabriel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'charset', name: 'charset', content: 'utf-8' },
      { hid: 'author', name: 'author', content: 'Jorge Gabriel Azevedo' },
      { hid: 'description', name: 'description', content: 'Jorge Gabriel Azevedo personal website and portfolio' },
      { hid: 'keywords', name: 'keywords', content: 'Wultyc, jGabriel, Notebook, jGabriel Notebook, Jorge Gabriel Azevedo,' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css', integrity:'sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==', crossorigin:'anonymous' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/flickity.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}