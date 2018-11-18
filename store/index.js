import Vuex from 'vuex'
import axios from 'axios'
import * as R from 'ramda'
import log from 'tap-logger'
import {
  baseUrl
} from '~/base-url'
import poemas from '../static/poemas.json'

const get = path => axios.get(baseUrl + path).then(R.pathOr([], ['data']))

const processPoemas = R.pipe(
  R.groupBy(R.path(['attributes', 'slug'])),
  R.map(R.groupBy(R.path(['attributes', 'idioma'])))
)
const apiPoemas = () => {
  return get('/poemas.json')
    .then(processPoemas)
    .catch(() => console.error('Hubo un error al traer los poemas'))
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      poemas: processPoemas(poemas),
      // poemas: [],
      lang: ''
    }),
    actions: {
      getPoemas({
        commit,
        state
      }, poemas) {
        if(!R.isEmpty(state.poemas)) {return Promise.resolve(state.poemas)}
        return apiPoemas()
          .then(poemas =>
            commit('setPoemas', poemas)
          )
      },
    },
    getters: {
      shownPoemas: state => {
        let orden = R.pathOr(Infinity, ['attributes', 'orden'])
        return R.pipe(
          R.map(R.path([state.lang, 0])),
          R.values,
          R.sort((a, b) => orden(a) - orden(b)),
          log
        )(state.poemas)
      }
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
