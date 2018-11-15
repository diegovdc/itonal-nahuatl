<script>
import Logo from '~/components/Logo.vue'
import log from 'tap-logger'
import { mapState, mapActions } from 'vuex'
import * as R from 'ramda'
export default {
  head() {
    return {
      title: 'About Us - Nuxt.js',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About our company Nuxt.js '
        }
      ]
    }
  },

  components: {
    Logo
  },
  computed: {
    ...mapState(['poemas', 'lang']),
    poema() {
      let poema = this.$route.params.poema
      return R.pipe(
        R.pathOr({}, [poema, this.lang, 0]),
        log
      )(this.poemas)
    }
  },
  mounted() {
    console.log('poema')

    this.getPoemas()
    this.$router
    console.log('this.$router ', this.$route.params.poema)
  },

  methods: {
    ...mapActions(['getPoemas'])
  }
}
</script>


<template lang="pug">
div
  h1 {{ titulo(poema) }}
  div.body(v-html='poema.body')
</template>


<style>
</style>
