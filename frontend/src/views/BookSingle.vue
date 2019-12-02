<template lang="pug">
  main
    h2 All Books
    section
      book-card(v-for="book in books", :book="book", :key="book.id")
    section
      book-comments(v-for="comment in sharedState.seedData", :comment="comment" :key="comment.id")
</template>

<script>
// @ is an alias to /src
import BookCard from '@/components/BookCard.vue'
import { store } from '@/seed/index.js'
import BookComments from '@/components/BookComments.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BookSingle',
  data() {
    return {
      sharedState: store.state
    }
  },
  components: {
    BookCard,
    BookComments
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