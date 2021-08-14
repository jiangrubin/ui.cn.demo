import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import components from './components'
import { Button, Tabbar, TabbarItem, Tab, Tabs } from 'vant'

const _components = [
  components,
  Button,
  Tabbar,
  TabbarItem,
  Tab, Tabs,
] 

_components.forEach(item => {
  Vue.use(item)
})

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
