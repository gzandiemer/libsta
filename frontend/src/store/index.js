import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    members: [],
    member: {},
    notes: [],
    timestamps: []
    // likes: [],
    // following: [],
    // followers: []
  },
  mutations: {
    SET_BOOKS(state, data) {
      state.books = data
    },
    SET_BOOK(state, data) {
      state.book = data
    },
    SET_MEMBERS(state, data) {
      state.members = data
    },
    SET_MEMBER(state, data) {
      state.member = data
    },
    ADD_BOOK(state) {
      state.member.library.push(state.book)
      state.book.owner = state.member._id
      state.member.save()
      state.book.save()
      console.log('ADD_BOOK')
    },
    ADD_NOTE(state, payload) {
      let newNote = payload;
      state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload) {
      let newTimeStamp = payload;
      state.timestamps.push(newTimeStamp);
    }
    // REWRITE BELOW FUNCTIONS
    // DELETE_BOOK(state) {
    //   state.book = null
    //   state.member.save()
    //   state.book.save()
    //   console.log('DELETE_BOOK')
    // },
    // FOLLOW_MEMBER(state, object) {
    //   state.member.following.push(object)
    //   object.followers.push(state.member)
    //   state.member.save()
    // },
    // LIKE_BOOK(state) {
    //   state.member.likes.push(state.book)
    //   state.book.likers.push(state.member)
    //   state.book.likers++
    //   state.member.save()
    //   state.book.save()
    // }
  },
  actions: {
    async fetchBooks({ commit }) {
      const result = await axios.get('http://localhost:3000/book/all/json')
      commit('SET_BOOKS', result.data)
    },
    async fetchBook({ commit }, id) {
      const result = await axios.get(`http://localhost:3000/book/${id}/json`)
      commit('SET_BOOK', result.data)
    },
    async fetchMembers({ commit }) {
      const result = await axios.get('http://localhost:3000/member/all/json')
      commit('SET_MEMBERS', result.data)
    },
    async fetchMember({ commit }, id) {
      const result = await axios.get(`http://localhost:3000/member/${id}/json`)
      commit('SET_MEMBER', result.data)
    },
    async addBook({ commit }, data) {
      const { data: book } = await axios.post(
        `http://localhost:3000/book`,
        data.form
      )
      const result = await axios.post(
        `http://localhost:3000/member/${data.id}/library`,
        { book: book._id }
      )
      commit('ADD_BOOK', result.data)
    },
    addNote(context, payload) {
      context.commit('ADD_NOTE', payload);
    },
    addTimestamp(context, payload) {
      context.commit('ADD_TIMESTAMP', payload);
    }
    // REWRITE BELOW FUNCTIONS
    // async deleteBook({ commit }, data) {
    //   console.log('button works', data)
    //   const result = await axios.delete(`http://localhost:3000/book/${data.id}`)
    //   commit('DELETE_BOOK', result)
    // },
    // likeBook({ commit }, data) {
    //   commit('LIKE_BOOK', data)
    // },
    // followMember({ commit }, data) {
    //   commit('ADD_FOLLOWERS', data)
    // }
  },

  getters: {
    getNotes: state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.notes.length

  }
})
