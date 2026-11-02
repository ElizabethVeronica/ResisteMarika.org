import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PROGRAMAS } from '@/config/programas'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Proyectos() {
  return (
    <div className="page-art-backdrop bg-surface-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="page-hero">
        <img
          src="/images/marcha del orgullo 2025.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="page-hero__overlay" />
        <Container className="relative z-10 flex items-center">
          <Reveal className="w-full">
            <div className="page-hero__content">
              <h1 className="page-hero__title">
                Artivismo y proyectos colectivos
              </h1>
              <p className="page-hero__subtitle">
                Espacios de autogestión en colectividad, arte y vigilancia ciudadana para la comunidad LGTBIQ+.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LISTADO DE PROYECTOS ─────────────────────────── */}
      <section className="page-section mb-20 pt-12 sm:mb-28 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-14 sm:gap-20">
            {PROGRAMAS.map((prog, idx) => {
              const isEven = idx % 2 === 0
              return (
                <Reveal key={prog.id} delay={0.1}>
                  <div className="graphic-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-surface-border shadow-sm hover:shadow-xl hover:border-brand-purpleSoft/40 transition-all duration-300">
                    {/* Imagen del proyecto */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md bg-white">
                        <img
                          src={prog.imagen}
                          alt={prog.titulo}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark leading-tight">
                          {prog.titulo}
                        </h2>
                      </div>

                      <p className="text-surface-muted text-sm sm:text-base leading-relaxed font-sans">
                        {prog.descripcion}
                      </p>

                      {prog.objetivo && (
                        <div className="graphic-card rounded-2xl bg-brand-purpleLight/40 p-4 border border-brand-purpleSoft/30">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple mb-1 font-display">
                            Propósito
                          </p>
                          <p className="text-sm text-brand-dark font-medium font-sans">
                            {prog.objetivo}
                          </p>
                        </div>
                      )}

                      {prog.detalles && prog.detalles.length > 0 && (
                        <ul className="flex flex-col gap-2 my-2">
                          {prog.detalles.map((detalle, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-surface-muted font-sans">
                              <CheckCircle2 size={16} className="text-brand-pink shrink-0 mt-0.5" />
                              <span>{detalle}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-2 flex flex-wrap gap-4">
                        <Button href="/contacto" variant="primary" size="sm" icon={<ArrowRight size={14} />}>
                          Participar en esta iniciativa
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── BANNER APOYO MUTUO ───────────────────────────── */}
      <section className="page-section page-section--photo relative isolate overflow-hidden border-y border-white/10 py-14 sm:py-20">
        <img
          src="/images/Feria Informativa LGTBIQ CuidArte en el Colegio San Francisco de Borja.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="photo-section__overlay" />
        <Container className="w-full">
          <Reveal>
            <div className="photo-section__content max-w-3xl">
                <h2 className="mb-3 font-display text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl">
                  ¿Tienes alguna iniciativa o proyecto en mente?
                </h2>
                <p className="mb-6 max-w-2xl font-sans text-base leading-relaxed text-white/95 drop-shadow-md">
                  Nuestros proyectos y actividades están abiertos a personas de la comunidad LGTBIQ+ que deseen compartir sus artes, oficios y propuestas desde la autoorganización y la colectividad.
                </p>
                <Button href="/contacto" size="lg" variant="yellow">
                  Escríbenos para participar
                </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
