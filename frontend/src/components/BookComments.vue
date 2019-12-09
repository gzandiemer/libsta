<template>
  <input
      placeholder='Enter a comment'
      v-model="input"
      @keyup.enter="monitorEnterKey"
      class="input is-small" type="text" />
</template>

<script>
export default {
    data () {
    return {
      input: '',
    }
  },
  methods: {
    monitorEnterKey () {
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch('addTimestamp', new Date().toLocaleString());
      this.input = '';
    }
  }
}
</script>