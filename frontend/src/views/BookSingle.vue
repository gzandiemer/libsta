<template lang="pug">
   main
    section.card
      book-card(:book='book')
    section.container
      .comments
        book-comments(v-for='comment in comments', :comment='comment', :key='comment.id')
</template>

<script>
import BookCard from '../components/BookCard'
import BookComments from '../components/BookComments'
import { mapState, mapActions, store } from 'vuex'
export default {
  name: 'BookSingle',
  data() {
    return {
      comments: store.state.comments
    }
  },
  components: {
    BookCard,
    BookComments
  },
  computed: {
    ...mapState(['book', 'comments'])
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
.card {
  float: left;
  width: 40%;
}
.container {
  float: left;
  width: 50%;
}

</style>