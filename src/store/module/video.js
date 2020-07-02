export default {
  namespaced: true,
  state: {
    videoId: ''
  },
  mutations: {
    setVideoId (state, data) {
      state.videoId = data
    }
  }
}
