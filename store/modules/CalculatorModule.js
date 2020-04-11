export default {
  state: () => ({
    rm1: 0
  }),
  getters: {
    rm1: (state) => {
      return state.rm1
    }
  },
  mutations: {
    UPDATE_VALUE(state, payload) {
      const { weight, reps } = payload.params
      state.rm1 = weight / (1.0278 - 0.0278 * reps)
    }
  },
  actions: {
    updateValue: ({ commit }, payload) => {
      commit('UPDATE_VALUE', payload)
    }
  }
}
