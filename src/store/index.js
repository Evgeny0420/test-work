import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [],
  },
  mutations: {
    updatesChannels(state, channels) {
      state.channels = channels
    }
  },
  actions: {
    async fetchChannels(context) {
      const res = await fetch('https://limehdads.online/playlist/')
      const channels = await res.json()

      context.commit('updatesChannels', channels)
    }
  },
  getters: {
    allChannels(state) {
      return state.channels
    }
  },
})
