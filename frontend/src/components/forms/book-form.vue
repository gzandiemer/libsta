<template>
  <div id="book-form">
    <div class="book-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="title">Title</label>
          <input type="string" id="title" v-model="form.title" />
        </div>
        <div class="input">
          <label for="authorName">Author</label>
          <input type="string" id="authorName" v-model="form.authorName" />
        </div>
        <div class="input">
          <label for="language">Language</label>
          <input type="string" id="language" v-model="form.language" />
        </div>
        <div class="input">
          <label for="pubDate">Publication Date</label>
          <input type="string" id="pubDate" v-model="form.pubDate" />
        </div>
        <div class="btns">
          <button type="submit" class="submit" @click="onSubmit">Add</button>
          <button type="reset" class="reset" @click="onReset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "BookForm",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      form: {
        title: "",
        authorName: "",
        language: "",
        pubDate: "",
      },
      show: true
    };
  },
  computed: {
    ...mapState(["member", "book"])
  },

  methods: {
    ...mapActions(["addBook"]),
    onSubmit() {
      this.addBook({ form: this.form, id: this.id });
      this.$router.push({ path: `/member/${this._id}` });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.title = "";
      this.authorName = "";
      this.language = "";
      this.pubDate = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.book-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #521751;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.btns button {
  border: 1px solid #521751;
  /*color: #0AA38C;*/
  padding: 10px 20px;
  text-align: center;
  font: inherit;
  cursor: pointer;
  width: 80px;
}

.btns button:hover,
.btns button:active {
  color: white;
}

.btns button[disabled],
.btns button[disabled]:hover,
.btns button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.reset {
  color: #bf0b2c;
}

.reset:hover,
.reset:active {
  background-color: #bf0b2c;
}

.submit {
  color: #0aa38c;
}
.submit:hover,
.submit:active {
  background-color: #0aa38c;
}
</style>