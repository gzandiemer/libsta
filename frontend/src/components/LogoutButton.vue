<template>
  <v-btn color="primary" dark depressed text @click="logout"
    ><v-icon left>mdi-power</v-icon>Logout</v-btn
  >
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      return this.logoutUser().then(() => {
        this.$router.push({ name: 'homepage' })
      })
    }
  }
}
</script>