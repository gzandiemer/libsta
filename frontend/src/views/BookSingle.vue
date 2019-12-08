<template lang="pug">
   main
    section.card
      book-card(:book='book')
    //- section.container
    //-   .comments
    //-     book-comments(v-for='comment in comments', :comment='comment', :key='comment.id')
</template>

<script>
import BookCard from '../components/BookCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BookSingle',
  components: {
    BookCard
  },
  computed: {
    ...mapState(['book'])
  },
  methods: {
    ...mapActions(['fetchBook'])
  },
  created() {
    this.fetchBook(this.$route.params.id)
  }
}
</script>

<style scoped>
main {
  float: left;
}
/* .card {
  float: left;
  width: 40%;
}
.container {
  float: left;
  width: 50%;
} */
</style>
