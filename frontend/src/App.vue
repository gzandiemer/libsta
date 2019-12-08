<template lang="pug">
  main#app
    app-header
    br
    br
    section.content
      router-view
    app-footer
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
body,
html {
  margin: 0;
  font-family: 'Lato', Helvetica, sans-serif;
}

#app {
  font-family: 'Lato', Helvetica, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  min-height: calc(100vh - 130px);
}

h2 {
  font-family: 'Merriweather', serif;
}
</style>
