<template lang="pug">
  main
    p You are in Dashboard
    section
      h2 Most Popular Books
      book-card(v-for="book in books", :book="book", :key="book.id")
    section
      h2 Recent Members
      member-card(v-for="member in members", :member="member", :key="member.id")
    
</template>

<script>
// @ is an alias to /src
import BookCard from '@/components/BookCard.vue'
import MemberCard from '@/components/MemberCard.vue'
import { mapState, mapActions } from 'vuex'
import VueSlideBar from 'vue-slide-bar'

export default {
  name: 'home',
  components: {
    BookCard,
    MemberCard,
    VueSlideBar
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