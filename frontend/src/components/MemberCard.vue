<template>
<article class="member-card">
  <h2 class="card-title">
    <router-link :to="memberUrl"> {{ member.userName }}</router-link> 
  </h2>
  <img :src="`https://picsum.photos/300/200?random=${member._id}`" alt="" class="img-circle img-responsive"/>

  <p> City: {{ member.city }}</p>
  <!-- <p> Books: {{ library }}</p> -->
  <p> {{ member.followers.length }} followers </p>
  <p> {{ member.followers.length }} following </p>
</article>
</template>

<script>
export default {
  name: 'MemberCard',
  props: ['member', 'book'],
  computed: {
    memberUrl() {
      return `/member/${this.member._id}`
    },
    library() {
      return this.member.library.map(book => {
        return {
          title: book.title,
          author: book.authorName,
          language: book.language,
          booked: book.booked ? 'Booked' : 'Available'
        }
      })
    }
  }
}
</script>

<style scoped>
.member-card {
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