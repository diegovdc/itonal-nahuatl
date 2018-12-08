<script>
export default {
  head() {
    return {
      title: 'Trabajo Comunal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Colaboradores en la realización del audio libro Nahuatl: Axhan, Cemanahuatl ihuan Cahuitl (Nahuatl: Hoy, Espacio y Tiempo)'
        }
      ]
    }
  }
}
</script>


<template lang="pug">
div.trabajo-comuna
  h1.title Trabajo Comunal
  .container
    .section
      h2.subtitle Tequio sonoro:
      p Arte a 360 Grados (Enrique Maraver & José Luis Romero)
      p Colectivo Ruido 13 (Aarón Escobar, Diego Villaseñor, Nefi Herrada, Rossana Lara)
      p Fabián Avila Elizalde
      p Alejandro Cachivache Reyes


    .section
      h2.subtitle Ilustraciones:
      p Alex Herrerías

    .section
      h2.subtitle Página web:
      p Diego Villaseñor

    .section
      h2.subtitle Agradecimientos:
      p María Cristina Arce
      p Rondalla Santo Domingo
      p Joel Martinez
      p Cuatlalupetzi Cuauhtotoatla
      p José de la Luz Sánchez
      p María Juliana Flores
      p José Guadalupe Zepeda
      p Antonia Luna, Efrén Capilla
      p Eduardo Arce
      p Catalina Sánchez
      p Osvaldo Pérez
      p Rodrigo Reyes

    .section
      h2.subtitle Apoyos:
      p Arte a 360 Grados
      p Colectivo Ruido Trece
      p PECDA / ITC
      p Patronato de Arte Contemporáneo PAC

    .section
      h2.subtitle Redacción en español:
      p Emmanuel Tepal Calvario
      p Maurilio Sánchez Flores

    .section
      h2.subtitle Redacción en nahuatl:
      p Fabiola Carrillo Tieco
      p Maurilio Sánchez Flores
      p José Luis Romero

    .section
      h2.subtitle Traducción en francés:
      p Jean Alexandre

    .section
      h2.subtitle Traducción en portugués:
      p Pool Dunkelblau

    .section
      h2.subtitle Traducción en zoque:
      p Antonio Gomez Gonzalez

    .section
      h2.subtitle Traducción en inglés:
      p Jan Dankra

    .section
      h2.subtitle Autor:
      p Maurilio Sánchez Flores. Registrado en el Instituto Nacional del Derecho de Autor. 2001-2018

</template>

<style lang="scss" scoped>
@import '../assets/colors.scss';
.title {
  font-size: 30px;
  text-align: center;
}

.subtitle {
  font-size: 18px;
  text-align: left;
  margin-left: 0;
  font-weight: bold;
  margin-bottom: 5px;
  padding-bottom: 0;
}


.container {
  max-width: 700px;
  flex-direction: column;
  text-align: left;
}

.section {
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.3;
}
</style>
