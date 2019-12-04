<template lang="pug">
  #book-form
    .book-form
      form
        .input
          label(for='title') Title
          input#title(type='string' v-model='form.title')
        .input
          label(for='authorName') Author
          input#authorName(type='string' v-model='form.authorName')
        .input
          label(for='language') Language
          input#language(type='string' v-model='form.language')
        .input
          label(for='pubDate') Publication Date
          input#pubDate(type='string' v-model='form.pubDate')
        .btns
          button.submit(type='submit' @submit.prevent='onSubmit') Add
          button.reset(type='reset' @click='onReset') Reset
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
        pubDate: ""
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
      this.addBook({ form: this.form, id: this.id })
        .then(res => {
          if (res.data.success) {
            alert("This book is successfully added to your library.").then(
              () => {
                this.$router.push({ path: `/member/${this.member_id}` });
              }
            );
          }
        })
        .catch(err => {
          console.log(err);
        });
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