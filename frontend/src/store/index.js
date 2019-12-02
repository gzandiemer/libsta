import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from '../axios-auth/index.js'
// import { seedData } from '@/seed/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    members: [],
    member: {},
    counter: 0,
    seedData: []
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
    LIKE_BOOK(state, data) {
      console.log(state + data + 'increment likers')
    },
    AUTH_USER(state, data) {
      state.idToken = data.token
    },
    STORE_USER(state, user) {
      state.user = user
    },
    CLEAR_AUTH_DATA(state) {
      state.idToken = null
      state.userId = null
    },
    ADD_BOOK(state) {
      state.member.library.push(state.book)
      state.book.owner = state.member._id
      state.member.save()
      state.book.save()
      console.log('ADD_BOOK')
    },
    DELETE_BOOK(state) {
      state.member.library[state.book] = null
      state.book.owner = null
      state.member.save()
      state.book.save()
      console.log('ADD_BOOK')
    },
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    }


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
    async signUp({ commit }) {
      const result = await axios.get(`http://localhost:3000/signup`)
      commit('STORE_USER', result.data)
    },
    async signIn({ commit }) {
      const result = await axios.get(`http://localhost:3000/signin`)
      commit('AUTH_USER', result.data)
    },
    async addBook({ commit }, data) {
      console.log('button works', data)
      const { data: book } = await axios.post(`http://localhost:3000/book`, data.form)
      console.log(book)
      const result = await axios.post(`http://localhost:3000/member/${data.id}/library`, { book: book._id })
      commit('ADD_BOOK', result.data)
    },
    async deleteBook({ commit }, data) {
      console.log('button works', data)
      const result = await axios.delete(`http://localhost:3000/book/${data.id}`)
      commit('DELETE_BOOK', result)
    },
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    upvote(commentId) {
      const comment = this.state.seedData.find(
        comment => comment.id === commentId
      );
      comment.votes++;
    }
  },
  modules: {
  }
})
