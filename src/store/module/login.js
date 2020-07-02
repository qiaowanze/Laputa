export default {
  namespaced: true,
  state: {
    token: '',
    namePassword: [],
    userId: ''
  },
  mutations: {
    setToken (state, data) {
      state.token = data.token
      state.userId = data.userId
    },
    setNamePassword (state, data) {
      return state.namePassword.push(data)
    }
  }
}
