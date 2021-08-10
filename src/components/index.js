import FoundCard from './FoundCard'

const components = [
  FoundCard,
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  FoundCard
}

export default {
  install
}