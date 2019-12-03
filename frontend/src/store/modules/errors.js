// import { cmsService } from '../../services'
// import defaultErrors from '../../data/json/errors/errors'

// const defaultState = {
//     data: defaultErrors
// }

// const getters = {
//     error: state => payload => {
//         // required
//         if (payload.errorKey === undefined || payload.errorKey === '')
//             return Error('ErrorKey missing')
//         // required, can be empty for global errors
//         if (payload.route === undefined) return Error('Route missing')
//         return cmsService.filterCMSContent(
//             state.data.data,
//             `${payload.errorKey}_${payload.route}`
//         )
//     }
// }

// const actions = {
//     async loadErrors({ commit }) {
//         // try to load errors from CMS-Middleware
//         const cmsErrors = await cmsService.fetchContent('errors')
//         commit('setErrors', { errors: cmsErrors })
//     }
// }

// const mutations = {
//     setErrors(state, { cmsErrors }) {
//         state.data = cmsErrors
//     }
// }

// export default {
//     state: defaultState,
//     getters,
//     actions,
//     mutations
// }