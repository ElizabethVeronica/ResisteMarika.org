import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { MULTIMEDIA_ITEMS, CATEGORIAS_MULTIMEDIA, type MultimediaItem } from '@/config/multimedia'
import { Calendar, X, ZoomIn } from 'lucide-react'

export default function Multimedia() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas')
  const [selectedItem, setSelectedItem] = useState<MultimediaItem | null>(null)
  const [nearPageBottom, setNearPageBottom] = useState(false)
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
    <div className="bg-[#FAF9F6] text-gray-900 pb-20 sm:pb-28">
      {/* ── ENCABEZADO DE PÁGINA ──────────────────────────── */}
      <section className="bg-white border-b border-gray-200 pt-12 pb-8 sm:pt-16 sm:pb-10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purpleLight/70 rounded-full mb-3 font-display">
              Registro Vivo · Resiste Marika Cusco
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gray-900 leading-tight mb-4">
              Archivo Multimedia
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans max-w-2xl mx-auto">
              Memoria fotográfica de nuestras marchas con batucada, ferias colectivas, talleres formativos y encuentros en el Cusco.
            </p>

          </div>
        </Container>
      </section>

      {/* ── GALERÍA DE FOTOS ──────────────────────────────── */}
      <section ref={galleryRef} className="scroll-mt-[7.5rem] pt-4 sm:pt-6">
        <Container>
          <div
            aria-hidden={nearPageBottom}
            className={`sticky top-[6.5rem] sm:top-[7rem] z-[60] mb-4 py-2 transition-opacity duration-200 ${
              nearPageBottom ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
                    className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
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

          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredItems.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.025, 0.3) }}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between h-full"
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
                          <Calendar size={13} />
                          <span>{item.fecha}</span>
                        </div>
                        <h3 className="font-display font-bold text-base text-gray-900 leading-snug group-hover:text-brand-purple transition-colors">
                          {item.titulo}
                        </h3>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 text-gray-500 font-sans"
              >
                No hay imágenes en esta categoría actualmente.
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* ── MODAL LIGHTBOX ─────────────────────────────────── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del Modal */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-brand-purple text-white text-xs font-bold font-display">
                  {selectedItem.categoria}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={13} /> {selectedItem.fecha}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Cerrar imagen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Imagen Grande */}
            <div className="flex-1 overflow-hidden bg-gray-900 flex items-center justify-center p-2 sm:p-4 min-h-0">
              <img
                src={selectedItem.archivo}
                alt={selectedItem.titulo}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="px-5 py-4 bg-white border-t border-gray-100">
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-gray-900">
                {selectedItem.titulo}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
