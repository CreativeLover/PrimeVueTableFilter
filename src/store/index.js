import { createStore } from 'vuex'

export default createStore({
  state: {
    coach: {},
    coaches: [],
    coachesThree: [],
  },
  mutations: {
    setThreeCoaches(state, coachesThree) {
      state.coachesThree = coachesThree
    },
    setCoaches(state, coaches) {
      state.coaches = coaches
    },
    // setAllPlayers(state, )
  },
  getters: {
    getThreeCoaches(state) {
      return state.coachesThree
    },
    getCoaches(state) {
      return state.coaches
    },
  },
  actions: {
    addCoach({ commit }, payload) {
      commit('setCoaches', payload)
    },
    // getActionCoaches({ commit }) {
    //   commit('getCoaches')
    // },
  },
  modules: {},
})
