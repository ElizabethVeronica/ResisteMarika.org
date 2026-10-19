import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import Home      from '@/pages/Home'
import Nosotros  from '@/pages/Nosotros'
import Programas from '@/pages/Programas'
import Noticias  from '@/pages/Noticias'
import Colabora  from '@/pages/Colabora'
import Contacto  from '@/pages/Contacto'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/"          element={<Home />} />
          <Route path="/nosotros"  element={<Nosotros />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/noticias"  element={<Noticias />} />
          <Route path="/colabora"  element={<Colabora />} />
          <Route path="/contacto"  element={<Contacto />} />

          {/* Ruta catch-all: redirige al inicio para evitar pantallas vacías */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
