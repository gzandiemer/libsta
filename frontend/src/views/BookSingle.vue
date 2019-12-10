<template>
  <main>
    <section class="card">
      <book-card :book="book"></book-card>
    </section>
    <section class="container">
      <div class="columns">
        <div class="column">
          <strong>Comments</strong>
          <div v-for="comment in comments" :key="comment.id" class="comments">
            {{ comment }}
          </div>
        </div>
        <div class="column">
          <strong>Timestamp</strong>
          <div
            v-for="timestamp in timestamps"
            :key="timestamp.id"
            class="timestamps"
          >
            {{ timestamp }}
          </div>
        </div>
        <book-comments />
      </div>
      <comment-count />
    </section>
  </main>
</template>

<script>
import BookCard from '../components/BookCard'
import BookComments from '../components/BookComments'
import CommentCount from '../components/CommentCount'

import { mapState, mapActions } from 'vuex'
export default {
  name: 'BookSingle',
  components: {
    BookCard,
    BookComments,
    CommentCount
  },
  computed: {
    ...mapState(['book']),
    comments() {
      return this.$store.getters.getComments
    },
    timestamps() {
      return this.$store.getters.getTimestamps
    }
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
.card,
.container {
  float: left;
  width: 49%;
}

.column {
  float: left;
  width: 49%;
}
</style>
