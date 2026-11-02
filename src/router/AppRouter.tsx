import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

const Home = lazy(() => import('@/pages/Home'))
const QuienesSomos = lazy(() => import('@/pages/QuienesSomos'))
const Proyectos = lazy(() => import('@/pages/Proyectos'))
const Multimedia = lazy(() => import('@/pages/Multimedia'))
const Noticias = lazy(() => import('@/pages/Noticias'))
const Contacto = lazy(() => import('@/pages/Contacto'))
const Privacidad = lazy(() => import('@/pages/Privacidad'))

function renderPage(Page: LazyExoticComponent<ComponentType>) {
  return (
    <Suspense
      fallback={
        <div
          className="page-section flex items-center justify-center bg-surface-light p-8 text-sm font-semibold text-surface-muted"
          role="status"
        >
          Cargando página...
        </div>
      }
    >
      <Page />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: renderPage(Home) },
      { path: '/quienes-somos', element: renderPage(QuienesSomos) },
      { path: '/proyectos', element: renderPage(Proyectos) },
      { path: '/multimedia', element: renderPage(Multimedia) },
      { path: '/noticias', element: renderPage(Noticias) },
      { path: '/contacto', element: renderPage(Contacto) },
      { path: '/privacidad', element: renderPage(Privacidad) },

      // Redirecciones de compatibilidad
      { path: '/nosotros', element: <Navigate to="/quienes-somos" replace /> },
      { path: '/programas', element: <Navigate to="/proyectos" replace /> },
      { path: '/colabora', element: <Navigate to="/proyectos" replace /> },

      // Ruta no encontrada: regresa al inicio
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

export default function AppRouter() {
  return <RouterProvider router={router} />
}
