import Vuex from 'vuex'
import axios from 'axios'
import * as R from 'ramda'

console.log('env', process.env)
const apiPoemas = () => {
  return axios.get('/poemas.json')
    .then(R.pipe(
      R.pathOr([], ['data']),
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
      }
    },
    mutations: {
      setPoemas(state, poemas) {
        state.poemas = poemas
      }
    }
  })
}

export default createStore
