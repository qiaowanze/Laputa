export default {
  namespaced: true,
  state: {
    comment: [{
      slug: '',
      count: 0,
      items: [{
        id: '',
        user: {
          slug: '',
          name: '',
          avatar: {
            small: '',
            medium: '',
            large: ''
          }
        },
        content: '',
        like_count: 0,
        liked: false,
        created_at: ''
      }]
    }]
  },
  mutations: {
    setComment (state, data) {
      let flag = 0
      state.comment.forEach(val => {
        if (val.slug === data.slug) {
          val.items = [...val.items, ...data.items]
          val.count = val.items.length
          flag = 1
        }
      })
      if (flag == 0) {
        state.comment.push(data)
      }
    }
  }
}
