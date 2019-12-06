<template lang="pug">
  main
    section.card
      member-card(:member='member')
    section.container.table-responsive
      h2 {{ member.username }}'s Lib
      // tbody
      //   tr(striped='' hover='' bordered='' v-for="item in items" :items='library')
      //     td(v-text="book.title")
      //     td(v-text="item.author")
      //     td(v-text="item.language")
      //     td(v-text="item.pubDate")
      //     td(v-text="item.booked")
      //     td(v-button @click="deleteRow(item.id)" v-text="X")
      
      b-table.m-10(striped='' hover='' bordered='' :items='library' :fields="fields" :key='book.id')
        template
          b-btn(@row-clicked="(item, index,event) => rowDblClickHandeler(book.id, item, index, event)") X
        
          
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
  data(){
    return {
      fields: [
        {
          key: 'title',
          sortable: true
        },
        {
          key: 'author',
        },
        {
          key: 'pubDate',
          label: 'Publication Date',
          sortable: true
        },
        {
          key: 'booked',
        },
        {
          key: '',
        },
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
    ...mapActions(['fetchMember', 'fetchMembers']),
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
  float:right;
  width: 100vw;
}
.add {
    list-style-type: none
}

</style>