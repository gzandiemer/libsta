<template lang="pug">
  main
    section.card
      member-card(:member='member')
    section.container.table-responsive
      h2 {{ member.userName }}'s Lib
      b-table.m-10(striped='' hover='' bordered='' :items='library')
      b-nav-item(class="add", :href='`/member/${member._id}/addbook`') Add Book
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
main {
  display: inline-block;
}
.card {
  float: left;
  width: 40%;
}
.container {
  float:right;
  width: 50%;
}
.add {
    list-style-type: none
}

</style>