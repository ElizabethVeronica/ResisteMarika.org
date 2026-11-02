import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/utils/ScrollToTop'

export default function AppLayout() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${header.getBoundingClientRect().height}px`
      )
    }

    const observer = new ResizeObserver(updateHeaderHeight)
    observer.observe(header)
    updateHeaderHeight()

    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--site-header-height')
    }
  }, [])

  return (
    <div className="min-h-screen bg-surface-light flex flex-col font-sans">
      <ScrollToTop />
      <div ref={headerRef} className="site-header fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <main className="site-main page-transition flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
