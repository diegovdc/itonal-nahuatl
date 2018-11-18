<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import * as R from 'ramda'
import log from 'tap-logger'
export default {
  computed: {
    ...mapState(['poemas', 'lang']),
    ...mapGetters(['shownPoemas']),
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
