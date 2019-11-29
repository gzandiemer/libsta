<template lang="pug">
  main
    h2 {{ member.userName }}
    section
      member-card(:member="member")
    section
      member-library(:member="member")
</template>

<script>
// @ is an alias to /src
import MemberCard from '@/components/MemberCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MemberSingle',
  components: {
    MemberCard
  },
  computed: {
    ...mapState(['member'])
  },
  methods: {
    ...mapActions(['fetchMember'])
  },
  created() {
    this.fetchMember(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>