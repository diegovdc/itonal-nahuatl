
<script>
import { mapGetters } from 'vuex'
import log from 'tap-logger'
export default {
  computed: {
    ...mapGetters(['shownPoemas'])
  },

  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        const poemas = document.querySelector('#poemas')

        if (this.$route.hash.indexOf('#poemas') > -1 && poemas) {
          console.warn('home scroll')
          window.scrollTo({ top: log(this.getCoords(poemas).top - 150) })
        }
      }),
        600
    })
  }
}
</script>

<template lang='pug'>
section.container
  div
    h1.title {{getTrans('Nahuatl: Axhan, Cemanahuatl ihuan Cahuitl', ['siteTitle'])}}
    h3.subtitle por Don Maurilio Sánchez
    .main-img-container
      img.main-img(:src='baseUrl+"/images/home.jpg"')
    h2.subtitle {{getTrans('¡Nic nequi ni tlahtos, nic nequi tih nech caquis!', ['siteSubtitle'])}}

    div#poemas.poemas
      div(v-for='poema in shownPoemas')
        p.poema.link
          nuxt-link(:to="`/poemas/${slug(poema)}`") {{ titulo(poema) }}
</template>

<style lang='scss' scoped>
@import '../assets/colors.scss';
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 40px;
  margin-bottom: 15px;
  color: $main;
  letter-spacing: 1px;
  width: 100%;
  background-color: #fff;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: $main;
  word-spacing: 5px;
  padding-bottom: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.main-img {
  margin-bottom: 20px;
}

.poemas {
  text-align: center;
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.poema {
  margin-bottom: 5px;
  padding: 5px;
  padding-top: 10px;
  color: $main;
}
</style>

