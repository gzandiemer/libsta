<template lang="pug">
  main#app
    app-header
    br
    br
    section.content
      .msg
        err-msg(v-if='error' :msg='error')
      router-view
    //- app-footer
</template>

<script>
import Header from './components/Header.vue'
import Errors from './components/Errors'
// import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'err-msg': Errors
    // 'app-footer': Footer
  },
  computed: {
    ...mapGetters(['error'])
  }
}
</script>

<style>
body, html {
    margin: 0;
    font-family: 'Lato', Helvetica, sans-serif;
    /* font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;  */
   
}

#app {
  font-family: 'Lato', Helvetica, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  min-height: calc(100vh - 120px);
}

h2 {
  font-family: 'Merriweather', serif; 
}
</style>