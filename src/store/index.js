import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      { id: 1, img: 'walltweet_2.jpeg', title: 'Map Tweet', description: 'Map Tweet is app for see peoples tweet on map. Map Tweet is app for see peoples tweet on map.' },
      { id: 2, img: 'mock.png', title: 'Love neighborhood', description: 'Map Tweet is app for see peoples tweet on map.' },
      { id: 3, img: 'mock.png', title: 'YTSM', description: 'Map Tweet is app for see peoples tweet on map.' },
      { id: 4, img: 'logo.png', title: 'Image To PDF Converter', description: 'Map Tweet is app for see peoples tweet on map.' },
      { id: 5, img: 'mock.png', title: 'PillRem', description: 'Map Tweet is app for see peoples tweet on map.' },
      { id: 6, img: 'logo.png', title: 'Alaget', description: 'Map Tweet is app for see peoples tweet on map.' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProjetById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    }
  }
})
