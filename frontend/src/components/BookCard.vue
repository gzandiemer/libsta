<template>
<article class="book-card">
  <h2 class="card-title">
    <router-link :to="bookUrl"> {{ book.title }}</router-link> 
  </h2>
  <img :src="`https://picsum.photos/300/200?random=${book._id}`" alt=""/>
  <p> By {{ book.authorName }}
  <p> In {{ book.language }}</p>
  <p> In {{ book.pubDate }}</p>
  <p> {{ counter }} 
    <button v-on:click.self="onLike">Likes</button>
  </p>
  <button>Request</button>
</article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BookCard',
  props: ['book'],
  computed: {
    ...mapState(['counter']),
    bookUrl() {
      return `/book/${this.book._id}`;
    }
  },
  methods: {
    ...mapActions(['incrementCounter']),
    onLike() {
    this.incrementCounter()
    console.log('Like button works!')  
    }
  }
};
</script>

<style scoped>
.book-card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}

.card-title {
  font-family: 'Sue Ellen Francisco', cursive;
  text-align: center;
}
</style>