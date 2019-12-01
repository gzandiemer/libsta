<template lang="pug">
  main
    h2 All Members
    section
      member-card(v-for="member in members", :member="member", :key="member.id")
</template>

<script>
import MemberCard from '@/components/MemberCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MemberAll',
  components: {
    MemberCard
  },
  computed: {
    ...mapState(['members'])
  },
  methods: {
    ...mapActions(['fetchMembers'])
  },
  created() {
     this.fetchMembers();
  }
}
</script>

<style scoped>
section {
  padding: 40px 0;
}
h2 {
  margin-top: 20px;
}
</style>