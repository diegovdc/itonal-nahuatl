<script>
import { mapActions, mapState } from 'vuex'
import Menu from '~/components/menu.vue'
import EventHub from '~/EventHub'
import { getOnLocal } from '~/session-storage'
import * as R from 'ramda'
import log from 'tap-logger'

const parseQs = R.pipe(
  R.split('?'),
  R.pathOr('', [1]),
  R.split('='),
  R.aperture(2),
  R.fromPairs
)

export default {
  components: {
    Menu
  },
  mounted() {
    this.getPoemas()
    let idioma =
      R.path(['$route', 'query', 'l'], this) ||
      R.path(['l'], parseQs(window.location.href)) || //por alguna razón no funciona window.location.search
      getOnLocal('idioma') ||
      'es'
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
  div.main(@mouseover='bodyHover')
    Menu
    nuxt
</template>

<style lang="scss">
// This is for globally accesible scss
@import '../assets/mazorca.scss';
</style>

<style lang="scss">
@import '../assets/mixins.scss';
.main {
  padding-top: 60px;
  @include under(menu-changes-size-1) {
    padding-top: 80px;
  }
  @include under(menu-changes-size-2) {
    padding-top: 120px;
  }
  @include under(menu-changes-size-3) {
    padding-top: 140px;
  }
}
</style>
