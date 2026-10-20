import { motion } from 'framer-motion'
import { ArrowRight, Heart, Sparkles, Calendar, CheckCircle2, ShieldCheck, Eye, FileText, Network } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { IMPACTO_STATS } from '@/config/impacto'
import { HISTORIA_RESUMEN, OBJETIVOS_ESTRATEGICOS, FORMAS_AUTOGESTION } from '@/config/nosotros'
import { useCounter } from '@/hooks/useCounter'

function StatCounter({ valor, sufijo = '', etiqueta }: { valor: number; sufijo?: string; etiqueta: string }) {
  const { count, ref } = useCounter({ end: valor, duration: 2000 })
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center p-4">
      <span className="font-display font-black text-3xl sm:text-4xl text-brand-purple tracking-tight">
        {count}{sufijo}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-brand-dark/80 mt-1 font-sans">{etiqueta}</span>
    </div>
  )
}

const ICON_MAP: Record<string, React.ElementType> = {
  Heart,
  FileText,
  Eye,
  Sparkles,
  Users: ShieldCheck,
  Network,
}

export default function Home() {
  const noticiasPreview = NOTICIAS.slice(0, 3)
  const proyectosPreview = PROGRAMAS.slice(0, 3)

  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-skyLight/30 via-white to-brand-pinkLight/20 py-16 sm:py-24">
        {/* Glows suaves con colores trans y no binarios */}
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-sky/20 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-brand-yellowSoft/40 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Texto Principal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-brand-purpleSoft/30 px-4 py-1.5 text-xs font-bold text-brand-purple shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-brand-pink animate-pulse" />
                Cusco · Desde el {HISTORIA_RESUMEN.fundacion}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-brand-dark leading-[1.15] text-balance mb-6"
              >
                Autogestión, arte y{' '}
                <span className="text-gradient">apoyo mutuo</span> en Cusco
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-surface-muted leading-relaxed max-w-xl mb-8 font-sans"
              >
                Una red comunitaria donde la diversidad LGTBIQ+ y mujeres construyen sus emprendimientos, venden su artivismo y defienden sus derechos desde la solidaridad y la interdependencia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3.5"
              >
                <Button href="/quienes-somos" size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                  Conoce nuestra historia
                </Button>
                <Button href="/proyectos" size="lg" variant="secondary">
                  Ferias & Proyectos
                </Button>
              </motion.div>
            </div>

            {/* Fotografía / Composición Visual con marco suave */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Comunidad Resiste Marika Cusco"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="badge-pill bg-brand-yellowWarm text-brand-dark mb-2">
                      Economía Solidaria
                    </span>
                    <p className="font-display font-bold text-lg leading-tight">
                      Espacios seguros donde florece el emprendimiento y el artivismo
                    </p>
                  </div>
                </div>

                {/* Badge Flotante tierno */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 rounded-2xl bg-white border border-brand-purpleSoft/30 p-4 shadow-xl flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-brand-purpleLight text-brand-purple flex items-center justify-center font-bold text-xl">
                    🏳️‍⚧️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider font-display">
                      Resistencia Autónoma
                    </p>
                    <p className="text-[11px] text-surface-muted font-medium">
                      Sostenido con rifas, ferias y arte
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MANIFIESTO REAL: SOLIDARIDAD FRENTE A DEPENDENCIAS ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-surface-border">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge-pill bg-brand-pinkLight text-brand-purple border border-brand-pink/30 mb-4">
                Nuestra Fortaleza Comunitaria
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-dark mb-6 leading-tight">
                "Nuestra fuerza más grande es la solidaridad y la interdependencia"
              </h2>
              <p className="text-base sm:text-lg text-surface-muted leading-relaxed font-sans mb-8">
                {HISTORIA_RESUMEN.parrafo2}
              </p>
              <div className="p-4 rounded-2xl bg-brand-purpleLight/40 border border-brand-purpleSoft/20 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-purple">
                <Heart size={16} className="text-brand-pink fill-brand-pink shrink-0" />
                <span>Cada miembro aporta con cuotas, rifas, ferias, talleres y artivismo.</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LAS 4 FORMAS DE AUTOGESTIÓN ────────────────────── */}
      <section className="py-16 sm:py-24 bg-surface-light">
        <Container>
          <Reveal>
            <SectionHeader
              pill="¿Cómo lo hacemos?"
              title={
                <>
                  Autogestión en <span className="text-gradient">acción cotidiana</span>
                </>
              }
              subtitle="El trabajo colectivo nos permite sostener nuestras actividades sin depender de terceros ni comprometer nuestra autonomía."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMAS_AUTOGESTION.map((forma, idx) => (
              <Reveal key={forma.id} delay={idx * 0.1}>
                <div className="h-full flex flex-col p-6 rounded-3xl bg-white border border-surface-border shadow-sm hover:shadow-md hover:border-brand-purpleSoft/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{forma.emoji}</div>
                  <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                    {forma.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1 font-sans">
                    {forma.descripcion}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CIFRAS DE IMPACTO CUSCO ───────────────────────── */}
      <section className="py-14 bg-brand-dark text-white relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-transparent to-brand-sky/20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACTO_STATS.map((stat) => (
              <div key={stat.etiqueta} className="text-center p-3">
                <StatCounter valor={stat.valor} sufijo={stat.sufijo} etiqueta={stat.etiqueta} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MISIÓN Y LOS 6 OBJETIVOS ESTRATÉGICOS ─────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Misión & Objetivos Institucionales"
              title={
                <>
                  Hacia dónde <span className="text-gradient">caminamos juntes</span>
                </>
              }
              subtitle="Nuestros 6 compromisos estratégicos para transformar las condiciones de vida de la comunidad LGBTIQ+ y mujeres en Cusco."
              className="mb-14 text-center max-w-2xl mx-auto"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJETIVOS_ESTRATEGICOS.map((obj, i) => {
              const IconComp = ICON_MAP[obj.icono] || CheckCircle2
              return (
                <Reveal key={obj.id} delay={i * 0.08}>
                  <div className="h-full flex flex-col p-6 rounded-3xl bg-brand-purpleLight/20 border border-brand-purpleSoft/25 hover:border-brand-purple hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-2xl bg-white text-brand-purple flex items-center justify-center shadow-sm border border-brand-purpleSoft/30">
                        <IconComp size={20} />
                      </div>
                      <span className="badge-pill bg-brand-pinkLight text-brand-purple text-[10px]">
                        {obj.tag}
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

      {/* ── PROYECTOS EN MARCHA ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-surface-light border-y border-surface-border">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="badge-pill bg-brand-skyLight text-brand-dark mb-2 block w-fit">
                  Nuestras Acciones
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark">
                  Proyectos en Cusco
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
                <div className="group h-full flex flex-col rounded-3xl bg-white border border-surface-border overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-purpleSoft/50 transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={prog.imagen}
                      alt={prog.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 badge-pill bg-white/95 text-brand-purple text-[10px] shadow-sm font-bold">
                      {prog.categoria}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-purple transition-colors mb-2">
                      {prog.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-muted leading-relaxed flex-1 line-clamp-3 mb-4 font-sans">
                      {prog.descripcion}
                    </p>
                    <div className="pt-3 border-t border-gray-100">
                      <Button href="/proyectos" variant="ghost" size="sm" className="p-0 hover:bg-transparent text-brand-purple font-bold">
                        Conocer más →
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ÚLTIMAS NOTICIAS ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="badge-pill bg-brand-pinkLight text-brand-purple mb-2 block w-fit">
                  Prensa & Registro
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark">
                  Actividades recientes
                </h2>
              </div>
              <Button href="/noticias" variant="outline" size="sm" icon={<ArrowRight size={15} />}>
                Ver archivo completo
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticiasPreview.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.1}>
                <article className="group h-full flex flex-col rounded-3xl bg-surface-light border border-surface-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-2.5">
                    <div className="flex items-center gap-2 text-xs text-surface-muted font-sans">
                      <span className="flex items-center gap-1 font-bold text-brand-purple">
                        <Calendar size={12} />
                        {n.fecha}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-purple transition-colors line-clamp-2">
                      {n.titulo}
                    </h3>

                    <p className="text-xs text-surface-muted leading-relaxed flex-1 line-clamp-2 font-sans">
                      {n.resumen}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BANNER FINAL CONTACTO ────────────────────────── */}
      <section className="py-16 sm:py-24 bg-surface-light">
        <Container>
          <Reveal>
            <div className="rounded-4xl bg-brand-dark text-white p-10 sm:p-16 text-center relative overflow-hidden shadow-xl border border-white/10">
              <div aria-hidden="true" className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-brand-pink/20 blur-3xl pointer-events-none" />
              <div aria-hidden="true" className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-brand-sky/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="badge-pill bg-brand-yellowWarm text-brand-dark mb-4">
                  Súmate a la Red en Cusco
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
                  Construyamos economía solidaria y espacios seguros
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 font-sans">
                  ¿Tienes un emprendimiento, haces arte, quieres compartir un taller o sumar tu voz a la vigilancia de políticas públicas en Cusco? Escríbenos.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contacto" size="lg" variant="secondary">
                    Escríbenos un mensaje
                  </Button>
                  <Button href="/proyectos" size="lg" variant="accent">
                    Ver nuestras ferias
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
