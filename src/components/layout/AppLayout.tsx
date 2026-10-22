import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/utils/ScrollToTop'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-surface-light flex flex-col font-sans">
      <ScrollToTop />
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <main className="page-transition flex-1 pt-24 sm:pt-[7.25rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
