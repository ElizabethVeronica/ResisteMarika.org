import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users, Sparkles, Calendar, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROGRAMAS } from '@/config/programas'
import { IMPACTO_STATS } from '@/config/impacto'
import { NOTICIAS } from '@/config/noticias'
import { useCounter } from '@/hooks/useCounter'

// ── Contador animado ──────────────────────────────────────
function StatCounter({ valor, sufijo = '', etiqueta }: { valor: number; sufijo?: string; etiqueta: string }) {
  const { count, ref } = useCounter({ end: valor, duration: 2000 })
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-bold font-display text-gradient sm:text-5xl">
        {count}{sufijo}
      </span>
      <span className="text-xs sm:text-sm text-surface-300/80 font-medium">{etiqueta}</span>
    </div>
  )
}

export default function Home() {
  const noticiasPreview = NOTICIAS.slice(0, 3)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-surface-950 py-16 lg:py-24">
        {/* Glows de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[550px] w-[550px] rounded-full bg-primary-700/20 blur-[130px]" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-600/15 blur-[110px]"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Texto y CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-300"
              >
                <Heart size={14} fill="currentColor" className="text-accent-400" />
                Asociación Civil Sin Fines de Lucro
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl font-bold font-display leading-[1.15] text-balance sm:text-5xl lg:text-6xl text-surface-50"
              >
                Resistir con dignidad,{' '}
                <span className="text-gradient">construir en comunidad</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 max-w-xl text-base text-surface-300/80 leading-relaxed sm:text-lg"
              >
                Organización dedicada a la defensa de los derechos humanos, el acompañamiento psicosocial, la formación política y la contención integral de la diversidad LGBTIQ+.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button href="/programas" size="lg" icon={<ArrowRight size={18} />}>
                  Explorar programas
                </Button>
                <Button href="/colabora" size="lg" variant="outline" icon={<Users size={18} />}>
                  Sumarme al voluntariado
                </Button>
              </motion.div>
            </div>

            {/* Fotografía de portada (Stock Unsplash) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] sm:aspect-[1/1] rounded-2xl overflow-hidden border border-surface-800 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Comunidad Resiste Marika"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-surface-100">
                    <p className="text-xs uppercase font-semibold text-primary-300 tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles size={13} />
                      Espacio Seguro & Afirmativo
                    </p>
                    <p className="text-sm font-medium">Acompañamiento legal, psicológico y comunitario libre de barreras.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CONTADORES DE IMPACTO ─────────────────────────── */}
      <section className="border-y border-surface-800/60 bg-surface-900/60 py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {IMPACTO_STATS.map((stat) => (
              <StatCounter key={stat.etiqueta} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROPÓSITO & RESUMEN DE MISIÓN ─────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <SectionHeader
                  pill="Quiénes somos"
                  title={
                    <>
                      La resistencia es <span className="text-gradient">colectiva y situada</span>
                    </>
                  }
                  subtitle="Trabajamos para que cada persona de la diversidad sexual y de género cuente con respaldo institucional, acceso a derechos plenos y redes afectivas de protección."
                  align="left"
                />
                <p className="mt-6 text-sm sm:text-base text-surface-300/80 leading-relaxed">
                  Desde nuestros inicios apostamos por la defensa jurídica interseccional y la salud comunitaria, facilitando espacios de escucha, capacitación en escuelas y monitoreo de políticas públicas.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/nosotros" variant="primary">
                    Conoce más sobre nuestra historia
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal direction="right" delay={0.2}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-surface-800 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
                    alt="Acción colectiva"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROGRAMAS Y ACCIONES (PREVIEW) ────────────────── */}
      <section className="py-20 sm:py-28 bg-surface-900/40 border-y border-surface-800/60">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Líneas de Trabajo"
              title={
                <>
                  Nuestros <span className="text-gradient">programas activos</span>
                </>
              }
              subtitle="Desarrollamos proyectos integrales organizados en cuatro ejes estratégicos de intervención social."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMAS.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 0.1}>
                <div className="group flex flex-col h-full rounded-xl border border-surface-800 bg-surface-900 overflow-hidden hover:border-primary-500/40 transition-colors">
                  <div className="aspect-[16/10] overflow-hidden bg-surface-800 relative">
                    <img
                      src={prog.imagen}
                      alt={prog.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-surface-950/80 backdrop-blur-md border border-surface-700 px-2 py-0.5 text-[10px] font-medium text-primary-300">
                      {prog.categoria}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-surface-50 text-base mb-2 group-hover:text-primary-300 transition-colors">
                      {prog.titulo}
                    </h3>
                    <p className="text-xs text-surface-300/70 leading-relaxed flex-1 line-clamp-3">
                      {prog.descripcion}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-12 flex justify-center">
            <Button href="/programas" variant="outline" icon={<ArrowRight size={16} />}>
              Ver detalles de todos los programas
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ── ÚLTIMAS NOTICIAS Y COMUNICADOS ─────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2 block">
                  Prensa & Publicaciones
                </span>
                <h2 className="text-3xl font-bold font-display text-surface-50">
                  Últimos comunicados y novedades
                </h2>
              </div>
              <Button href="/noticias" variant="ghost" size="sm" icon={<ArrowRight size={15} />}>
                Ver todo el archivo
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {noticiasPreview.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.1}>
                <article className="group h-full flex flex-col rounded-xl border border-surface-800 bg-surface-900 overflow-hidden hover:border-primary-500/40 transition-colors">
                  <div className="aspect-[16/10] overflow-hidden bg-surface-800">
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-2.5">
                    <div className="flex items-center gap-3 text-xs text-surface-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {n.fecha}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {n.tiempoLectura}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-surface-50 group-hover:text-primary-300 transition-colors line-clamp-2">
                      {n.titulo}
                    </h3>

                    <p className="text-xs text-surface-300/70 leading-relaxed flex-1 line-clamp-2">
                      {n.resumen}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BANNER CTA: COLABORA ──────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 via-primary-950 to-surface-950 border border-primary-500/40 p-10 sm:p-16 text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="h-[280px] w-[280px] rounded-full bg-accent-600/20 blur-[90px]" />
              </div>
              <div className="relative z-10">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary-300">
                  Participación Activa
                </span>
                <h2 className="mb-4 text-3xl font-bold font-display text-white sm:text-4xl text-balance">
                  ¿Quieres formar parte del cambio?
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-surface-200/80 text-sm sm:text-base leading-relaxed">
                  Súmate a nuestro equipo de voluntariado, apoya mediante una donación o articulemos alianzas institucionales para amplificar el impacto.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/colabora" size="lg" variant="secondary">
                    Quiero colaborar
                  </Button>
                  <Button href="/contacto" size="lg" variant="outline">
                    Contactar al equipo
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
