import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PROGRAMAS } from '@/config/programas'
import { CheckCircle2, ArrowRight, Heart } from 'lucide-react'

export default function Proyectos() {
  return (
    <div className="py-12 sm:py-20 bg-surface-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
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
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-surface-border shadow-sm hover:shadow-xl hover:border-brand-purpleSoft/40 transition-all duration-300">
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
                        <div className="rounded-2xl bg-brand-purpleLight/40 p-4 border border-brand-purpleSoft/30">
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
            <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-12 text-center border-2 border-brand-yellowWarm relative overflow-hidden">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink text-brand-dark mb-4 shadow-sm">
                <Heart size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl sm:text-3xl text-brand-pink font-extrabold font-display mb-3">
                ¿Tienes alguna iniciativa o proyecto en mente?
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                Nuestros proyectos y actividades están abiertos a la comunidad LGTBIQ+ que quieran sumar sus artes, oficios y propuestas desde la auto-organización y colectividad.
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
