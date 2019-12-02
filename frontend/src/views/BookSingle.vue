<template lang="pug">
  main
    h2 All Books
    section
      book-card(v-for="book in books", :book="book", :key="book.id")
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
    ...mapState(['books'])
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  created() {
    this.fetchBook(this.$route.params.id)
  }
}
</script>

<style scoped>
section {
  padding: 40px 0;
}
</style>