import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { MULTIMEDIA_ITEMS, CATEGORIAS_MULTIMEDIA, type MultimediaItem } from '@/config/multimedia'
import { Calendar, MapPin, X, ZoomIn } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

function isDateLabel(value: string) {
  return /\b(?:19|20)\d{2}\b|(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/i.test(
    value
  )
}

export default function Multimedia() {
  const reduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<string>('Todas')
  const [selectedItem, setSelectedItem] = useState<MultimediaItem | null>(null)
  const [nearPageBottom, setNearPageBottom] = useState(false)
  const [mobileNavVisible, setMobileNavVisible] = useState(
    () => window.matchMedia('(min-width: 640px)').matches,
  )
  const galleryRef = useRef<HTMLElement>(null)
  const location = useLocation()

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filteredItems =
    activeCategory === 'Todas'
      ? MULTIMEDIA_ITEMS
      : MULTIMEDIA_ITEMS.filter((item) => item.categoria === activeCategory)

  useEffect(() => {
    const requestedCategory = new URLSearchParams(location.search).get('categoria')
    const validCategory = CATEGORIAS_MULTIMEDIA.find((category) => category === requestedCategory)
    setActiveCategory(validCategory ?? 'Todas')
  }, [location.search])

  useEffect(() => {
    const updateBottomVisibility = () => {
      const remainingPageHeight =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight
      setNearPageBottom(remainingPageHeight <= 320)

      const isMobileViewport = window.matchMedia('(max-width: 639px)').matches
      const headerHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--site-header-height'),
      ) || 0
      const galleryTop = galleryRef.current?.getBoundingClientRect().top ?? Infinity
      const shouldShowMobileNav =
        !isMobileViewport || galleryTop <= headerHeight + 96
      setMobileNavVisible((current) =>
        current === shouldShowMobileNav ? current : shouldShowMobileNav,
      )
    }

    updateBottomVisibility()
    window.addEventListener('scroll', updateBottomVisibility, { passive: true })
    window.addEventListener('resize', updateBottomVisibility)
    return () => {
      window.removeEventListener('scroll', updateBottomVisibility)
      window.removeEventListener('resize', updateBottomVisibility)
    }
  }, [])

  // Cerrar lightbox con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="page-art-backdrop bg-[#FAF9F6] text-gray-900">
      <section className="page-hero">
        <img
          src={`${import.meta.env.BASE_URL}images/Marika Fest 2024 - Productos de conscientización.webp`}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="page-hero__overlay" />
        <Container className="relative z-10 flex items-center">
          <Reveal className="w-full">
            <div className="page-hero__content">
              <h1 className="page-hero__title">Archivo Multimedia</h1>
              <p className="page-hero__subtitle">
                Memoria fotográfica de nuestras marchas con batucada, ferias colectivas, talleres formativos y encuentros en el Cusco.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section ref={galleryRef} className="page-section pb-12 pt-12 sm:pb-16 sm:pt-16">
        <Container>
          <div
            aria-hidden={nearPageBottom || selectedItem !== null || !mobileNavVisible}
            className={`sticky-section-nav mobile-fixed-section-nav z-30 mb-4 transition-opacity duration-200 sm:z-[60] ${
              nearPageBottom || selectedItem !== null || !mobileNavVisible
                ? 'pointer-events-none opacity-0'
                : 'opacity-100'
            }`}
          >
            <div className="mobile-scrollbar-hidden -mx-4 flex w-[calc(100%+2rem)] flex-nowrap justify-start gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {CATEGORIAS_MULTIMEDIA.map((cat) => {
                const count =
                  cat === 'Todas'
                    ? MULTIMEDIA_ITEMS.length
                    : MULTIMEDIA_ITEMS.filter((item) => item.categoria === cat).length

                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => selectCategory(cat)}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-brand-purple text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[9px] px-1 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={!reduceMotion}>
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredItems.map((item, idx) => (
                  <Reveal key={item.id} className="h-full" delay={Math.min(idx * 0.025, 0.3)}>
                    <motion.article
                      initial={false}
                      className="graphic-card group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        aria-label={`Ver imagen: ${item.titulo}`}
                        className="block w-full text-left"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                          <img
                            src={item.archivo}
                            alt={item.titulo}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-400"
                          />
                          <div className="absolute inset-0 bg-gray-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="p-2.5 rounded-full bg-white/90 text-gray-900 shadow-md">
                              <ZoomIn size={18} />
                            </span>
                          </div>
                          {activeCategory === 'Todas' && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-brand-purple text-[11px] font-bold shadow-sm font-display">
                              {item.categoria}
                            </span>
                          )}
                        </div>
                      </button>

                      <div className="p-5 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5 font-sans">
                            {isDateLabel(item.fecha) ? <Calendar size={13} /> : <MapPin size={13} />}
                            <span>{item.fecha}</span>
                          </div>
                          <h3 className="font-display font-bold text-base text-gray-900 leading-snug group-hover:text-brand-purple transition-colors">
                            {item.titulo}
                          </h3>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                className="text-center py-16 text-gray-500 font-sans"
              >
                No hay imágenes en esta categoría actualmente.
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {createPortal(
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/90 p-3 backdrop-blur-md sm:p-6"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="multimedia-lightbox-title"
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-2xl sm:rounded-3xl"
                onClick={(event) => event.stopPropagation()}
              >
                <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-6 sm:py-4">
                  <div className="min-w-0">
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-brand-pink sm:text-xs">
                      {selectedItem.categoria}
                    </span>
                    <h2
                      id="multimedia-lightbox-title"
                      className="truncate font-display text-sm font-bold text-white sm:text-base"
                    >
                      {selectedItem.titulo}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="shrink-0 rounded-full border border-white/15 p-2 text-white/75 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                    aria-label="Cerrar imagen"
                  >
                    <X size={19} />
                  </button>
                </header>

                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/30 p-2 sm:p-5">
                  <img
                    src={selectedItem.archivo}
                    alt={selectedItem.titulo}
                    decoding="async"
                    className="max-h-[72vh] max-w-full rounded-lg object-contain sm:rounded-xl"
                  />
                </div>

                <footer className="flex items-center gap-2 border-t border-white/10 px-4 py-3 text-xs text-white/65 sm:px-6">
                  {isDateLabel(selectedItem.fecha) ? <Calendar size={14} /> : <MapPin size={14} />}
                  <span>{selectedItem.fecha}</span>
                </footer>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
