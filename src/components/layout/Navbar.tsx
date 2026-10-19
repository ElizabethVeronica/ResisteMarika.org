import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import { NAV_LINKS } from '@/config/navigation'
import { cn } from '@/utils/cn'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil con Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface-950/90 backdrop-blur-md border-b border-surface-800/60 shadow-xl shadow-surface-950/50'
            : 'bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between sm:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-xl tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-gradient">Resiste Marika</span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-primary-300 bg-primary-500/10'
                      : 'text-surface-200/80 hover:text-white hover:bg-surface-800/60',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-surface-200 hover:bg-surface-800 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </header>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-surface-950/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.nav
              key="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface-900 border-l border-surface-800 flex flex-col pt-20 pb-8 px-6 lg:hidden"
              aria-label="Menú de navegación móvil"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                        isActive
                          ? 'text-primary-300 bg-primary-500/15 font-semibold'
                          : 'text-surface-200 hover:text-white hover:bg-surface-800',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-surface-800">
                <p className="text-xs text-surface-400 text-center">
                  Resiste Marika · Asociación Civil
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
