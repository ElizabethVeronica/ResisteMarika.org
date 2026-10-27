import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PROGRAMAS } from '@/config/programas'
import { CheckCircle2, ArrowRight, Heart } from 'lucide-react'

export default function Proyectos() {
  return (
    <div className="page-art-backdrop py-12 sm:py-20 bg-surface-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="relative isolate mb-16 overflow-hidden py-5 sm:mb-24 sm:py-7">
        <img
          src="/images/marcha del orgullo 2025.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-skyLight/65 via-white/65 to-brand-pinkLight/65 dark:from-[#17141f]/75 dark:via-[#211d2a]/70 dark:to-[#34283f]/75" />
        <Container>
          <Reveal>
            <div className="graphic-card--stripe relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/85 bg-white/85 px-5 py-8 shadow-xl backdrop-blur-md sm:px-8 sm:py-10 dark:border-white/10 dark:bg-[#211d2a]/90">
              <SectionHeader
                pill="Nuestras Acciones en Cusco"
                title={
                  <>
                    Artivismo y <span className="text-gradient">proyectos colectivos</span>
                  </>
                }
                subtitle="Espacios de autogestión en colectividad, arte y vigilancia ciudadana para la comunidad LGTBIQ+."
                className="max-w-3xl mx-auto text-center"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LISTADO DE PROYECTOS ─────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="flex flex-col gap-14 sm:gap-20">
            {PROGRAMAS.map((prog, idx) => {
              const isEven = idx % 2 === 0
              return (
                <Reveal key={prog.id} delay={0.1}>
                  <div className="graphic-card--stripe grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-surface-border shadow-sm hover:shadow-xl hover:border-brand-purpleSoft/40 transition-all duration-300">
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
      <section className="mb-16">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-3xl border border-brand-yellowWarm/50 shadow-xl">
              <img
                src="/images/Feria Informativa LGTBIQ CuidArte en el Colegio San Francisco de Borja.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950/60 via-gray-950/40 to-brand-purple/45" />
              <div className="relative z-10 m-3 rounded-2xl border border-white/20 bg-gray-950/60 p-6 text-center text-white shadow-xl backdrop-blur-md sm:m-5 sm:p-12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink text-brand-dark mb-4 shadow-sm">
                  <Heart size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-brand-pink font-extrabold font-display mb-3">
                  ¿Tienes alguna iniciativa o proyecto en mente?
                </h3>
                <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                  Nuestros proyectos y actividades están abiertos a personas de la comunidad LGTBIQ+ que deseen compartir sus artes, oficios y propuestas desde la autoorganización y la colectividad.
                </p>
                <Button href="/contacto" size="lg" variant="yellow">
                  Escríbenos para participar
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
