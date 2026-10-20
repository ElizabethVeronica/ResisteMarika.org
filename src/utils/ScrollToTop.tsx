import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Gestiona el desplazamiento suave a la parte superior o hacia el ancla (#id)
 * correspondiente al cambiar de ruta o hash.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Leve retardo para permitir que el DOM se monte si viene de otra página
        setTimeout(() => {
          const navHeight = 90
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth',
          })
        }, 80)
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
