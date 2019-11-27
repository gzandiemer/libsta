<template lang="pug">
  main
    section
      img(alt='logo' src='../assets/logo-books.png' width='350')
    section
      p Most popular books
      book-card(v-for="book in books", :book="book", :key="book.id")
    section
      p Recent members:
      book-card(v-for="member in members", :member="member", :key="member.id")
    
</template>

<script>
// @ is an alias to /src
import BookCard from '@/components/BookCard.vue'
import MemberCard from '@/components/MemberCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    BookCard,
    MemberCard
  },
  computed: {
    ...mapState(['books', 'members'])
  },
  methods: {
    ...mapActions(['fetchBooks', 'fetchMembers'])
  },
  created() {
    this.fetchBooks()
    this.fetchMembers()
  }
}
</script>

<style scoped>
section {
  padding: 40px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}
.increment-button:hover {
  background-color: darkcyan;
  color: white;
}
</style>