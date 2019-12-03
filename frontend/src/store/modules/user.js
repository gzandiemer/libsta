// import { userService } from '../../services'

// const defaultState = {
//     jwtToken: null,
//     user: null,
//     isAuthenticated: false
// }

// const getters = {}

// const actions = {
//     async registerUser({ commit }, user) {
//         await userService.register(user)
//         commit('userRegister', user)
//     },
//     async loginUser({ commit }, user) {
//         await userService.login(user)
//         commit('userLogin', user)
//     },
//     async logoutUser({ commit }) {
//         await userService.logout()
//         commit('userLogout')
//     }
// }

// const mutations = {
//     userLogin(state, user) {
//         state.isAuthenticated = true
//         state.jwtToken = user.jwtToken
//         state.user = user
//     },
//     userLogout(state) {
//         state.isAuthenticated = false
//         state.user = null
//         state.jwtToken = null
//     }
// }

// export default {
//     state: defaultState,
//     getters,
//     actions,
//     mutations
// }