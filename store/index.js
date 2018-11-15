import Vuex from 'vuex'
import axios from 'axios'
import * as R from 'ramda'
import log from 'tap-logger'

const baseUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000' :
  'https://diegovdc.github.io/maurilio-sanchez'

const get = path => axios.get(baseUrl + path).then(R.pathOr([], ['data']))

const apiPoemas = () => {
  return get('/poemas.json')
    .then(R.pipe(
      R.groupBy(R.path(['attributes', 'slug'])),
      R.map(R.groupBy(R.path(['attributes', 'idioma'])))
    ))
    .catch(() => console.error('Hubo un error al traer los poemas'))
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      poemas: [],
      lang: 'es'
    }),
    actions: {
      getPoemas({
        commit
      }, poemas) {
        apiPoemas()
          .then(poemas =>
            commit('setPoemas', poemas)
          )
      },


    },
    mutations: {
      setPoemas(state, poemas) {
        state.poemas = poemas
      },

      cambiarIdioma(state, idioma) {
        state.lang = idioma
      }
    }
  })
}

export default createStore
