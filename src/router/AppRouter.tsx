import { createBrowserRouter, Navigate, RouterProvider, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import QuienesSomos from '@/pages/QuienesSomos'
import Proyectos from '@/pages/Proyectos'
import Multimedia from '@/pages/Multimedia'
import Noticias from '@/pages/Noticias'
import Contacto from '@/pages/Contacto'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Scroll suave al inicio cuando cambia la ruta
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/quienes-somos', element: <QuienesSomos /> },
      { path: '/proyectos', element: <Proyectos /> },
      { path: '/multimedia', element: <Multimedia /> },
      { path: '/noticias', element: <Noticias /> },
      { path: '/contacto', element: <Contacto /> },

      // Redirecciones de compatibilidad
      { path: '/nosotros', element: <Navigate to="/quienes-somos" replace /> },
      { path: '/programas', element: <Navigate to="/proyectos" replace /> },
      { path: '/colabora', element: <Navigate to="/proyectos" replace /> },

      // Ruta no encontrada: regresa al inicio
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
