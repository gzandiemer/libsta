<template>
  <main>
    <h2>{{ headline }}</h2>
    <div class="section">
      <h2>{{this.sections[0].headline}}</h2>
      <Carousel :cards="cards" />
    </div>
    <div class="section">
      <h2>{{this.sections[1].headline}}</h2>
    </div>
  </main>
</template> 

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "home",

  data() {
    return {
      headline:
        "HMost Popular Books",
      sections: [
        { headline: "Book1" },
        {
          headline: "Book2"
        }
      ],
      cards: [
        {
          headline: "book1",
          text:
            "blabla",
          imgName: "blabla"
        },
        {
          headline: "Use background sync to defer actions",
          text:
            "User inputs entered when offline are sent in the background once they get connectivity.",
          imgName: "cloud.svg"
        }
      ]
    }
  },
  computed: {
    ...mapState(["books", "members"])
  },
  methods: {
    ...mapActions(["fetchBooks", "fetchMembers"])
  },
  created() {
    this.fetchBooks();
    this.fetchMembers();
  }
}
</script>

<style scoped>
section {
  padding: 40px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}
.increment-button:hover {
  background-color: darkcyan;
  color: white;
}
</style>