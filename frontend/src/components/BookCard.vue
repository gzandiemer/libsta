<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${book._id}`", alt="")
  h2.card-title 
    router-link(:to="bookUrl") {{ book.title }} 
  p {{ book.authorName }}
  p {{ book.language }}
  p {{ book.authorName }}
  p {{ book.pubDate }}
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  computed: {
    bookUrl() {
      return `/book/${this.book._id}`
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}
</style>