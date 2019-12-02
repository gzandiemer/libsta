import axios from 'axios'
import router from '../router/index.js'


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
    commit('auth_request')
    const res = await axios.post('http://localhost:3000/api/users/signin', user)
    if (res.data.success) {
      const token = res.data.token
      const user = res.data.user
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token
      commit('auth_success', token, user)
    }
    return res
  }
}

const mutations = {
  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, token, user) {
    state.token = token,
      state.user = user
  }

}

export default {
  state,
  getters,
  actions,
  mutations,

}

