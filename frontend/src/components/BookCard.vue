<template>
<article class="book-card">
  <h2 class="card-title">
    <router-link :to="bookUrl"> {{ book.title }}</router-link> 
  </h2>
  <img :src="`https://picsum.photos/300/200?random=${book._id}`" alt=""/>
  <p> By {{ book.authorName }}
  <p> In {{ book.language }}</p>
  <p> In {{ book.pubDate }}</p>
  <button @click="onLike">Like</button>
  <button @click="onRequest">Request</button>
</article>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  computed: {
    bookUrl() {
      return `/book/${this.book._id}`;
    }
  },
  methods: {
    onLike() {
      console.log("like button works")
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