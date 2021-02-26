import debounce from 'lodash/debounce'
import { BREAKPOINTS } from './src/consts/breakpoints'

let windowWidth = 0

const setWindowWidth = () => (windowWidth = window.innerWidth)
const onWindowResize = debounce(setWindowWidth, 300)

export const onClientEntry = async () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
  setWindowWidth()
  window.addEventListener('resize', onWindowResize)
}

export const onRouteUpdate = ({ location }) => {
  const { hash } = location
  if (hash) {
    const id = hash.substring(1, hash.length)
    const element = document.getElementById(id)
    if (element) {
      const topOffset = windowWidth >= BREAKPOINTS.SM ? 80 : 20
      const Y = element.getBoundingClientRect().top + window.scrollY - topOffset
      window.scroll(0, Y)
    }
  }
}
