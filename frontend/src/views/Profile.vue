<template lang="pug">
  main
    h2 Profile
    .card(v-if='user')
      ul.list-group
        li.list-group-item Email: {{ user.email }} 
        li.list-group-item Username: {{ user.username }}
        li.list-group-item Name: {{ user.fullName }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getProfile'])
  },
  created() {
    this.getProfile()
  }
}
</script>
<style scoped>
.card {
  border-radius: opx;
}
</style>
