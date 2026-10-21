import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/config/navigation'
import { cn } from '@/utils/cn'

function isSectionMenuStuck(pathname: string) {
  if (pathname !== '/quienes-somos') return false

  const sectionMenu = document.getElementById('quienes-somos-section-nav')
  if (!sectionMenu) return false

  const stickyTop = Number.parseFloat(window.getComputedStyle(sectionMenu).top)
  return sectionMenu.getBoundingClientRect().top <= stickyTop
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isSectionMenuStuck(location.pathname)) setDesktopDropdownOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [location.pathname])

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setDesktopDropdownOpen(false)
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={cn(
          'transition-all duration-200',
          location.pathname === '/quienes-somos' ? 'sticky top-0 z-50' : 'relative',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 pt-3'
            : 'bg-white/90 backdrop-blur-sm pt-4 sm:pt-5 border-b border-gray-100'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo institucional de Resiste Marika */}
          <Link
            to="/"
            className="flex items-center gap-2 group lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            {/* Logo oficial de Resiste Marika */}
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt="Logo de Resiste Marika"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-brand-dark leading-none">
                Resiste <span className="text-brand-purple">Marika</span>
              </span>
              <span className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase mt-1">
                Autogestión y Arte
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="hidden lg:block shrink-0 group"
            onClick={() => setMobileOpen(false)}
            aria-label="Resiste Marika - Inicio"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-5">
            <Link to="/" className="flex flex-col shrink-0">
              <span className="font-display font-extrabold text-lg tracking-tight text-brand-dark leading-none">
                Resiste <span className="text-brand-purple">Marika</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase mt-1">
                Autogestión y Arte
              </span>
            </Link>

          {/* Navegación Desktop */}
          <nav className="flex items-center gap-0 xl:gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              if (link.children && link.children.length > 0) {
                const isChildActive =
                  location.pathname === link.href ||
                  link.children.some((c) => location.pathname + location.hash === c.href)

                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                      if (!isSectionMenuStuck(location.pathname)) setDesktopDropdownOpen(true)
                    }}
                    onMouseLeave={() => setDesktopDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <NavLink
                        to={link.href}
                        className={cn(
                          'pl-4 pr-1.5 py-2 rounded-l-xl text-sm font-bold transition-colors flex items-center',
                          isChildActive
                            ? 'text-brand-purple bg-brand-purpleLight/60'
                            : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50'
                        )}
                      >
                        {link.label}
                      </NavLink>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          if (isSectionMenuStuck(location.pathname)) return
                          setDesktopDropdownOpen((v) => !v)
                        }}
                        aria-expanded={desktopDropdownOpen && !isSectionMenuStuck(location.pathname)}
                        aria-label="Desplegar menú de Quiénes Somos"
                        className={cn(
                          'pr-3 pl-1 py-2 rounded-r-xl text-sm font-bold transition-colors text-gray-700 hover:text-brand-purple',
                          isChildActive && 'bg-brand-purpleLight/60 text-brand-purple'
                        )}
                      >
                        <ChevronDown
                          size={15}
                          className={cn(
                            'transition-transform duration-200',
                            desktopDropdownOpen && 'rotate-180 text-brand-purple'
                          )}
                        />
                      </button>
                    </div>

                    {/* Dropdown flotante */}
                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-white shadow-xl border border-gray-200/90 py-2 z-50 overflow-hidden"
                        >
                          <div className="px-4 py-2 border-b border-gray-100 bg-gray-50/70">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-display">
                              Conoce la organización
                            </p>
                          </div>
                          <div className="p-1.5 flex flex-col gap-0.5">
                            {link.children.map((sublink) => (
                              <Link
                                key={sublink.href}
                                to={sublink.href}
                                onClick={() => setDesktopDropdownOpen(false)}
                                className="group/item flex flex-col px-3 py-2.5 rounded-xl hover:bg-brand-purpleLight/40 transition-colors"
                              >
                                <span className="text-sm font-bold text-gray-900 group-hover/item:text-brand-purple transition-colors">
                                  {sublink.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2',
                      link.href === '/quienes-somos'
                        ? 'text-brand-purple bg-brand-purpleLight/70 border border-brand-purple/20 shadow-sm hover:-translate-y-0.5 hover:bg-brand-purpleLight hover:shadow-md'
                        : isActive
                          ? 'text-brand-purple bg-brand-purpleLight/60'
                          : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          {/* Redes Sociales Oficiales + Botón Contacto */}
          <div className="flex items-center gap-2 xl:gap-3">
            <div className="flex items-center gap-2 pr-3 border-r border-gray-200 text-gray-600">
              <a
                href="https://www.instagram.com/resiste.marika.cusco"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Resiste Marika Cusco"
                className="hover:text-brand-pink transition-colors p-2 rounded-xl hover:bg-gray-50"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://www.tiktok.com/@resistemarik"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok de Resiste Marika"
                className="hover:text-gray-900 transition-colors p-2 rounded-xl hover:bg-gray-50"
              >
                <FaTiktok size={15} />
              </a>
            </div>

            <Button href="/contacto" variant="primary" size="sm">
              Escríbenos
            </Button>
          </div>
          </div>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* Menú Lateral Móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-gray-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white flex flex-col pt-16 pb-8 px-5 shadow-2xl lg:hidden border-l border-gray-200 overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <span className="font-display font-extrabold text-base text-gray-900">
                  Menú de Navegación
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  if (link.children && link.children.length > 0) {
                    return (
                      <div key={link.label} className="flex flex-col rounded-xl bg-gray-50/70 p-1">
                        <div className="flex items-center justify-between">
                          <NavLink
                            to={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 px-3 py-2 text-sm font-bold text-gray-900 hover:text-brand-purple"
                          >
                            {link.label}
                          </NavLink>
                          <button
                            type="button"
                            onClick={() => setMobileSubmenuOpen((v) => !v)}
                            className="p-2 text-gray-500 hover:text-brand-purple"
                            aria-label="Expandir submenú"
                          >
                            <ChevronDown
                              size={16}
                              className={cn(
                                'transition-transform duration-200',
                                mobileSubmenuOpen && 'rotate-180 text-brand-purple'
                              )}
                            />
                          </button>
                        </div>

                        {mobileSubmenuOpen && (
                          <div className="flex flex-col gap-1 pl-3 pr-1 py-1 border-t border-gray-200/60 mt-1">
                            {link.children.map((sublink) => (
                              <Link
                                key={sublink.href}
                                to={sublink.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2 rounded-lg text-xs font-semibold text-gray-600 hover:text-brand-purple hover:bg-white transition-colors"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'px-4 py-2.5 rounded-xl text-sm font-bold transition-colors',
                          isActive
                            ? 'text-brand-purple bg-brand-purpleLight/60'
                            : 'text-gray-800 hover:text-brand-purple hover:bg-gray-50'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-3">
                <Button href="/contacto" variant="primary" size="md" className="w-full">
                  Escríbenos
                </Button>

                <div className="flex justify-center gap-4 text-gray-600 pt-2">
                  <a
                    href="https://www.instagram.com/resiste.marika.cusco"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 hover:text-brand-pink"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@resistemarik"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="p-2 hover:text-gray-900"
                  >
                    <FaTiktok size={18} />
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 text-center font-medium">
                  Cusco · Fundada el 7 de agosto del 2023
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
