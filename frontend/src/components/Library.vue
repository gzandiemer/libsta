<template lang="pug">
  main
    section
      book-card(v-for="book in books", :book="book", :key="book.id")
    
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  computed: {
    bookUrl() {
      return `/book/${this.book._id}`
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>