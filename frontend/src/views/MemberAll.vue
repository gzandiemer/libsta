<template lang="pug">
  main
    h1 MemberAll.vue
    h2 {{ member.userName }}
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
    ...mapState(['members', 'member'])
  },
  methods: {
    ...mapActions(['fetchMembers', 'fetchMember'])
  },
  created() {
    this.fetchMembers(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>