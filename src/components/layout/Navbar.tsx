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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToTopIfCurrentPage = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    setMobileOpen(false)
    scrollToTopIfCurrentPage('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setDesktopDropdownOpen(null)
    setMobileSubmenuOpen(null)
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedInsideDropdown = dropdownRefs.current.some((dropdown) =>
        dropdown?.contains(e.target as Node)
      )
      if (!clickedInsideDropdown) {
        setDesktopDropdownOpen(null)
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
            viewTransition
            className="flex items-center gap-2 group lg:hidden"
            onClick={handleLogoClick}
          >
            {/* Logo oficial de Resiste Marika */}
            <div className="relative h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 shrink-0 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/images/logo png.png"
                alt="Logo de Resiste Marika"
                className="site-logo--light w-full h-full object-contain object-bottom"
              />
              <img
                src="/images/logo inverso.png"
                alt=""
                aria-hidden="true"
                className="site-logo--dark w-full h-full object-contain object-bottom"
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

          <div className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-5">
            <Link
              to="/"
              viewTransition
              onClick={handleLogoClick}
              className="flex items-center gap-2 shrink-0 group"
              aria-label="Resiste Marika - Inicio"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="/images/logo png.png"
                  alt=""
                  className="site-logo--light w-full h-full object-contain object-bottom"
                />
                <img
                  src="/images/logo inverso.png"
                  alt=""
                  aria-hidden="true"
                  className="site-logo--dark w-full h-full object-contain object-bottom"
                />
              </div>
              <span className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-tight text-brand-dark leading-none">
                  Resiste <span className="text-brand-purple">Marika</span>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase mt-1">
                  Autogestión y Arte
                </span>
              </span>
            </Link>

            {/* Navegación Desktop */}
            <nav className="flex items-center gap-0 xl:gap-1" aria-label="Navegación principal">
              {NAV_LINKS.map((link, index) => {
                if (link.children && link.children.length > 0) {
                  const isCurrentPage = location.pathname === link.href
                  const sectionDropdownsDisabled = ['/quienes-somos', '/multimedia'].includes(
                    location.pathname
                  )
                  const isChildActive =
                    location.pathname === link.href ||
                    link.children.some((c) => location.pathname + location.search + location.hash === c.href)

                  return (
                    <div
                      key={link.label}
                      ref={(element) => {
                        dropdownRefs.current[index] = element
                      }}
                      className="relative"
                      onMouseEnter={() =>
                        !sectionDropdownsDisabled && setDesktopDropdownOpen(link.label)
                      }
                      onMouseLeave={() => setDesktopDropdownOpen(null)}
                    >
                      <div className="flex items-center">
                        <NavLink
                          to={link.href}
                          viewTransition
                          onPointerDown={() => {
                            setDesktopDropdownOpen(null)
                            scrollToTopIfCurrentPage(link.href)
                          }}
                          onClick={() => {
                            setDesktopDropdownOpen(null)
                            scrollToTopIfCurrentPage(link.href)
                          }}
                          className={cn(
                            cn(
                              'py-2 text-sm font-bold transition-colors flex items-center whitespace-nowrap',
                              isCurrentPage ? 'px-4 rounded-xl' : 'pl-4 pr-1.5 rounded-l-xl'
                            ),
                            isChildActive
                              ? 'text-brand-purple bg-brand-purpleLight/60'
                              : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50'
                          )}
                        >
                          {link.label}
                        </NavLink>
                        {!sectionDropdownsDisabled && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setDesktopDropdownOpen((v) => (v === link.label ? null : link.label))
                            }}
                            aria-expanded={desktopDropdownOpen === link.label}
                            aria-label={`Desplegar menú de ${link.label}`}
                            className={cn(
                              'pr-3 pl-1 py-2 rounded-r-xl text-sm font-bold transition-colors text-gray-700 hover:text-brand-purple',
                              isChildActive && 'bg-brand-purpleLight/60 text-brand-purple'
                            )}
                          >
                            <ChevronDown
                              size={15}
                              className={cn(
                                'transition-transform duration-200',
                                desktopDropdownOpen === link.label && 'rotate-180 text-brand-purple'
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Dropdown flotante */}
                      {desktopDropdownOpen === link.label && !sectionDropdownsDisabled && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-60 rounded-2xl bg-white shadow-xl border border-gray-200/90 py-1.5 z-50 overflow-hidden"
                        >
                          <div className="p-1 flex flex-col gap-0.5">
                            {link.children.map((sublink) => (
                              <Link
                                key={sublink.href}
                                to={sublink.href}
                                viewTransition
                                onClick={() => setDesktopDropdownOpen(null)}
                                className="group/item flex flex-col px-2.5 py-2 rounded-xl hover:bg-brand-purpleLight/40 transition-colors"
                              >
                                <span className="text-xs font-bold text-gray-900 group-hover/item:text-brand-purple transition-colors">
                                  {sublink.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    viewTransition
                    onPointerDown={() => {
                      setDesktopDropdownOpen(null)
                      scrollToTopIfCurrentPage(link.href)
                    }}
                    onClick={() => {
                      setDesktopDropdownOpen(null)
                      scrollToTopIfCurrentPage(link.href)
                    }}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2',
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

              <Button
                href="/contacto"
                variant="primary"
                size="sm"
                onClick={() => scrollToTopIfCurrentPage('/contacto')}
              >
                Contáctanos
              </Button>
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden">
            <button
              type="button"
              className="min-h-11 min-w-11 p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              id="mobile-navigation"
              aria-label="Navegación móvil"
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
                    const sectionDropdownsDisabled = ['/quienes-somos', '/multimedia'].includes(
                      location.pathname
                    )
                    return (
                      <div key={link.label} className="flex flex-col rounded-xl bg-gray-50/70 p-1">
                        <div className="flex items-center justify-between">
                          <NavLink
                            to={link.href}
                            viewTransition
                            onClick={() => {
                              setMobileOpen(false)
                              scrollToTopIfCurrentPage(link.href)
                            }}
                            className="flex-1 px-3 py-3 text-sm font-bold text-gray-900 hover:text-brand-purple"
                          >
                            {link.label}
                          </NavLink>
                          {!sectionDropdownsDisabled && (
                            <button
                              type="button"
                              onClick={() =>
                                setMobileSubmenuOpen((v) => (v === link.label ? null : link.label))
                              }
                              className="p-2 text-gray-500 hover:text-brand-purple"
                              aria-label="Expandir submenú"
                            >
                              <ChevronDown
                                size={16}
                                className={cn(
                                  'transition-transform duration-200',
                                  mobileSubmenuOpen === link.label && 'rotate-180 text-brand-purple'
                                )}
                              />
                            </button>
                          )}
                        </div>

                        {!sectionDropdownsDisabled && mobileSubmenuOpen === link.label && (
                          <div className="flex flex-col gap-1 pl-3 pr-1 py-1 border-t border-gray-200/60 mt-1">
                            {link.children.map((sublink) => (
                              <Link
                                key={sublink.href}
                                to={sublink.href}
                                viewTransition
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2.5 rounded-lg text-xs font-semibold text-gray-600 hover:text-brand-purple hover:bg-white transition-colors"
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
                      viewTransition
                      onClick={() => {
                        setMobileOpen(false)
                        scrollToTopIfCurrentPage(link.href)
                      }}
                      className={({ isActive }) =>
                        cn(
                          'px-4 py-3 rounded-xl text-sm font-bold transition-colors',
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
                <Button
                  href="/contacto"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false)
                    scrollToTopIfCurrentPage('/contacto')
                  }}
                >
                  Contáctanos
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
                  Cusco · Fundada el 7 de agosto de 2023
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
