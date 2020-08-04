/* eslint-disable no-console */

import dynamicRoutes from './utils/api'

export default {
  mode: 'universal',
  target: 'server', // 'static', // ref: https://nuxtjs.org/blog/going-full-static/

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Studio ^0^',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/fuz4vbo.css' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/global.js',
    { src: '~/plugins/remove-focus-outline.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://pwa.nuxtjs.org/
    ['@nuxtjs/pwa', { workbox: false, manifest: true }],

    // https://www.npmjs.com/package/nuxt-sanity
    [
      'nuxt-sanity',
      {
        projectId: 'a98bcom9', // string, required
        dataset: 'production', // string, required
        // token: '', // string, optional
        useCdn: true // boolean, optional, default is false
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** PWA module configuration
   ** See https://pwa.nuxtjs.org/
   */
  manifest: {
    icons: [],
    name: 'Studio ^0^',
    short_name: ' ^0^',
    theme_color: '#ba9f32'
  },
  pwa: {
    icon: {
      iconFileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      author: false,
      name: 'Studio ^0^'
    }
  },

  /*
   ** purgeCss module configuration
   */
  purgeCSS: {
    whitelistPatternsChildren: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^nuxt-link(|-exact)-active$/
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    // interval: 100,
    routes: dynamicRoutes
  }
}
