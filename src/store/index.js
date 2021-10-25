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
            const response = await fetch('https://limehdads.online/playlist/')
            const channels = await response.json()

            context.commit('updatesChannels', channels)
        }
    },
    getters: {
        allChannels(state) {
            return state.channels.channels
        }
    },
})
