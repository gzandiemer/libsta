<template lang="pug">
    .alert.alert-danger {{ msg }}
</template>

<script>
export default {
    props: ['msg']
}
</script>

<style scoped>
.alert {
    border-radius: 0px;
}

.alert-danger {
    /* background: red;
    color: #fff; */
    background: #bf0B2c;
    color: #ccc; 
}