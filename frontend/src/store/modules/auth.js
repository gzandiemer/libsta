import axios from 'axios'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const REGISTER_SUCCESS= 'REGISTER_SUCCESS'
const LOGOUT = 'LOGOUT'

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null
}

const mutations = {

//   AUTH_REQUEST(state) {
//     state.error = null
//     state.status = 'loading'
//   },
[AUTH_SUCCESS](state, token, user) {
     state.token = token
     state.user = user
     state.status = 'success',
    state.error = null
   },
//   AUTH_ERROR(state, err) {
//     state.error = err.response.data.msg
//   },
//   REGISTER_REQUEST(state) {
//     state.error = null
//     state.status = 'loading'
//   },
   [REGISTER_SUCCESS](state) {
   state.error = null
   state.status = 'success'
},
//   REGISTER_ERROR(state, err) {
//     state.error = err.response.data.msg
//   },
 [LOGOUT](state) {
  state.error = null
  state.status = ''
  state.token = ''
  state.user = ''
}

}

const actions = {

  async register({ commit }, userData) {
    const result =  axios.post('/auth/register', userData)
    commit('REGISTER_SUCCESS', result.data)
  },
  async login({ commit }, userData) {
    const result =  axios.post('/auth/local', userData)
    commit('AUTH_SUCCESS', result.data)
  },

  async logout({commit}) {
    await localStorage.removeItem('token')
    commit('LOGOUT')
    delete axios.defaults.headers.common['Authorization']
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user,
  error: state => state.error
}

export default {
  state,
  getters,
  actions,
  mutations,

}

