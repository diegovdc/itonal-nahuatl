<script>
import Logo from '~/components/Logo.vue'
import log from 'tap-logger'
import { mapState, mapActions, mapGetters } from 'vuex'
import * as R from 'ramda'
export default {
  head() {
    let lang = R.pathOr('es', ['$route', 'query', 'l'], this)
    let poema = R.pathOr({}, [this.$route.params.poema, lang, 0], this.poemas)
    let getMeta = meta => R.pathOr('', ['attributes', meta], poema)
    return {
      title: this.titulo(poema),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Poema del libro "Nahuatl: Axhan, Cemanahuatl ihuan Cahuitl" de Maurilo Sánchez '
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.baseUrl}/images/${getMeta('imagen')}`
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content: getMeta('imagen_ancho')
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content: getMeta('imagen_alto')
        }
      ]
    }
  },

  components: {
    Logo
  },
  computed: {
    ...mapState(['poemas', 'lang']),
    ...mapGetters(['shownPoemas']),
    poema() {
      let poema = this.$route.params.poema
      return R.pipe(R.pathOr({}, [poema, this.lang, 0]))(this.poemas)
    },

    audio_() {
      return this.audio(this.poema)
    },

    imagen_() {
      return this.imagen(this.poema)
    },

    notasAlPie() {
      return R.pathOr({}, ['attributes', 'notas_al_pie'], this.poema)
    },

    nextPoema() {
      let currentPoema = R.pathOr(Infinity, ['attributes', 'orden'], this.poema)
      return R.pipe(
        R.find(p => R.path(['attributes', 'orden'], p) === currentPoema + 1)
      )(this.shownPoemas)
    },

    prevPoema() {
      let currentPoema = R.pathOr(Infinity, ['attributes', 'orden'], this.poema)
      return R.pipe(
        R.find(p => R.path(['attributes', 'orden'], p) === currentPoema - 1)
      )(this.shownPoemas)
    }
  },
  mounted() {
    this.getPoemas()
    this.$router
  },

  methods: {
    ...mapActions(['getPoemas'])
  }
}
</script>


<template lang="pug">
mixin nav
  .nav
    .nav__link-container
      nuxt-link(v-if="prevPoema" :to="'/poemas/'+slug(prevPoema)") {{getTrans('<<', ['poems', 'prev'])}} {{titulo(prevPoema)}}
    .nav__link-container
      nuxt-link(v-if="nextPoema" :to="'/poemas/'+slug(nextPoema)") {{titulo(nextPoema)}} {{getTrans('>>', ['poems', 'next'])}}
div.poema-main
  h1.title {{ titulo(poema) }}
  +nav
  audio.audio(v-if='audio_' :src='baseUrl+"/audios/"+audio_' controls)
  .poema-main-container
    .col.container.poema
      .body(v-html='poema.body')
      .notas-al-pie
        p(v-for="(nota, key) in notasAlPie")
          sup {{key}}
          span(v-html="nota")
    .col.img
      img(v-if='imagen_' :src='baseUrl+"/images/"+imagen_')
  +nav
</template>


<style lang='scss' scoped>
@import '../../assets/mixins.scss';
@import '../../assets/colors.scss';

.poema-main {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}

.poema-main-container {
  display: flex;
  flex-wrap: wrap;
  & .col {
    width: 50%;
    @include under(poema) {
      width: 100%;
      &.img {
        // order: 0;
        padding-bottom: 20px;
        max-width: 500px;
        margin: 0 auto;
      }
      &.poema {
        // order: 1;
      }
    }
  }
}

.container.poema {
  display: flex;
  flex-direction: column;
}

.audio {
  margin-bottom: 30px;
  max-width: 350px;
  width: 100%;
  display: block;
  // margin-left: auto;
  // margin-right: auto;
  @include under(poema) {
  }
}

.body /deep/ {
  // padding: 20px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  p {
    margin-bottom: 20px;
    line-height: 1.45;
  }
  sup {
    font-size: 14px;
    padding: 2px;
    position: relative;
    top: -5px;
  }
}

.nav {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-bottom: 30px;
  justify-content: space-around;

  &__link {
    &-container {
      color: darken($link-hover, 15%);
      text-align: center;
      &:hover {
        color: $link-hover;
        text-decoration: underline;
      }
    }
  }
}

.notas-al-pie {
  padding-top: 10px;
  p {
    margin-bottom: 15px;
    font-size: 14px;
    sup {
      font-size: 11px;
      padding-right: 5px;
      position: relative;
      top: -4px;
      font-weight: bold;
    }
  }
}
</style>
