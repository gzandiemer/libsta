<template>
  <article class="card">
    <img
      class="card-icon"
      :src="`https://picsum.photos/300/200?random=${book._id}`"
      alt="card icon"
    />
    <div class="card-content">
      <h3 class="headline">
        <router-link :to="bookUrl">{{ book.title }}</router-link>
      </h3>
      <p>Author: {{ book.authorName }}</p>
      <p>In {{ book.language }}</p>
      <p>In {{ book.owner}}'s Lib</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: ['book', 'member'],
  computed: {
    bookUrl() {
      return `/book/${this.book._id}`;
    },
    memberUrl() {
      return `/member/${this.member._id}`;
    }
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 20px 60px 0 rgba(41, 67, 100, 0.21);
  width: 280px;
  height: 420px;
  padding: 10px;
}

.headline {
  font-weight: bold;
}

.card-icon {
  pointer-events: none;
  width: 180px;
  padding: 40px 20px 0px 20px;
}

.card-content {
  padding: 20px;
}
</style>