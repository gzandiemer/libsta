<template lang="pug">
  main
    h2 BookAll.vue
    h3 {{ book.title }}
    section
      book-card(v-for="book in books", :book="book", :key="book.id")
</template>

<script>
// @ is an alias to /src
import BookCard from '@/components/BookCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BookAll',
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
</style>