<template>
  <div>
    <!-- <b-form-group label="Selection mode:" label-cols-md="4">
    //   <b-form-select
    //     v-model="selectMode"
    //     :options="modes"
    //     class="mb-3"
    //   ></b-form-select>
    // </b-form-group>-->

    <b-table
      bordered 
      striped 
      hover
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
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
    <p>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="removeSelected">Remove selected</b-button>
      <b-nav-item class="add" :href="`/member/${member._id}/addbook`"
        >Add new book</b-nav-item
      >
      <b-nav-item class="add">Go to book</b-nav-item>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MemberLibrary',
  props: ['library', 'books'],
  data() {
    return {
      items:library,
      modes: ['multi', 'single', 'range'],
      fields: [
        {
          key: 'selected'
        },
        {
          key: 'title',
          sortable: true,
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
      ],
      selectMode: 'multi',
      selected: []
    }
  },
  computed: {
     ...mapState(['member'])
  //   // library() {
  //   //   return this.member.library.map(book => {
  //   //     return {
  //   //       title: book.title,
  //   //       author: book.authorName,
  //   //       language: book.language,
  //   //       pubDate: book.pubDate,
  //   //       booked: book.booked ? 'Booked' : 'Available',
  //   //     }
  //   //   })
     },
  
  methods: {
    ...mapActions(['deleteBook']),
    onRowSelected(items) {
      this.selected = items
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
    },
    removeSelected() {
      console.log('removeSelected btn')
    }
    // bookUrl() {
    //     return `/book/${this.book._id}`
    //   },

  }
  // created() {
  //   this.fetchMember(this.$route.params.id)
  // }


}
</script>

<style scoped>
.add {
  list-style-type: none;
}
</style>
