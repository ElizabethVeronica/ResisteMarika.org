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

export default function Nosotros() {
  return (
    <div className="py-12 sm:py-20">
      {/* ── ENCABEZADO DE PÁGINA ──────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Nuestra Organización"
              title={
                <>
                  Quiénes somos y <span className="text-gradient">por qué resistimos</span>
                </>
              }
              subtitle="Somos una asociación civil sin fines de lucro conformada por activistas, profesionales y miembres de la comunidad LGBTIQ+."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── HISTORIA & ORIGEN ─────────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  Historia & Trayectoria
                </span>
                <h2 className="text-3xl font-bold font-display text-surface-50 sm:text-4xl text-balance">
                  De círculos comunitarios a una red de defensa y cuidados
                </h2>
                <p className="text-surface-300/80 leading-relaxed text-base sm:text-lg">
                  {HISTORIA_RESUMEN.parrafo1}
                </p>
                <p className="text-surface-300/70 leading-relaxed text-sm sm:text-base">
                  {HISTORIA_RESUMEN.parrafo2}
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button href="/programas" variant="primary" icon={<ArrowRight size={16} />}>
                    Ver nuestros programas
                  </Button>
                  <Button href="/colabora" variant="outline">
                    Sumarte al equipo
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-surface-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="Comunidad y activismo"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Badge flotante de impacto */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-xl bg-surface-900/95 backdrop-blur-md border border-primary-500/30 p-4 shadow-xl flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400">
                    🏳️‍🌈
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                      Organización Autónoma
                    </p>
                    <p className="text-sm text-surface-200 font-medium">
                      Compromiso social y comunitario
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── VALORES INSTITUCIONALES ───────────────────────── */}
      <section className="mb-20 sm:mb-28 py-16 bg-surface-900/40 border-y border-surface-800/60">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Principios"
              title={
                <>
                  Nuestros <span className="text-gradient">valores rectores</span>
                </>
              }
              subtitle="Los pilares éticos y metodológicos que orientan cada una de nuestras intervenciones."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((val, idx) => {
              const IconComp = ICON_MAP[val.icono] || ShieldCheck
              return (
                <Reveal key={val.id} delay={idx * 0.1}>
                  <div className="h-full flex flex-col gap-4 rounded-xl border border-surface-800 bg-surface-900/90 p-6 hover:border-primary-500/50 transition-colors duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-surface-50">
                      {val.titulo}
                    </h3>
                    <p className="text-sm text-surface-300/70 leading-relaxed flex-1">
                      {val.descripcion}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── EQUIPO DE TRABAJO ─────────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Liderazgo Colectivo"
              title={
                <>
                  Equipo de <span className="text-gradient">coordinación</span>
                </>
              }
              subtitle="Personas comprometidas desde el activismo, el derecho, la psicología y la comunicación."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPO.map((m, idx) => (
              <Reveal key={m.id} delay={idx * 0.1}>
                <div className="group flex flex-col rounded-xl border border-surface-800 bg-surface-900 overflow-hidden hover:border-primary-500/40 transition-colors">
                  <div className="aspect-square w-full overflow-hidden bg-surface-800 relative">
                    <img
                      src={m.foto}
                      alt={m.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg text-surface-50">
                      {m.nombre}
                    </h3>
                    <p className="text-xs font-medium text-primary-300 mb-3">
                      {m.rol}
                    </p>
                    <p className="text-xs text-surface-300/70 leading-relaxed flex-1 mb-4">
                      {m.bio}
                    </p>

                    {/* Redes */}
                    <div className="flex gap-2 pt-2 border-t border-surface-800">
                      {m.redes?.instagram && (
                        <a
                          href={m.redes.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-surface-400 hover:text-primary-300 transition-colors"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={14} />
                        </a>
                      )}
                      {m.redes?.linkedin && (
                        <a
                          href={m.redes.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-surface-400 hover:text-primary-300 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin size={14} />
                        </a>
                      )}
                      {m.redes?.twitter && (
                        <a
                          href={m.redes.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="text-surface-400 hover:text-primary-300 transition-colors"
                          aria-label="Twitter"
                        >
                          <FaTwitter size={14} />
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

      {/* ── ALIANZAS & REDES ──────────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-surface-800 bg-surface-900/60 p-8 sm:p-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2 block">
                Articulación Interinstitucional
              </span>
              <h3 className="text-2xl font-bold font-display text-surface-50 mb-3">
                Redes y Organizaciones Aliadas
              </h3>
              <p className="text-sm text-surface-300/70 max-w-xl mx-auto mb-8">
                El trabajo en derechos humanos es colectivo. Colaboramos con redes de defensa jurídica, colectivas comunitarias y fondos aliados.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {ALIANZAS.map((alianza) => (
                  <div
                    key={alianza.id}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-surface-800 bg-surface-900 hover:border-primary-500/30 transition-colors"
                  >
                    <span className="font-display font-bold text-lg text-primary-300 tracking-wider">
                      {alianza.logoText}
                    </span>
                    <span className="text-xs text-surface-200 mt-1 font-medium text-center">
                      {alianza.nombre}
                    </span>
                    <span className="text-[10px] text-surface-400 mt-0.5">
                      {alianza.tipo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
