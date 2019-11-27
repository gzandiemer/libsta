<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${member._id}`", alt="")
  h2.card-title 
    router-link(:to="memberUrl") {{ member.userName }} 
  p City: {{ member.city }}
  p Books: {{ member.library.length }}
  p Followers: {{ member.library.length }}
  p Following: {{ member.library.length }}
</template>

<script>
export default {
  name: 'MemberCard',
  props: ['Member'],
  computed: {
    memberUrl() {
      return `/member/${this.member._id}`
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