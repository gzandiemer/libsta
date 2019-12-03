  
<template>
  <nav id="app">
    <app-header />
    <router-view />
  </nav>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style>
body, html {
    margin: 0;
    font-family: 'Lato', Helvetica, sans-serif;
    /* font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;  */
   
}

h2 {
  font-family: 'Merriweather', serif; 
}
#app {
  font-family: 'Lato', Helvetica, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>