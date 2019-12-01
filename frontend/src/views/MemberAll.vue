<template>
  <main>
    <section>
      <h2>All members</h2>
      <member-card v-for="member in members" :member="member" :key="member.id"></member-card>
    </section>
   </main>
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
    this.fetchMembers()
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