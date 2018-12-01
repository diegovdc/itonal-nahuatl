<script>
import EventHub from '~/EventHub'
import { mapState, mapGetters } from 'vuex'
import { pathOr } from 'ramda'
import log from 'tap-logger'

export default {
  data() {
    return {
      submenuIsOpen: false,
      idiomas: {
        nah: 'Náhuatl',
        es: 'Español',
        zoq: 'Zoque',
        pt: 'Português',
        fr: 'Français',
        en: 'English'
      }
    }
  },

  computed: {
    ...mapGetters(['shownPoemas'])
  },

  watch: {
    // shownPoemas() {
    //   if (this.$route.fullPath === '/#poemas' && process.browser) {
    //     this.goToPoemas()
    //   }
    // }
  },

  created() {
    EventHub.$on('body-hover', () => {
      this.closeSubmenu()
    })
  },

  methods: {
    pathOr,
    openSubmenu() {
      this.submenuIsOpen = true
    },

    closeSubmenu() {
      this.submenuIsOpen = false
    },

    seleccionarIdioma(idioma_key) {
      this.$store.commit('cambiarIdioma', idioma_key)
      this.$router.push({ query: { l: idioma_key } })
      this.closeSubmenu()
    },

    goToPoemas() {
      if (this.$route.path !== '/') {
        const poemas = document.querySelector('#poemas')
        this.$router.push({ path: '/', hash: '#poemas' })
        return
      }
      this.$nextTick(() => {
        const poemas = document.querySelector('#poemas')
        if (poemas) {
          console.warn('menu scroll')
          window.scrollTo({ top: log(this.getCoords(poemas).top) - 150 })
        }
      })
    }
  }
}
</script>


<template lang="pug">
div#menu.menu
  .menu__container
    p.menu__link--home
      nuxt-link(:to='"/?l="+lang' v-if='$route.name !== "index"') Itonal Nahuatl
    div.right-side
      div.submenu(@mouseover.stop='openSubmenu')
        span {{getTrans('Idiomas', ['menu', 'languages'])}}
        transition(name='submenu')
          div.submenu-container(v-show="submenuIsOpen")
            p.link(
              v-for='(idioma, key) in idiomas'
              @click='seleccionarIdioma(key)'
              ) {{ idioma }}
      p.link.link--main
        span(@click='goToPoemas') {{getTrans('Poemas', ['menu', 'poems'])}}
      p.link.link--main
        nuxt-link(to='/acerca') {{getTrans('Acerca', ['menu', 'about'])}}

</template>


<style lang="scss" scoped>
@import '../assets/mixins.scss';

$main-link-width: 106px;

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 16px;
  z-index: 999;
  background-color: #fff;
  font-size: 18px;
  &__container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @include under(menu-flex-wrapped) {
      flex-wrap: wrap;
    }
  }

  &__link--home {
    font-weight: bold;
  }
}

.submenu {
  position: relative;
  width: $main-link-width;
  text-align: center;

  //transitions
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.7s ease;
  }
  span {
    position: relative;
    z-index: 999;
    width: 100%;
    display: block;
  }
  & .link {
    padding: 7px;
  }
  &-container {
    z-index: 1;
    position: absolute;
    padding-top: 24px;
    padding-bottom: 5px;
    padding-left: 3px;
    padding-right: 3px;
    width: 100%;
    top: -4px;
    left: 0;
    background-color: #eee;
  }
}

.right-side {
  display: flex;
  @include under(menu-flex-wrapped) {
    padding-top: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

.link {
  padding: 0 7px;
  cursor: pointer;
  &--main {
    min-width: $main-link-width;
    text-align: center;
    margin-bottom: 7px;
  }
}
</style>
