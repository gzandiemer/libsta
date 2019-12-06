<template lang="pug">
    .alert.alert-danger {{ msg }}
</template>

<script>
export default {
  props: ["msg"]
}
</script>

<style scoped>
.alert {
  border-radius: 0px;
}

.alert-danger {
  background: #bf0b2c;
  color: #ccc;
}
