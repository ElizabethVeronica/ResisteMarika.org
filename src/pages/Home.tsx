import { motion } from 'framer-motion'
import { ArrowRight, Heart, Shield, BookOpen, Users, Megaphone, Download, Calendar, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { IMPACTO_STATS } from '@/config/impacto'
import { useCounter } from '@/hooks/useCounter'

function StatCounter({ valor, sufijo = '', etiqueta }: { valor: number; sufijo?: string; etiqueta: string }) {
  const { count, ref } = useCounter({ end: valor, duration: 2000 })
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center p-4">
      <span className="font-impact text-4xl sm:text-5xl text-brand-purple tracking-tight">
        {count}{sufijo}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1">{etiqueta}</span>
    </div>
  )
}

export default function Home() {
  const noticiasPreview = NOTICIAS.slice(0, 3)
  const proyectosPreview = PROGRAMAS.slice(0, 3)

  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-brand-light py-16 sm:py-24">
        {/* Círculos decorativos suaves de fondo */}
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-cyan/15 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-brand-magenta/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Texto Principal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 text-xs font-bold text-brand-purple uppercase tracking-wider"
              >
                <Heart size={13} fill="currentColor" className="text-brand-magenta" />
                Asociación Civil Sin Fines de Lucro
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-brand-dark leading-[1.15] text-balance mb-6"
              >
                Defendemos los derechos,{' '}
                <span className="text-gradient">construimos en comunidad</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-surface-muted leading-relaxed max-w-xl mb-8"
              >
                Somos una organización civil comprometida con la dignidad, el acompañamiento psicosocial, la defensa jurídica y el bienestar integral de la comunidad LGBTIQ+.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button href="/quienes-somos" size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                  Conocer más sobre Resiste Marika
                </Button>
                <Button href="/proyectos" size="lg" variant="outline">
                  Ver proyectos
                </Button>
              </motion.div>
            </div>

            {/* Fotografía / Composición Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Comunidad Resiste Marika"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="badge-tag bg-brand-cyan text-brand-dark mb-2">
                      Espacio Libre de Discriminación
                    </span>
                    <p className="font-display font-bold text-lg leading-tight">
                      Acompañamiento, formación y acción colectiva
                    </p>
                  </div>
                </div>

                {/* Badge Flotante */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 rounded-2xl bg-white border border-gray-100 p-4 shadow-xl flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center font-bold text-lg">
                    ✊
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Resistencia & Cuidados
                    </p>
                    <p className="text-[11px] text-surface-muted">
                      Comunidad activa y articulada
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LÍNEAS DE ACCIÓN (COLOR-BLOCKING AL ESTILO SER VALIENTE EN RED) ── */}
      <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Áreas de Trabajo"
              title={
                <>
                  Nuestras <span className="text-gradient">líneas de acción</span>
                </>
              }
              subtitle="Intervenimos desde la formación, la investigación, la salud colectiva y la incidencia política con enfoque de derechos humanos."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Defensa de Derechos & Legal',
                desc: 'Asesoría y acompañamiento ante vulneraciones de derechos y discriminación.',
                badgeColor: 'bg-brand-purple/10 text-brand-purple',
                borderHover: 'hover:border-brand-purple',
              },
              {
                icon: BookOpen,
                title: 'Educación & Formación',
                desc: 'Talleres, escuelas de liderazgo y herramientas pedagógicas comunitarias.',
                badgeColor: 'bg-brand-magenta/10 text-brand-magenta',
                borderHover: 'hover:border-brand-magenta',
              },
              {
                icon: Users,
                title: 'Comunidad & Salud Mental',
                desc: 'Círculos de escucha, terapias afirmativas y espacios seguros de encuentro.',
                badgeColor: 'bg-brand-cyan/20 text-brand-dark',
                borderHover: 'hover:border-brand-cyan',
              },
              {
                icon: Megaphone,
                title: 'Incidencia Política & Datos',
                desc: 'Monitoreo de políticas públicas, informes temáticos y diálogo institucional.',
                badgeColor: 'bg-brand-peach/30 text-brand-dark',
                borderHover: 'hover:border-brand-peach',
              },
            ].map((linea, idx) => {
              const Icon = linea.icon
              return (
                <Reveal key={linea.title} delay={idx * 0.1}>
                  <div
                    className={`h-full flex flex-col p-6 rounded-2xl bg-brand-light border-2 border-transparent transition-all duration-300 shadow-sm hover:shadow-md ${linea.borderHover}`}
                  >
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${linea.badgeColor}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                      {linea.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1">
                      {linea.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CIFRAS DE IMPACTO Y CONTEXTO (ESTILO SER VALIENTE EN RED) ── */}
      <section className="py-16 sm:py-24 bg-brand-dark text-white relative overflow-hidden">
        <Container className="relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="badge-tag bg-brand-cyan text-brand-dark mb-3">
                Cifras de Impacto & Realidad
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
                Por qué es urgente seguir resistiendo
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                El trabajo de Resiste Marika responde a una realidad documentada de brechas de derechos, violencia por prejuicio y necesidad de protección comunitaria.
              </p>
            </div>
          </Reveal>

          {/* Grid de Contadores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/10 backdrop-blur-sm">
            {IMPACTO_STATS.map((stat) => (
              <StatCounter key={stat.etiqueta} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROYECTOS DESTACADOS ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="badge-tag bg-brand-magenta/10 text-brand-magenta mb-2 block w-fit">
                  Nuestra Incidencia
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark">
                  Proyectos en marcha
                </h2>
              </div>
              <Button href="/proyectos" variant="outline" size="sm" icon={<ArrowRight size={15} />}>
                Ver todos los proyectos
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proyectosPreview.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 0.1}>
                <div className="group h-full flex flex-col rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-purple/40 transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={prog.imagen}
                      alt={prog.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 badge-tag bg-brand-dark text-white text-[10px]">
                      {prog.categoria}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-magenta transition-colors mb-2">
                      {prog.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1 line-clamp-3 mb-4">
                      {prog.descripcion}
                    </p>
                    <div className="pt-3 border-t border-gray-100">
                      <Button href="/proyectos" variant="ghost" size="sm" className="p-0 hover:bg-transparent text-brand-purple font-bold">
                        Conocer proyecto →
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── GUÍA / RECURSO DESCARGABLE DESTACADO (AL ESTILO SER VALIENTE EN RED) ── */}
      <section className="py-16 bg-gradient-to-r from-brand-purple via-brand-deep to-brand-dark text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="badge-tag bg-brand-cyan text-brand-dark mb-3">
                Publicación Abierta
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight mb-3">
                Guía de Derechos, Acompañamiento y Espacios Seguros
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Un documento de consulta gratuita con protocolos de actuación frente a la discriminación, recomendaciones para la salud mental comunitaria y directorio de aliados.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                href="/contacto"
                variant="accent"
                size="lg"
                icon={<Download size={18} />}
              >
                DESCARGAR GUÍA (PDF)
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── ÚLTIMAS NOTICIAS ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="badge-tag bg-brand-purple/10 text-brand-purple mb-2 block w-fit">
                  Prensa & Artículos
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark">
                  Últimas publicaciones
                </h2>
              </div>
              <Button href="/noticias" variant="outline" size="sm" icon={<ArrowRight size={15} />}>
                Ver todas las noticias
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticiasPreview.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.1}>
                <article className="group h-full flex flex-col rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-2.5">
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

                    <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-magenta transition-colors line-clamp-2">
                      {n.titulo}
                    </h3>

                    <p className="text-xs text-surface-muted leading-relaxed flex-1 line-clamp-2">
                      {n.resumen}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BANNER FINAL CONTACTO / SÚMATE ───────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-dark text-white p-10 sm:p-16 text-center relative overflow-hidden border-4 border-brand-peach">
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="badge-tag bg-brand-cyan text-brand-dark mb-3">
                  Articulación Comunitaria
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
                  Construyamos redes de apoyo y resistencia
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                  Ya sea que requieras acompañamiento, desees participar como voluntarie o tu organización busque articular proyectos conjuntos, estamos para escucharte.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contacto" size="lg" variant="secondary">
                    Contáctanos directamente
                  </Button>
                  <Button href="/proyectos" size="lg" variant="accent">
                    Explorar proyectos
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
