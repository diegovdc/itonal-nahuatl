<script>
export default {
  head() {
    return {
      title: 'Acerca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Maurilio Sánchez: Campesino, músico y poeta, una persona consiente de los cambios que ha venido trayendo la “modernidad” en la comunidad nahua de San Isidro Buen Suceso. Datos de contacto.'
        }
      ]
    }
  },

  data() {
    return {
      defaultBio:
        'Campesino, músico y poeta, una persona consiente de los cambios que ha venido trayendo la “modernidad” en la comunidad nahua de San Isidro Buen Suceso, la cual ha habitado durante toda su vida. Él considera que el pensamiento nahua de la comunidad, tanto prehispánico como contemporáneo, constituye un pilar fundamental para la fortaleza cultural e identitaria de San Isidro y, de igual forma, un impulso para repensar procesos “modernos” que terminan dando un valor negativo a dicho pensamiento, cultura e identidad, los cuales –de fondodejan en el olvido y/o desvalorizan su riqueza considerablemente. De esta manera, la difusión, reapropiación y empoderamiento del entramado intersubjetivo nahua en sus formas y prácticas culturales se concibe como tarea inaplazable. Maurilio Sánchez lleva a cabo esta labor a través de la música y la poesía en lengua nahuatl. Es desde su propia lengua materna que canta el mundo nahua de la comunidad, cantor que expresa su sentir y su pensamiento. Poesía que denuncia el olvido: una ofrenda olorosa del poeta a su tierra.'
    }
  },

  mounted() {
    console.log('acerca')
  }
}
</script>


<template lang="pug">
div.acerca
  h1.title Maurilio Sánchez Flores
  h2.subtitle (Canoa, Puebla, 1967)
  .container
    p {{getTrans(defaultBio, ['bio'])}}
  .container
    .contacto
      h3 Si desea adquirir el libro físico escribanos a:
      a(href="mailto:Maurilio-nahua@outlook.es") Maurilio-nahua@outlook.es
      a(href="mailto:aa360grados@gmail.com") aa360grados@gmail.com
</template>

<style lang="scss" scoped>
@import '../assets/colors.scss';
@import '../assets/mixins.scss';
.title {
  @include page-title;
}

.subtitle {
  font-size: 18px;
}

.container {
  max-width: 700px;
}

p {
  font-size: 16px;
  line-height: 1.3;
}
.contacto {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  a {
    color: $link-hover;
    margin-bottom: 5px;
    padding: 5px 0;
  }
}
</style>
