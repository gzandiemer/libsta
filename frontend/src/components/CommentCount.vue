<template>
    <main class="comment-count">
      Comment count: <strong>{{ commentCount }}</strong>
    </main>
</template>

<script>
export default {
    computed: {
    commentCount() {
      return this.$store.getters.getCommentCount;
    }
  }
}
</script>
<style scoped>
.comment-count {
  margin-top: 48px;
}
</style>