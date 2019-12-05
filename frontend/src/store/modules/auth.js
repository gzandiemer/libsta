import axios from 'axios'
import router from '../../router'
// import router from '../router/index.js'


const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null
}

const mutations = {

  AUTH_REQUEST(state) {
    state.error = null
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, token, user) {
    state.token = token
    state.user = user
    state.status = 'success',
    state.error = null
  },
  AUTH_ERROR(state, err) {
    state.error = err.response.data.msg
  },
  REGISTER_REQUEST(state) {
    state.error = null
    state.status = 'loading'
  },
  REGISTER_SUCCESS(state) {
    state.error = null
    state.status = 'success'
  },
  REGISTER_ERROR(state, err) {
    state.error = err.response.data.msg
  },
  LOGOUT(state) {
    state.error = null
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

const actions = {
  async login({
    commit
  }, user) {
    commit('AUTH_REQUEST')
    try {
      const res = await axios.post('/api/signin', user)
      if (res.data.success) {
        const token = res.data.token
        const user = res.data.user
        //store the token into the localstorage
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('AUTH_SUCCESS', token, user)
      }
      return res
    } catch (err) {
      commit('AUTH_ERROR', err)
    }
  },

  async register({
    commit
  }, userData) {
    commit('REGISTER_REQUEST')
    try {
      const res = await axios.post('/api/signup', userData)
      if (res.data.success !== undefined) {
        commit('REGISTER_SUCCESS')
      }
      return res

    } catch (err) {
      commit('REGISTER_ERROR', err)
    }
  },

  //get the user profile
  async getProfile({
    commit
  }) {
    commit('PROFILE_REQUEST')
    const res = await axios.get('/api/profile')
    commit('USER_PROFILE', res.data.user)
    return res
  },

  async logout({
    commit
  }) {
    await localStorage.removeItem('token')
    commit('logout')
    delete axios.defaults.headers.common['Authorization']
    router.push('home')
    return
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

