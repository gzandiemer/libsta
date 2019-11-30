<template>
  <div>
    <b-form @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="title" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" required placeholder="Enter book title"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="authorName" label-for="input-2">
        <b-form-input id="input-2" v-model="form.authorName" required placeholder="Author"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="laguage" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.language"
          required
          min="5"
          placeholder="In which language"
        ></b-form-input>
      </b-form-group>

      <b-button @click="onSubmit" variant="primary">Add</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AddBookForm",
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
        language: ""
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
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.title = "";
      this.authorName = "";
      this.language = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>