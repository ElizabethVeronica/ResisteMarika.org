import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/utils/ScrollToTop'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-surface-light flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-18 sm:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
