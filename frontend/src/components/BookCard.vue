<template lang="pug">
  article.book-card
    h2.card-title
      router-link(:to='bookUrl')  {{ book.title }}
    img(:src='`https://picsum.photos/300/200?random=${book._id}`' alt='')
    .text
      p
        | By {{ book.authorName }}
      p In {{ book.language }}
      p In {{ book.pubDate }}
    .btns
      button(@click='onLike') Like! 
      p {{ likers }} people liked this
      
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BookCard',
  props: ['book'],
  computed: {
    bookUrl() {
      return `/book/${this.book._id}`
    }, 
    likers(){
      return this.book.likers.length
    }
  },
  methods: {
    ...mapActions(['likeBook']),
    onLike() {
      this.likeBook()
      console.log('Like button works!')
    }
  }
}
</script>

<style scoped>
.book-card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 25%;
}

.card-title {
  font-family: 'Sue Ellen Francisco', cursive;
  text-align: center;
}
</style>
