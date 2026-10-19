import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PROGRAMAS } from '@/config/programas'
import { CheckCircle2, ArrowRight, Heart } from 'lucide-react'

export default function Proyectos() {
  return (
    <div className="py-12 sm:py-20 bg-brand-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Nuestra Incidencia"
              title={
                <>
                  Proyectos e iniciativas de <span className="text-gradient">transformación</span>
                </>
              }
              subtitle="Desarrollamos proyectos integrales de defensa, educación popular, acompañamiento en salud y vigilancia ciudadana para la comunidad LGBTIQ+."
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
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Imagen del proyecto */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md">
                        <img
                          src={prog.imagen}
                          alt={prog.titulo}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="badge-tag bg-brand-dark text-white text-xs">
                            {prog.categoria}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-1 block">
                          Proyecto Activo
                        </span>
                        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark leading-tight">
                          {prog.titulo}
                        </h2>
                        {prog.subtitulo && (
                          <p className="text-sm font-semibold text-brand-magenta mt-1">
                            {prog.subtitulo}
                          </p>
                        )}
                      </div>

                      <p className="text-surface-muted text-sm sm:text-base leading-relaxed">
                        {prog.descripcion}
                      </p>

                      {prog.objetivo && (
                        <div className="rounded-xl bg-brand-light p-4 border border-brand-purple/15">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple mb-1">
                            Impacto Buscado
                          </p>
                          <p className="text-xs sm:text-sm text-brand-dark font-medium">
                            {prog.objetivo}
                          </p>
                        </div>
                      )}

                      {prog.detalles && prog.detalles.length > 0 && (
                        <ul className="flex flex-col gap-2 my-2">
                          {prog.detalles.map((detalle, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-muted">
                              <CheckCircle2 size={16} className="text-brand-magenta shrink-0 mt-0.5" />
                              <span>{detalle}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-2 flex flex-wrap gap-4">
                        <Button href="/contacto" variant="primary" size="sm" icon={<ArrowRight size={14} />}>
                          Participar en este proyecto
                        </Button>
                        <Button href="/contacto" variant="outline" size="sm">
                          Más información
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

      {/* ── BANNER SERVICIOS GRATUITOS ───────────────────── */}
      <section className="mb-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-12 text-center border-4 border-brand-cyan">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan text-brand-dark mb-4">
                <Heart size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-3">
                Orientación y acompañamiento sin barreras económicas
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                Nuestras asesorías legales, psicológicas y círculos de escucha son completamente gratuitos y confidenciales para la comunidad.
              </p>
              <Button href="/contacto" size="lg" variant="accent">
                Solicitar orientación o apoyo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
