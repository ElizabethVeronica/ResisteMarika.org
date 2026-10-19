import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import Home from '@/pages/Home'
import QuienesSomos from '@/pages/QuienesSomos'
import Proyectos from '@/pages/Proyectos'
import Noticias from '@/pages/Noticias'
import Contacto from '@/pages/Contacto'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Redirecciones de compatibilidad */}
          <Route path="/nosotros" element={<Navigate to="/quienes-somos" replace />} />
          <Route path="/programas" element={<Navigate to="/proyectos" replace />} />
          <Route path="/colabora" element={<Navigate to="/proyectos" replace />} />

          {/* Ruta no encontrada: regresa al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
