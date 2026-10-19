import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hace scroll al top de la página en cada cambio de ruta.
 * Componente sin render — se coloca dentro de AppLayout.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}
