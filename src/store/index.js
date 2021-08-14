import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getThemeMode () {
  return localStorage.getItem('THEME_MODE')
}

export default new Vuex.Store({
  state: {
    themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },
  getters: {
    themeMode (state) {
      return getThemeMode() || state.themeMode
    }
  },
  mutations: {
    SET_THEME_MODE (state, status) {
      state.themeMode = status
    }
  },
  actions: {

  },
  modules: {
    
  }
})
