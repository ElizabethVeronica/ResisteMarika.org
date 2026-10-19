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

  const categorias = useMemo(() => {
    const list = Array.from(new Set(NOTICIAS.map((n) => n.categoria)))
    return ['Todas', ...list]
  }, [])

  const noticiasFiltradas = useMemo(() => {
    return NOTICIAS.filter((n) => {
      const matchCat = categoriaActiva === 'Todas' || n.categoria === categoriaActiva
      const matchSearch =
        n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        n.resumen.toLowerCase().includes(busqueda.toLowerCase())
      return matchCat && matchSearch
    })
  }, [categoriaActiva, busqueda])

  const noticiaDestacada = NOTICIAS.find((n) => n.destacada) || NOTICIAS[0]

  return (
    <div className="py-12 sm:py-20 bg-brand-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-14 sm:mb-20">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Prensa & Artículos"
              title={
                <>
                  Noticias, comunicados y <span className="text-gradient">publicaciones</span>
                </>
              }
              subtitle="Espacio de difusión informativa, pronunciamientos, informes temáticos y registro de nuestras actividades."
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
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white grid grid-cols-1 lg:grid-cols-12 shadow-md group">
                <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto overflow-hidden relative">
                  <img
                    src={noticiaDestacada.imagen}
                    alt={noticiaDestacada.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-tag bg-brand-magenta text-white text-xs">
                      Informe Destacado
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-3 text-xs text-surface-muted">
                    <span className="flex items-center gap-1 font-semibold text-brand-purple">
                      <Tag size={13} />
                      {noticiaDestacada.categoria}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {noticiaDestacada.fecha}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark group-hover:text-brand-magenta transition-colors leading-tight">
                    {noticiaDestacada.titulo}
                  </h2>

                  <p className="text-surface-muted text-sm sm:text-base leading-relaxed">
                    {noticiaDestacada.resumen}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-surface-muted flex items-center gap-1">
                      <Clock size={12} />
                      {noticiaDestacada.tiempoLectura}
                    </span>
                    <Button href="/contacto" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                      Leer completo
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ── BARRA DE BÚSQUEDA Y CATEGORÍAS ────────────────── */}
      <section className="mb-12">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-gray-200">
            {/* Pills de categorías */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaActiva(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    categoriaActiva === cat
                      ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/25'
                      : 'bg-white text-brand-dark/75 hover:bg-gray-100 border border-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input de búsqueda */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Buscar por palabra clave..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white pl-9 pr-4 py-2.5 text-xs sm:text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none shadow-sm"
              />
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── GRID DE NOTICIAS ──────────────────────────────── */}
      <section className="mb-20">
        <Container>
          {noticiasFiltradas.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
              <p className="text-brand-dark text-base font-semibold mb-2">
                No se encontraron publicaciones con ese criterio.
              </p>
              <button
                onClick={() => {
                  setCategoriaActiva('Todas')
                  setBusqueda('')
                }}
                className="text-xs text-brand-purple font-bold hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticiasFiltradas.map((n, i) => (
                <Reveal key={n.id} delay={i * 0.08}>
                  <article className="group h-full flex flex-col rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-magenta/40 transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={n.imagen}
                        alt={n.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 badge-tag bg-white/90 backdrop-blur-md text-brand-purple text-[10px] shadow-sm">
                        {n.categoria}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <div className="flex items-center gap-3 text-xs text-surface-muted">
                        <span className="flex items-center gap-1 font-semibold text-brand-purple">
                          <Calendar size={12} />
                          {n.fecha}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {n.tiempoLectura}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-magenta transition-colors line-clamp-2">
                        {n.titulo}
                      </h3>

                      <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1 line-clamp-3">
                        {n.resumen}
                      </p>

                      <div className="pt-3 border-t border-gray-100">
                        <a
                          href={`#${n.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-magenta transition-colors uppercase tracking-wider"
                        >
                          Leer artículo
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

      {/* ── BOLETÍN DE PRENSA ─────────────────────────────── */}
      <section className="mb-12">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-12 text-center max-w-2xl mx-auto border-4 border-brand-peach">
              <h3 className="text-2xl font-bold font-display mb-2">
                Recibe nuestros informes y boletines
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mb-6">
                Enviamos periódicamente análisis sobre la situación de derechos, convocatorias y proyectos.
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
                  className="flex-1 rounded-xl bg-white px-4 py-3 text-xs sm:text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none"
                />
                <Button type="submit" size="sm" variant="accent">
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
