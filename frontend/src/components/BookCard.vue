<template>
  <b-card
    :title="book.title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2 d-inline-block"
  >
    <b-card-text>
      <p>Author: {{ book.authorName }}</p>
      <p>In {{ book.language }}</p>
      <!-- <p>In {{ book}}'s Lib</p> -->
    </b-card-text>

    <b-button @click="onLike" href="#" variant="primary">Like</b-button>
  </b-card>
  <!-- //- article.card
//-   img(:src="`https://picsum.photos/300/200?random=${book._id}`", alt="")
//-   h2.card-title 
//-     router-link(:to="bookUrl") {{ book.title }} 
//-   p Author: {{ book.authorName }}
//-   p In {{ book.language }}
  //-   p In {{ book.owner}}'s Lib-->
</template>

<script>
export default {
  name: "BookCard",
  props: ["book"],
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
.card-title {
  font-family: 'Sue Ellen Francisco', cursive;
}
</style>