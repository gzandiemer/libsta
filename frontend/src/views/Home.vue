<template lang="pug">
  main
    section
      h2 Most Popular Books
      book-card(v-for='book in books' :book='book' :key='book.id')
    section
      h2 Recent Members
      member-card(v-for='member in members' :member='member' :key='member.id')
</template>

<script>
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
</style>
