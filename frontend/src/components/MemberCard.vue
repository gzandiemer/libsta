<template lang="pug">
  article.member-card
    h2.card-title
      router-link(:to='memberUrl')  {{ member.username }}
    img.img-circle.img-responsive(:src='`https://picsum.photos/300/200?random=${member._id}`' alt='')
    p  City: {{ member.city }}
    p  {{ member.followers }} followers 
    p  {{ member.following }} following 
</template>

<script>
export default {
  name: 'MemberCard',
  props: ['member', 'book'],
  computed: {
    memberUrl() {
      return `/member/${this.member._id}`
    }
    // followers(){
    //   return this.$store.member.followers.length
    // },
    // following() {
    //   return this.$store.member.following.length
    // }
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
