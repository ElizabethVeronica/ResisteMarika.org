import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { HISTORIA_RESUMEN, VALORES, EQUIPO, ALIANZAS } from '@/config/nosotros'
import { ArrowRight, ShieldCheck, HeartHandshake, Users, Flame, type LucideIcon } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  HeartHandshake,
  Flame,
}

export default function QuienesSomos() {
  return (
    <div className="py-12 sm:py-20 bg-brand-light">
      {/* ── ENCABEZADO DE PÁGINA ──────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Quiénes Somos"
              title={
                <>
                  Conoce la historia de <span className="text-gradient">Resiste Marika</span>
                </>
              }
              subtitle="Somos una asociación civil sin fines de lucro conformada por activistas, profesionales y personas de la diversidad LGBTIQ+ unidas por la dignidad y la justicia social."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── HISTORIA & ORIGEN ─────────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <span className="badge-tag bg-brand-purple/10 text-brand-purple mb-3">
                  Nuestra Trayectoria
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark leading-tight mb-6">
                  De círculos barriales de encuentro a una asociación civil articulada
                </h2>
                <div className="flex flex-col gap-4 text-surface-muted text-sm sm:text-base leading-relaxed">
                  <p>{HISTORIA_RESUMEN.parrafo1}</p>
                  <p>{HISTORIA_RESUMEN.parrafo2}</p>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Button href="/proyectos" variant="primary" icon={<ArrowRight size={16} />}>
                    Ver nuestros proyectos
                  </Button>
                  <Button href="/contacto" variant="outline">
                    Contactar al equipo
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                      alt="Encuentro de la colectiva"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-2xl bg-brand-dark text-white p-5 shadow-2xl border-2 border-brand-peach flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-magenta flex items-center justify-center font-impact text-2xl">
                      RM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                        Espacio de Autonomía
                      </p>
                      <p className="text-sm font-semibold">Defensa y acompañamiento activo</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── VALORES Y PRINCIPIOS ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-y border-gray-100 mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Ética & Principios"
              title={
                <>
                  Nuestros <span className="text-gradient">valores rectores</span>
                </>
              }
              subtitle="Los compromisos metodológicos y humanos que guían cada proyecto, taller y acompañamiento."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALORES.map((val, idx) => {
              const IconComp = ICON_MAP[val.icono] || ShieldCheck
              return (
                <Reveal key={val.id} delay={idx * 0.1}>
                  <div className="h-full flex flex-col p-6 rounded-2xl bg-brand-light border border-gray-100 hover:border-brand-purple/40 hover:shadow-lg transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center mb-5">
                      <IconComp size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                      {val.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1">
                      {val.descripcion}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── EQUIPA / EQUIPO (AL ESTILO SER VALIENTE EN RED) ── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Liderazgo & Articulación"
              title={
                <>
                  Nuestra <span className="text-gradient">equipa</span>
                </>
              }
              subtitle="Profesionales, activistas y voluntaries que sostienen la gestión cotidiana de la organización."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EQUIPO.map((m, idx) => (
              <Reveal key={m.id} delay={idx * 0.1}>
                <div className="group flex flex-col rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-magenta/40 transition-all duration-300">
                  <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={m.foto}
                      alt={m.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-1">
                      {m.nombre}
                    </h3>
                    <p className="text-xs font-semibold text-brand-purple mb-3">
                      {m.rol}
                    </p>
                    <p className="text-xs text-surface-muted leading-relaxed flex-1 mb-4">
                      {m.bio}
                    </p>

                    <div className="flex gap-2 pt-3 border-t border-gray-100 text-brand-dark/70">
                      {m.redes?.instagram && (
                        <a href={m.redes.instagram} target="_blank" rel="noreferrer" className="hover:text-brand-magenta p-1">
                          <FaInstagram size={15} />
                        </a>
                      )}
                      {m.redes?.linkedin && (
                        <a href={m.redes.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-deep p-1">
                          <FaLinkedin size={15} />
                        </a>
                      )}
                      {m.redes?.twitter && (
                        <a href={m.redes.twitter} target="_blank" rel="noreferrer" className="hover:text-brand-dark p-1">
                          <FaTwitter size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ALIANZAS Y REDES ──────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="badge-tag bg-brand-cyan/20 text-brand-dark mb-2">
                Trabajo en Red
              </span>
              <h3 className="text-2xl font-bold font-display text-brand-dark mb-2">
                Organizaciones Aliadas
              </h3>
              <p className="text-xs sm:text-sm text-surface-muted">
                Colaboramos activamente con colectivas de derechos humanos, salud comunitaria y cooperación.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {ALIANZAS.map((alianza) => (
                <div
                  key={alianza.id}
                  className="p-5 rounded-2xl bg-brand-light border border-gray-100 flex flex-col items-center justify-center text-center hover:border-brand-purple/30 transition-colors"
                >
                  <span className="font-impact text-2xl text-brand-purple tracking-wider">
                    {alianza.logoText}
                  </span>
                  <span className="text-xs font-semibold text-brand-dark mt-1">
                    {alianza.nombre}
                  </span>
                  <span className="text-[10px] text-surface-muted mt-0.5">
                    {alianza.tipo}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
