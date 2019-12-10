<template>
  <main>
    <section class="card">
      <member-card :member="member"></member-card>
    </section>
    <section class="container table-responsive">
      <h2>{{ member.username }}'s Lib</h2>
      <div>
        <b-table
          hover
          ref="selectableTable"
          selectable
          :items="library"
          :fields="fields"
          @row-selected="onRowSelected"
          @row-dblclicked="myRowDblClickHandler"
          responsive="sm"
        >
          <template v-slot:cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
        </b-table>
        <div>
          <b-button size="sm" @click="selectAllRows">Select all</b-button>
          <b-button size="sm" @click="clearSelected">Clear selected</b-button>
          <b-button size="sm" @click="removeSelected">Remove selected</b-button>
        </div>
        <b-nav-item class="add" :href="`/member/${member._id}/addbook`"
          >Add new book</b-nav-item
        >
      </div>
    </section>
  </main>
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
          delete: book.delete,
        }
      })
  }
  },
  methods: {
    ...mapActions(['fetchMember', 'fetchMembers', 'deleteBook']),
    onRowSelected(items) {
      this.selected = items
      return items.id
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
    },
    removeSelected(items) {
      this.$delete(items, this.selected)
      
    },
    myRowDblClickHandler() {
      const id = this._id
      this.$router.push({ path:'/book/'+ id })
    }
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
