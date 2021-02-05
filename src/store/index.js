import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      { id: 1, img: 'mock.png', title: 'Map Tweet', description: 'Map Tweet is app for see peoples tweet on map.' },
      { id: 2, img: 'mock.png', title: 'Love neighborhood', description: 'Tesfr' },
      { id: 3, img: 'mock.png', title: 'YTSM', description: 'Tesfr' },
      { id: 4, img: 'logo.png', title: 'Image To PDF Converter', description: 'Tesfr' },
      { id: 5, img: 'mock.png', title: 'PillRem', description: 'Tesfr' },
      { id: 6, img: 'logo.png', title: 'Alaget', description: 'Tesfr' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
