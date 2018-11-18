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
    },

    audio_() {
      return this.audio(this.poema)
    },

    imagen_() {
      return this.imagen(this.poema)
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
div.poema-main
  h1.subtitle {{ titulo(poema) }}
  .poema-main-container
    .col.container.poema
      .body(v-html='poema.body')
      audio.audio(v-if='audio_' :src='baseUrl+"/audios/"+audio_' controls)
    .col.img
      img(v-if='imagen_' :src='baseUrl+"/images/"+imagen_')
</template>


<style lang='scss' scoped>
@import '../../assets/mixins.scss';

.poema-main {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
.subtitle {
  margin-bottom: 40px;
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
    line-height: 1.3;
  }
}
</style>
