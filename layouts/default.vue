<script>
import { mapActions, mapState } from 'vuex'
import Menu from '~/components/menu.vue'
import EventHub from '~/EventHub'
import { getOnLocal } from '~/session-storage'

export default {
  components: {
    Menu
  },
  mounted() {
    this.getPoemas()
    let idioma = getOnLocal('idioma') || 'es'
    this.$store.commit('cambiarIdioma', idioma)
  },
  methods: {
    ...mapActions(['getPoemas', 'idiomas']),
    bodyHover() {
      EventHub.$emit('body-hover')
    }
  }
}
</script>

<template lang='pug'>
  div(@mouseover='bodyHover')
    Menu
    nuxt
</template>

<style lang="scss">
// This is for globally accesible scss
@import '../assets/mazorca.scss';
</style>

