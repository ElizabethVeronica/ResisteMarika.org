import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROGRAMAS } from '@/config/programas'
import { IMPACTO_STATS } from '@/config/impacto'
import { useCounter } from '@/hooks/useCounter'

// ── Contador animado ──────────────────────────────────────
function StatCounter({ valor, sufijo = '', etiqueta }: { valor: number; sufijo?: string; etiqueta: string }) {
  const { count, ref } = useCounter({ end: valor, duration: 2200 })
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center gap-1 text-center">
      <span className="text-4xl font-bold font-display text-gradient sm:text-5xl">
        {count}{sufijo}
      </span>
      <span className="text-sm text-surface-300/70 font-medium">{etiqueta}</span>
    </div>
  )
}

// ── Página Home ───────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-surface-950">
        {/* Fondo decorativo: glow radial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-primary-700/20 blur-[120px]" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]"
        />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300"
            >
              <Heart size={14} fill="currentColor" className="text-accent-400" />
              Asociación Civil Sin Fines de Lucro
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-5xl font-bold font-display leading-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Resistiendo juntes,{' '}
              <span className="text-gradient">construyendo comunidad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg text-surface-200/70 sm:text-xl"
            >
              Somos una organización que trabaja por los derechos, la dignidad
              y el bienestar integral de la comunidad LGBTIQ+ desde la acción
              colectiva y el amor político.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/nosotros" size="lg" icon={<ArrowRight size={18} />}>
                Conoce nuestra misión
              </Button>
              <Button href="/colabora" size="lg" variant="outline">
                Sumate a resistir
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── IMPACTO (Contadores) ──────────────────────────── */}
      <section className="border-y border-surface-800/60 bg-surface-900/50 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {IMPACTO_STATS.map((stat) => (
              <StatCounter key={stat.etiqueta} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── MISIÓN / VISIÓN ───────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <Reveal direction="left">
              <SectionHeader
                pill="Quiénes somos"
                title={<>Nuestra misión es <span className="text-gradient">resistir con amor</span></>}
                subtitle="Trabajamos para que todas las personas LGBTIQ+ puedan vivir con dignidad, libres de violencia y discriminación, en una sociedad que celebre la diversidad."
                align="left"
              />
              <div className="mt-8 flex gap-4">
                <Button href="/nosotros" variant="primary">
                  Saber más
                </Button>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              {/* Placeholder visual — reemplazar con imagen real */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-surface-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏳️‍🌈</div>
                  <p className="text-surface-300/60 text-sm">
                    Foto de la organización
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PROGRAMAS PREVIEW ────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-surface-900/30">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Áreas de trabajo"
              title={<>Nuestros <span className="text-gradient">programas</span></>}
              subtitle="Desde distintas frentes, trabajamos para construir un mundo más justo y diverso."
              className="mb-14"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMAS.map((programa, i) => (
              <Reveal key={programa.id} delay={i * 0.1}>
                <div className="group flex flex-col gap-4 rounded-xl border border-surface-800/60 bg-surface-900 p-6 h-full hover:border-primary-500/40 transition-colors duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400 text-2xl">
                    🔹
                  </div>
                  <h3 className="font-display font-semibold text-surface-50 text-lg group-hover:text-primary-300 transition-colors">
                    {programa.titulo}
                  </h3>
                  <p className="text-sm text-surface-300/65 leading-relaxed flex-1">
                    {programa.descripcion}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-10 flex justify-center">
            <Button href="/programas" variant="outline" icon={<ArrowRight size={16} />}>
              Ver todos los programas
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ── CTA COLABORA ──────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 via-primary-900 to-surface-900 border border-primary-700/30 p-10 sm:p-16 text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="h-[300px] w-[300px] rounded-full bg-accent-600/20 blur-[80px]" />
              </div>
              <div className="relative z-10">
                <p className="mb-3 text-sm font-medium text-primary-300 uppercase tracking-wider">
                  Súmate
                </p>
                <h2 className="mb-4 text-3xl font-bold font-display text-white sm:text-4xl text-balance">
                  La resistencia es colectiva
                </h2>
                <p className="mb-8 max-w-xl mx-auto text-surface-200/70 text-lg">
                  Podés colaborar con nuestro trabajo como voluntarie, donante o aliado institucional.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/colabora" size="lg" variant="secondary">
                    Quiero colaborar
                  </Button>
                  <Button href="/contacto" size="lg" variant="outline">
                    Contactanos
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
