const pkg = require('./package')
const log = require('tap-logger')
const R = require('ramda')

const poemasRoutes = () =>
  R.pipe(
    R.map(R.path(['attributes', 'slug'])),
    R.uniq,
    R.map(p => `/poemas/${p}`)
  )(require(`./static/poemas.json`))

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/itonal-nahuatl/'
    }
  } : {}

const baseURL = log(
    'DEPLOY_ENV == GH_PAGES',
    process.env.DEPLOY_ENV === 'GH_PAGES'
  ) ?
  'https://diegovdc.github.io/itonal-nahuatl/' :
  'http://localhost:3000'

module.exports = {
  mode: 'universal',
  ...routerBase,
  env: {
    hola: 'mundo',
    baseURL
  },
  generate: {
    routes: [...poemasRoutes()] /*? */
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['./plugins/api'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
