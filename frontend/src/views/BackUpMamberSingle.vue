<template lang="pug">
  main
    section.card
      member-card(:member='member')
    section.container.table-responsive
      h2 {{ member.username }}'s Lib
      b-table.m-10(striped='' hover='' bordered='' :items='library' :fields="fields")
        template(slot="actions" scope="row")
           b-btn(size="sm" @click.stop="details(row.item)") Details
      b-nav-item(class="add", :href='`/member/${member._id}/addbook`') Add Book
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
  data() {
    return {
      fields: [
        {
          key: 'title',
          sortable: true
        },
        {
          key: 'author',
          sortable: true
        },
        {
          key: 'pubDate',
          label: 'Publication Date',
          sortable: true
        },
        {
          key: 'booked',
          label: 'Availability',
          sortable: true
        },
        {
          key: 'X'
        }
      ]
    }
  },
  computed: {
    ...mapState(['member', 'book', 'members', 'books']),
    library() {
      return this.member.library.map(book => {
        return {
          title: book.title,
          author: book.authorName,
          language: book.language,
          pubDate: book.pubDate,
          booked: book.booked ? 'Booked' : 'Available',
          delete: book.delete
        }
      })
    }
  },
  methods: {
    ...mapActions(['fetchMember', 'fetchMembers'])
  },
  created() {
    this.fetchMember(this.$route.params.id)
  }
}
</script>

<style scoped>
main {
  display: inline-block;
}
.card {
  float: left;
  width: 40%;
}
.container {
  float: right;
  width: 60%;
}
.add {
  list-style-type: none;
}
</style>