import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { PROGRAMAS } from '@/config/programas'
import { CheckCircle2, ArrowRight, MessageSquareCheck, Heart } from 'lucide-react'

export default function Programas() {
  return (
    <div className="py-12 sm:py-20">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Nuestras Acciones"
              title={
                <>
                  Líneas de trabajo y <span className="text-gradient">programas</span>
                </>
              }
              subtitle="Desarrollamos proyectos transversales orientados al acompañamiento directo, la educación popular, la salud colectiva y la incidencia política."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── LISTADO DETALLADO DE PROGRAMAS ───────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="flex flex-col gap-16 lg:gap-24">
            {PROGRAMAS.map((prog, idx) => {
              const isEven = idx % 2 === 0
              return (
                <Reveal key={prog.id} delay={0.1}>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center rounded-2xl border border-surface-800 bg-surface-900/40 p-6 sm:p-10">
                    {/* Imagen stock del programa */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-surface-800 relative group">
                        <img
                          src={prog.imagen}
                          alt={prog.titulo}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-surface-950/80 backdrop-blur-md border border-primary-500/30 px-3 py-1 text-xs font-semibold text-primary-300">
                            {prog.categoria}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contenido y objetivos */}
                    <div
                      className={`lg:col-span-7 flex flex-col gap-4 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-surface-50">
                        {prog.titulo}
                      </h2>
                      {prog.subtitulo && (
                        <p className="text-sm font-medium text-primary-300">
                          {prog.subtitulo}
                        </p>
                      )}
                      <p className="text-surface-300/80 leading-relaxed text-sm sm:text-base">
                        {prog.descripcion}
                      </p>

                      {prog.objetivo && (
                        <div className="rounded-lg bg-surface-950/60 border border-surface-800 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-1">
                            Objetivo Principal
                          </p>
                          <p className="text-sm text-surface-200">
                            {prog.objetivo}
                          </p>
                        </div>
                      )}

                      {/* Lista de acciones */}
                      {prog.detalles && prog.detalles.length > 0 && (
                        <ul className="flex flex-col gap-2 my-2">
                          {prog.detalles.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-surface-300/80"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-primary-400 shrink-0 mt-0.5"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-2 flex flex-wrap gap-4">
                        <Button
                          href="/contacto"
                          variant="primary"
                          size="sm"
                          icon={<MessageSquareCheck size={16} />}
                        >
                          Solicitar información
                        </Button>
                        <Button
                          href="/colabora"
                          variant="outline"
                          size="sm"
                          icon={<ArrowRight size={14} />}
                        >
                          Apoyar este programa
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

      {/* ── BANNER DE ACCESO GRATUITO & CONFIDENCIAL ─────── */}
      <section className="mb-16">
        <Container>
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-r from-primary-950/60 via-surface-900 to-primary-950/60 border border-primary-500/30 p-8 sm:p-12 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-surface-50 mb-3">
                Todos nuestros servicios comunitarios son gratuitos
              </h3>
              <p className="text-surface-300/70 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
                Creemos en el acceso igualitario y libre de barreras económicas. Si necesitas orientación legal o acompañamiento psicosocial, tus datos serán tratados con estricta confidencialidad.
              </p>
              <Button href="/contacto" size="lg" variant="secondary">
                Escríbenos con total confianza
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
