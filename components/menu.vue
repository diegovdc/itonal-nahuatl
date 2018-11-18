<script>
import EventHub from '~/EventHub'
import {storeOnLocal} from '~/session-storage'

export default {
  data() {
    return {
      submenuIsOpen: false,
      idiomas: {
        nah: 'Nahuatl',
        // tzo: 'Tzotzil',
        es: 'Español'
        // en: 'English'
      }
    }
  },

  created() {
    EventHub.$on('body-hover', () => {
      this.closeSubmenu()
    })
  },

  methods: {
    openSubmenu() {
      this.submenuIsOpen = true
    },

    closeSubmenu() {
      this.submenuIsOpen = false
    },

    seleccionarIdioma(idioma_key) {
      this.$store.commit('cambiarIdioma', idioma_key)
      storeOnLocal('idioma', idioma_key)
      this.closeSubmenu()
    }
  }
}
</script>


<template lang="pug">
div#menu.menu
  p
    nuxt-link(to='/' v-if='$route.path !== "/"') Itonal Nahuatl
  div.right-side
    div.submenu(@mouseover.stop='openSubmenu')
      span Idiomas
      transition(name='submenu')
        div.submenu-container(v-show="submenuIsOpen")
          p.link(
            v-for='(idioma, key) in idiomas'
            @click='seleccionarIdioma(key)'
            ) {{ idioma }}
    p.link
      nuxt-link(to='/#poemas') Poemas
    p.link
      nuxt-link(to='/acerca') Acerca

</template>


<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;
  max-width: 1220px;
  margin: 0 auto;
}

.submenu {
  position: relative;
  width: 72px;
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
    padding: 5px;
  }
  &-container {
    z-index: 1;
    position: absolute;
    padding-top: 24px;
    padding-bottom: 5px;
    width: 100%;
    top: -4px;
    left: 0;
    background-color: #eee;
  }
}

.right-side {
  display: flex;
}

.link {
  padding: 0 7px;
  cursor: pointer;
}
</style>
