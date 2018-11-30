
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['shownPoemas'])
  },

  mounted() {
    this.$nextTick(() => {
        const poemas = document.querySelector('#poemas')
 console.log("poemas ", poemas);
 console.log("this.$route.hash ", this.$route.hash);
        if (this.$route.hash === '#poemas' && poemas) {
          console.log('scroling')

          poemas.scrollIntoView()
        }
      })
  }
}
</script>

<template lang='pug'>
section.container
  div

    h1.title Itonal Náhuatl
    .main-img-container
      img.main-img(:src='baseUrl+"/images/home.jpg"')
    h2.subtitle poesías de Don Maurilio Sánchez

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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: $main;
  letter-spacing: 1px;
  width: 100%;
  background-color: #fff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
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
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.poema {
  margin-bottom: 5px;
  padding: 5px;
  color: $main;
}
</style>

