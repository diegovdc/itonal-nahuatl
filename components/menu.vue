<script>
import EventHub from '~/EventHub'

export default {
  data() {
    return {
      submenuIsOpen: false,
      idiomas: {
        nah: 'Nahuatl',
        tzo: 'Tzotzil',
        es: 'Español',
        en: 'English'
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
      this.closeSubmenu()
    }
  }
}
</script>


<template lang="pug">
div#menu.menu
  p
    nuxt-link(to='/') Itonal Nahuatl
  div.right-side
    div.submenu(@mouseover.stop='openSubmenu') Idiomas
      div.submenu-container(v-if="submenuIsOpen")
        p.link(
          v-for='(idioma, key) in idiomas'
          @click='seleccionarIdioma(key)'
          ) {{ idioma }}
    p.link
      nuxt-link(to='/poemas') Poemas
    p.link
      nuxt-link(to='/acerca') Acerca

</template>


<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.submenu {
  position: relative;
  padding-right: 7px;
  &-container {
    position: absolute;
    top: 16px;
    left: 0;
    background-color: #fff;
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
