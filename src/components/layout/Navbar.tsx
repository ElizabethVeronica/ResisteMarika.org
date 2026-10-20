import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/config/navigation'
import { cn } from '@/utils/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-3'
            : 'bg-white/80 backdrop-blur-sm py-5 sm:py-6 border-b border-surface-border/50'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo con bandera Trans + NB sutil */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            {/* Isotipo con barras de banderas Trans y No Binaria */}
            <div className="relative h-11 w-11 rounded-2xl overflow-hidden shadow-sm border border-brand-purpleSoft/30 flex flex-col justify-between p-1 bg-white group-hover:scale-105 transition-transform">
              {/* Barra superior Trans: celeste, blanco, rosa */}
              <div className="h-1.5 rounded-full flex gap-0.5 overflow-hidden">
                <span className="flex-1 bg-brand-sky" />
                <span className="flex-1 bg-brand-pink" />
                <span className="flex-1 bg-white border border-gray-100" />
                <span className="flex-1 bg-brand-pink" />
                <span className="flex-1 bg-brand-sky" />
              </div>
              
              <div className="text-center font-display font-extrabold text-sm text-brand-purple tracking-tight">
                RM
              </div>

              {/* Barra inferior NB: amarillo, blanco, morado, negro */}
              <div className="h-1.5 rounded-full flex gap-0.5 overflow-hidden">
                <span className="flex-1 bg-brand-yellowWarm" />
                <span className="flex-1 bg-white border border-gray-100" />
                <span className="flex-1 bg-brand-purple" />
                <span className="flex-1 bg-brand-dark" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-brand-dark leading-none">
                Resiste <span className="text-brand-purple">Marika</span> <span className="text-brand-pink font-bold">Cusco</span>
              </span>
              <span className="text-[10px] font-bold text-surface-muted tracking-wider uppercase mt-0.5 flex items-center gap-1">
                <Heart size={10} className="text-brand-pink fill-brand-pink" />
                Red de Apoyo Mutuo & Autogestión
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-200',
                    isActive
                      ? 'text-brand-purple bg-brand-purpleLight font-extrabold shadow-sm'
                      : 'text-brand-dark/75 hover:text-brand-purple hover:bg-brand-purpleLight/40'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Redes Sociales + Botón Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-brand-dark/60 pr-3 border-r border-gray-200">
              <a
                href="https://www.instagram.com/resiste.marika.cusco"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-brand-pink transition-colors p-1.5 rounded-xl hover:bg-brand-pinkLight"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://www.tiktok.com/@resistemarik"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-brand-dark transition-colors p-1.5 rounded-xl hover:bg-gray-100"
              >
                <FaTiktok size={15} />
              </a>
            </div>

            <Button href="/contacto" variant="primary" size="sm">
              Escríbenos
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="lg:hidden p-2 rounded-2xl text-brand-dark hover:bg-brand-purpleLight/50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-brand-dark/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col pt-20 pb-8 px-6 shadow-2xl lg:hidden border-l border-surface-border"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-3 rounded-2xl text-base font-bold transition-colors',
                        isActive
                          ? 'text-brand-purple bg-brand-purpleLight'
                          : 'text-brand-dark hover:text-brand-purple hover:bg-brand-purpleLight/40'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-surface-border flex flex-col gap-4">
                <Button href="/contacto" variant="primary" size="md" className="w-full">
                  Escríbenos
                </Button>

                <div className="flex justify-center gap-4 text-brand-dark/70 pt-1">
                  <a href="https://www.instagram.com/resiste.marika.cusco" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 hover:text-brand-pink">
                    <FaInstagram size={18} />
                  </a>
                  <a href="https://www.tiktok.com/@resistemarik" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-2 hover:text-brand-dark">
                    <FaTiktok size={18} />
                  </a>
                </div>
                <p className="text-[11px] text-surface-muted text-center font-medium">
                  Cusco · Desde el 7 de agosto del 2023
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
