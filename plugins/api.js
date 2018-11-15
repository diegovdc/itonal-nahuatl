import Vue from 'vue'
import * as R from 'ramda'
Vue.mixin({
  methods: {
    apiPoemas() {
      if(!R.isEmpty(this.$store.state.poemas)) {
        return Promise.resolve(this.$store.state.poemas)
      }
      return this.$axios.get('/poemas.json')
        .then(R.pipe(
          R.pathOr([], ['data']),
          R.groupBy(R.path(['attributes', 'slug'])),
          R.map(R.groupBy(R.path(['attributes', 'idioma'])))
        ))
        .then(poemas => {
          this.$store.commit('setPoemas', poemas)
          return poemas
        })
        .catch(() => console.error('Hubo un error al traer los poemas'))
    }
  }
})
