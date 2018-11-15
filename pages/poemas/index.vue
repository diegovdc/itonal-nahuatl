<script>
import { mapActions, mapState } from 'vuex'
import * as R from 'ramda'
import log from 'tap-logger'
export default {
  computed: {
    ...mapState(['poemas', 'lang']),
    shownPoemas() {
      console.log('this.poemas ', this.poemas)
      return R.pipe(
        R.map(R.path([this.lang, 0])),
        log
      )(this.poemas)
    }
  },
  mounted() {
    console.log(this.$router)

    this.getPoemas()
  },
  methods: {
    ...mapActions(['getPoemas'])
  }
}
</script>

<template lang="pug">
div
  h1 Poemas
  div(v-for='poema in shownPoemas')
    p
      nuxt-link(:to="`/poemas/${slug(poema)}`") {{ titulo(poema) }}

</template>
