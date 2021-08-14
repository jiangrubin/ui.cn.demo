import FoundCard from './FoundCard'
import Icon from './Icon'

const components = [
  FoundCard,
  Icon
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  FoundCard,
  Icon
}

export default {
  install
}