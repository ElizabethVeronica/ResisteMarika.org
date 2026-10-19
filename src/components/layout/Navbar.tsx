import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-white py-4 sm:py-5 border-b border-gray-100/60'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta flex items-center justify-center text-white font-impact text-xl shadow-md shadow-brand-purple/20 transition-transform group-hover:scale-105">
              RM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-brand-dark leading-none">
                Resiste <span className="text-brand-magenta">Marika</span>
              </span>
              <span className="text-[10px] font-semibold text-brand-purple tracking-widest uppercase mt-0.5">
                Asociación Civil
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
                    'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                    isActive
                      ? 'text-brand-magenta bg-brand-magenta/10 font-bold'
                      : 'text-brand-dark/80 hover:text-brand-purple hover:bg-brand-purple/5'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Redes Sociales + Botón Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-brand-dark/70 pr-3 border-r border-gray-200">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-brand-magenta transition-colors p-1"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-brand-purple transition-colors p-1"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-emerald-500 transition-colors p-1"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            <Button href="/contacto" variant="secondary" size="sm">
              Escríbenos
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="lg:hidden p-2 rounded-xl text-brand-dark hover:bg-gray-100 transition-colors"
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
              className="fixed inset-0 z-40 bg-brand-dark/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col pt-20 pb-8 px-6 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                        isActive
                          ? 'text-brand-magenta bg-brand-magenta/10'
                          : 'text-brand-dark hover:text-brand-purple hover:bg-gray-50'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
                <Button href="/contacto" variant="secondary" size="md" className="w-full">
                  Escríbenos
                </Button>

                <div className="flex justify-center gap-4 text-brand-dark/70 pt-2">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-magenta p-2">
                    <FaInstagram size={18} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-purple p-2">
                    <FaFacebook size={18} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-brand-dark p-2">
                    <FaTwitter size={18} />
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-emerald-500 p-2">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
