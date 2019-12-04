<template lang="pug">
  main
    section
      member-card(:member='member')
    section.container.table-responsive
      h2 {{ member.userName }}&apos;s Lib
      b-table.m-10(striped='' hover='' bordered='' :items='library')
        b-nav-item(:href='`/member/${member._id}/addbook`') Add Book
</template>

<script>
// @ is an alias to /src
import MemberCard from '@/components/MemberCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MemberSingle',
  components: {
    MemberCard
  },
  computed: {
    ...mapState(['member', 'book', 'members', 'books']),
    library() {
      return this.member.library.map(book => {
        return {
          title: book.title,
          author: book.authorName,
          language: book.language,
          pubDate: book.pubDate,
          booked: book.booked ? 'Booked' : 'Available'
        }
      })
    }
  },
  methods: {
    ...mapActions(['fetchMember', 'fetchMembers']),
    // addBook(){
    //       this.$router.push({name: 'addbook'})
    // }
  },
  created() {
    this.fetchMember(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>