import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { HISTORIA_RESUMEN, MISION_VISION, OBJETIVOS_ESTRATEGICOS, FORMAS_AUTOGESTION, EQUIPO, ALIANZAS } from '@/config/nosotros'
import { ArrowRight, ShieldCheck, HeartHandshake, Users, Flame, type LucideIcon, Heart, FileText, Eye, Sparkles, Network } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  HeartHandshake,
  Flame,
  Heart,
  FileText,
  Eye,
  Sparkles,
  Network,
}

export default function QuienesSomos() {
  return (
    <div className="py-12 sm:py-20 bg-surface-light">
      {/* ── ENCABEZADO DE PÁGINA ──────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Quiénes Somos"
              title={
                <>
                  Nuestra historia de <span className="text-gradient">autogestión y ternura</span>
                </>
              }
              subtitle="RESISTE MARIKA CUSCO nació el 7 de agosto del 2023 con el sueño de construir una red de apoyo mutuo donde la comunidad LGTBIQ+ y mujeres puedan florecer desde la independencia y la solidaridad."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── ORIGEN & MANIFIESTO ───────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <span className="badge-pill bg-brand-pinkLight text-brand-purple border border-brand-pink/30 mb-3">
                  Cusco · 7 de Agosto del 2023
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark leading-tight mb-6">
                  Espacios de apoyo mutuo para vender artes y construir emprendimientos
                </h2>
                
                <div className="flex flex-col gap-4 text-surface-muted text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-brand-dark">
                    {HISTORIA_RESUMEN.parrafo1}
                  </p>
                  <p className="bg-brand-purpleLight/40 p-4 rounded-2xl border-l-4 border-brand-purple text-brand-dark">
                    {HISTORIA_RESUMEN.parrafo2}
                  </p>
                  <p>
                    {HISTORIA_RESUMEN.parrafo3}
                  </p>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Button href="/proyectos" variant="primary" icon={<ArrowRight size={16} />}>
                    Ver ferias y proyectos
                  </Button>
                  <Button href="/contacto" variant="outline">
                    Sumarme a la red
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                      alt="Encuentro comunitario en Cusco"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-3xl bg-brand-dark text-white p-5 shadow-2xl border-2 border-brand-yellowWarm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-sky via-brand-pink to-brand-purple flex items-center justify-center font-display font-black text-lg text-brand-dark">
                      RM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-yellowWarm uppercase tracking-wider font-display">
                        Autonomía Real
                      </p>
                      <p className="text-sm font-semibold">Solidaridad e Interdependencia</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FORMAS DE AUTOGESTIÓN ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-y border-surface-border mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="badge-pill bg-brand-skyLight text-brand-dark mb-2">
                Nuestra Metodología
              </span>
              <h2 className="text-3xl font-extrabold font-display text-brand-dark mb-3">
                ¿Cómo sostenemos la organización?
              </h2>
              <p className="text-surface-muted text-sm sm:text-base font-sans">
                La gran parte de nuestras actividades se hacen posibles con la participación directa y solidaria de quienes integramos la red.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMAS_AUTOGESTION.map((f, i) => (
              <Reveal key={f.id} delay={i * 0.1}>
                <div className="p-6 rounded-3xl bg-surface-light border border-surface-border h-full flex flex-col hover:border-brand-purpleSoft/60 transition-colors">
                  <span className="text-3xl mb-3">{f.emoji}</span>
                  <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{f.titulo}</h3>
                  <p className="text-xs sm:text-sm text-surface-muted leading-relaxed font-sans flex-1">{f.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MISIÓN Y VISIÓN ──────────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="h-full rounded-3xl bg-brand-purpleLight/40 border-2 border-brand-purpleSoft/30 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="badge-pill bg-brand-purple text-white mb-4">
                    Nuestra Misión
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-brand-dark mb-4">
                    ¿Cuál es nuestro propósito?
                  </h3>
                  <p className="text-surface-muted text-sm sm:text-base leading-relaxed font-sans">
                    {MISION_VISION.mision}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-purpleSoft/20 flex items-center gap-2 text-xs font-bold text-brand-purple">
                  <Sparkles size={16} />
                  <span>Por la satisfacción de derechos fundamentales</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="h-full rounded-3xl bg-brand-pinkLight/40 border-2 border-brand-pink/30 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="badge-pill bg-brand-pink text-brand-dark mb-4 font-bold">
                    Nuestra Visión
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-brand-dark mb-4">
                    ¿Qué horizonte soñamos?
                  </h3>
                  <p className="text-surface-muted text-sm sm:text-base leading-relaxed font-sans">
                    {MISION_VISION.vision}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-pink/20 flex items-center gap-2 text-xs font-bold text-brand-dark">
                  <Heart size={16} className="text-brand-pink fill-brand-pink" />
                  <span>Cuidado mutuo, ternura y autonomía</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── LOS 6 OBJETIVOS ESTRATÉGICOS DETALLADOS ────────── */}
      <section className="py-16 sm:py-24 bg-white border-y border-surface-border mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Plan & Acción"
              title={
                <>
                  Nuestros <span className="text-gradient">6 objetivos estratégicos</span>
                </>
              }
              subtitle="Líneas directrices aprobadas por la colectiva para promover el desarrollo integral y la defensa de derechos en Cusco."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJETIVOS_ESTRATEGICOS.map((obj, idx) => {
              const IconComp = ICON_MAP[obj.icono] || ShieldCheck
              return (
                <Reveal key={obj.id} delay={idx * 0.08}>
                  <div className="h-full flex flex-col p-6 rounded-3xl bg-surface-light border border-surface-border hover:border-brand-purple hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-2xl bg-white text-brand-purple flex items-center justify-center shadow-sm border border-brand-purpleSoft/30">
                        <IconComp size={18} />
                      </div>
                      <span className="badge-pill bg-white text-brand-dark border border-gray-200 text-[10px]">
                        Objetivo 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                      {obj.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1 font-sans">
                      {obj.descripcion}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── EQUIPA / EQUIPO COORDINADOR ──────────────────── */}
      <section className="mb-20 sm:mb-28">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Personas & Cuidados"
              title={
                <>
                  Nuestra <span className="text-gradient">equipa</span>
                </>
              }
              subtitle="Activistas y miembres de la comunidad que impulsan las ferias, talleres y la articulación en Cusco."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EQUIPO.map((m, idx) => (
              <Reveal key={m.id} delay={idx * 0.1}>
                <div className="group flex flex-col rounded-3xl bg-white border border-surface-border overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-pink/50 transition-all duration-300">
                  <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={m.foto}
                      alt={m.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-1">
                      {m.nombre}
                    </h3>
                    <p className="text-xs font-bold text-brand-purple mb-3">
                      {m.rol}
                    </p>
                    <p className="text-xs text-surface-muted leading-relaxed flex-1 mb-4 font-sans">
                      {m.bio}
                    </p>

                    <div className="flex gap-2 pt-3 border-t border-gray-100 text-brand-dark/70">
                      {m.redes?.instagram && (
                        <a href={m.redes.instagram} target="_blank" rel="noreferrer" className="hover:text-brand-pink p-1">
                          <FaInstagram size={15} />
                        </a>
                      )}
                      {m.redes?.linkedin && (
                        <a href={m.redes.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-purple p-1">
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

      {/* ── ALIANZAS & REDES ──────────────────────────────── */}
      <section className="py-16 bg-white border-t border-surface-border">
        <Container>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="badge-pill bg-brand-yellowSoft text-brand-dark mb-2">
                Trabajo en Red
              </span>
              <h3 className="text-2xl font-bold font-display text-brand-dark mb-2">
                Articulación y Alianzas
              </h3>
              <p className="text-xs sm:text-sm text-surface-muted font-sans">
                Coordinamos de manera permanente con organizaciones afines, colectivos de mujeres y derechos humanos de Cusco y del país.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {ALIANZAS.map((alianza) => (
                <div
                  key={alianza.id}
                  className="p-5 rounded-3xl bg-surface-light border border-surface-border flex flex-col items-center justify-center text-center hover:border-brand-purpleSoft/40 transition-colors"
                >
                  <span className="font-display font-extrabold text-xl text-brand-purple tracking-wider">
                    {alianza.logoText}
                  </span>
                  <span className="text-xs font-bold text-brand-dark mt-1 font-sans">
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
