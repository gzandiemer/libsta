<template>
  <button @click="logout"></button>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      return this.logoutUser().then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>