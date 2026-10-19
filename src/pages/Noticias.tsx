import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { NOTICIAS } from '@/config/noticias'
import { Calendar, Clock, Search, ArrowRight, Tag } from 'lucide-react'

export default function Noticias() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todas')
  const [busqueda, setBusqueda] = useState<string>('')

  // Obtener categorías únicas
  const categorias = useMemo(() => {
    const list = Array.from(new Set(NOTICIAS.map((n) => n.categoria)))
    return ['Todas', ...list]
  }, [])

  // Filtrar noticias por categoría y término de búsqueda
  const noticiasFiltradas = useMemo(() => {
    return NOTICIAS.filter((n) => {
      const matchCat = categoriaActiva === 'Todas' || n.categoria === categoriaActiva
      const matchSearch =
        n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        n.resumen.toLowerCase().includes(busqueda.toLowerCase())
      return matchCat && matchSearch
    })
  }, [categoriaActiva, busqueda])

  // Noticia destacada
  const noticiaDestacada = NOTICIAS.find((n) => n.destacada) || NOTICIAS[0]

  return (
    <div className="py-12 sm:py-20">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-14 sm:mb-20">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Prensa & Actualidad"
              title={
                <>
                  Noticias, comunicados y <span className="text-gradient">novedades</span>
                </>
              }
              subtitle="Espacio de difusión, informes temáticos y registro de las actividades de Resiste Marika."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── ARTÍCULO DESTACADO ───────────────────────────── */}
      {noticiaDestacada && (
        <section className="mb-16">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-surface-800 bg-surface-900 grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto overflow-hidden relative">
                  <img
                    src={noticiaDestacada.imagen}
                    alt={noticiaDestacada.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-accent-600 px-3.5 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                      Destacado
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-4 text-xs text-surface-400">
                    <span className="flex items-center gap-1.5 text-primary-300 font-medium">
                      <Tag size={13} />
                      {noticiaDestacada.categoria}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {noticiaDestacada.fecha}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-surface-50 group-hover:text-primary-300 transition-colors">
                    {noticiaDestacada.titulo}
                  </h2>

                  <p className="text-surface-300/80 text-sm sm:text-base leading-relaxed">
                    {noticiaDestacada.resumen}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-surface-400 flex items-center gap-1">
                      <Clock size={12} />
                      {noticiaDestacada.tiempoLectura}
                    </span>
                    <Button href="/contacto" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                      Leer informe completo
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ── BARRA DE BÚSQUEDA Y FILTROS ───────────────────── */}
      <section className="mb-12">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-surface-800">
            {/* Categorías (Pills) */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaActiva(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    categoriaActiva === cat
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/30'
                      : 'bg-surface-800/80 text-surface-300 hover:bg-surface-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input de Búsqueda */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-lg border border-surface-700 bg-surface-800/90 pl-9 pr-4 py-2 text-xs sm:text-sm text-surface-100 placeholder:text-surface-400 focus:border-primary-500 focus:outline-none"
              />
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── GRID DE NOTICIAS ──────────────────────────────── */}
      <section className="mb-20">
        <Container>
          {noticiasFiltradas.length === 0 ? (
            <div className="rounded-xl border border-surface-800 bg-surface-900/40 p-12 text-center">
              <p className="text-surface-300 text-base mb-2">
                No se encontraron noticias con ese criterio de búsqueda.
              </p>
              <button
                onClick={() => {
                  setCategoriaActiva('Todas')
                  setBusqueda('')
                }}
                className="text-xs text-primary-400 hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {noticiasFiltradas.map((n, i) => (
                <Reveal key={n.id} delay={i * 0.08}>
                  <article className="group h-full flex flex-col rounded-xl border border-surface-800 bg-surface-900 overflow-hidden hover:border-primary-500/40 transition-colors">
                    {/* Imagen stock */}
                    <div className="aspect-[16/10] overflow-hidden bg-surface-800 relative">
                      <img
                        src={n.imagen}
                        alt={n.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-surface-950/80 backdrop-blur-md border border-surface-700 px-2.5 py-0.5 text-[11px] font-medium text-primary-300">
                        {n.categoria}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <div className="flex items-center gap-3 text-xs text-surface-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {n.fecha}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {n.tiempoLectura}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-surface-50 group-hover:text-primary-300 transition-colors line-clamp-2">
                        {n.titulo}
                      </h3>

                      <p className="text-xs sm:text-sm text-surface-300/75 leading-relaxed flex-1 line-clamp-3">
                        {n.resumen}
                      </p>

                      <div className="pt-3 border-t border-surface-800">
                        <a
                          href={`#${n.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          Leer comunicado completo
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── BOLETÍN DE PRENSA / NEWSLETTER ────────────────── */}
      <section className="mb-12">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-surface-800 bg-surface-900/60 p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-surface-50 mb-2">
                Suscríbete a nuestro boletín comunitario
              </h3>
              <p className="text-xs sm:text-sm text-surface-300/70 mb-6">
                Recibe comunicados mensuales, invitaciones a foros, informes y actividades sin spam.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('¡Gracias por suscribirte al boletín de Resiste Marika!')
                }}
                className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="flex-1 rounded-lg border border-surface-700 bg-surface-800 px-4 py-2.5 text-xs sm:text-sm text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none"
                />
                <Button type="submit" size="sm" variant="primary">
                  Suscribirme
                </Button>
              </form>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
