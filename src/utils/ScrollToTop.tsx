import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Gestiona el desplazamiento suave a la parte superior o hacia el ancla (#id)
 * correspondiente al cambiar de ruta o hash.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const shouldScrollInstantly =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    const behavior: ScrollBehavior = shouldScrollInstantly ? 'instant' : 'smooth'

    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        const timeoutId = window.setTimeout(() => {
          const navHeight = 90
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior,
          })
        }, 80)
        return () => window.clearTimeout(timeoutId)
      }
    }

    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])

  return null
}
