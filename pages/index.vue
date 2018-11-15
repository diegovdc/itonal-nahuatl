<template>
  <section class="container">
    <div>
      <h1 class="title">
        poemas de don maurilio sanchez
      </h1>
      <h2 class="subtitle">
        Poesía Nahuatl
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$axios.get('/hola.json').then(console.log)
    console.log('holis')
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
