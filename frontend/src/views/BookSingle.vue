<template lang="pug">
  main
    h2 Book.vue
    section
      book-card(:book="book")
</template>

<script>
// @ is an alias to /src
import BookCard from '@/components/BookCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BookSingle',
  components: {
    BookCard
  },
  computed: {
    ...mapState(['book'])
  },
  methods: {
    ...mapActions(['fetchBook'])
  },
  created() {
    this.fetchBook(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>