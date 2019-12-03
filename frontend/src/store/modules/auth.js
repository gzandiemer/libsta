import axios from 'axios'
import router from '../../router'
// import router from '../router/index.js'


const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: ''
}

const getters = {
  // isLoggedIn: function(state) {
  //   if(state.token !='' ){
  //     return true
  //   } else { 
  //     return false
  //   }
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user
}

const actions = {
  async login({
    commit
  }, user) {
    commit('AUTH_REQUEST')
    const res = await axios.post('http://localhost:3000/api/signin', user)
    if (res.data.success) {
      const token = res.data.token
      const user = res.data.user
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token
      commit('AUTH_SUCCESS', token, user)
    }
    return res
  },

  async register({
    commit
  }, userData) {
    commit('REGISTER_REQUEST')
    const res = await axios.post('http://localhost:3000/api/signup', userData)
    if (res.data.success !== undefined) {
      commit('REGISTER_SUCCESS')
      // const token = res.data.token
      // const user = res.data.user
      // localStorage.setItem('token', token)
      // axios.defaults.headers.common['Authorization'] = token
      // commit('AUTH_SUCCESS', token, user)
    }
    return res
  },
  //get the user profile
  async getProfile({
    commit
  }) {
    commit('PROFILE_REQUEST')
    const res = await axios.get('/http://localhost:3000/api/profile')
    commit('USER_PROFILE', res.data.user)
    return res
  },

  async logout({
    commit
  }) {
    await localStorage.removeItem('token')
    commit('logout')
    delete axios.defaults.headers.common['Authorization']
    router.push('login')
    return
  }
}

const mutations = {

  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, token, user) {
    state.token = token
    state.user = user
    state.status = 'success'
  },
  REGISTER_REQUEST(state) {
    state.status = 'loading'
  },
  REGISTER_SUCCESS(state) {
    state.status = 'success'
  },
  CLEAR_AUTH_DATA(state) {
    state.token = null
    state.user = null
  },
  LOGOUT(state) {
    state.status = ''
    state.token = ''
    state.user = ''
  },
  PROFILE_REQUEST(state) {
    state.status = "loading"
  },
  USER_PROFILE(state, user) {
    state.user = user
  }

}

export default {
  state,
  getters,
  actions,
  mutations,

}

