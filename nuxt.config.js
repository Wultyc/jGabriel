export default {
  //Project global name
  globalName: 'myCustomName',

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap.min.css',
    '~/static/css/magnific-popup.css',
    '~/static/css/materialdesignicons.min.css',
    //'~/static/css/owl.carousel.min.css',
    '~/static/css/owl.theme.default.min.css',
    '~/static/css/flickity.css',
    '~/static/css/style.css'
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
  build: {
  }
}
