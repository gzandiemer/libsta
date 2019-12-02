<template>
  <main>
    <h1>I am in MemberSingle.vue</h1>
    <section>
      <member-card :member="member"></member-card>
    </section>
    <section class="container table-responsive">
      <b-table striped hover bordered class="m-10" :items="library"></b-table>
      <b-nav-item :href='`/member/${member._id}/addbook`'>Add Book</b-nav-item>
    </section>
  </main>
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