import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    book: {},
    members: [],
    member: {}
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
    AUTH_USER(state, data) {
      state.idToken = data.token
    },
    STORE_USER(state, user){
      state.user = user
    },
    CLEAR_AUTH_DATA(state){
      state.idToken = null
      state.userId = null
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
  },
  modules: {
  }
})
