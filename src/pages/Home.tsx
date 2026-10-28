import { ArrowRight, Calendar } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { HISTORIA_RESUMEN } from '@/config/nosotros'
import EngagementPaths from '@/components/sections/EngagementPaths'

export default function Home() {
  const noticiasPreview = NOTICIAS.slice(0, 3)
  const proyectosPreview = PROGRAMAS.slice(0, 3)

  return (
    <div className="page-art-backdrop bg-[#FAF9F6] text-gray-900">
      {/* ── HERO CON FONDO GRÁFICO ANDINO Y ARTIVISTA OSCURO ───── */}
      <section className="relative border-b border-black/40 py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#0e0b17]">
        {/* Elemento gráfico vectorial andino */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='96' height='96' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%239b64bc' stroke-width='1.2'%3E%3Cpath d='M48 0L96 48L48 96L0 48Z'/%3E%3Cpath d='M48 14L82 48L48 82L14 48Z' stroke='%235bc7e9'/%3E%3Cpath d='M48 28L68 48L48 68L28 48Z' stroke='%23ed8eaf'/%3E%3Cpath d='M0 0L24 24M96 0L72 24M96 96L72 72M0 96L24 72'/%3E%3Crect x='43' y='43' width='10' height='10' fill='%23f5b731' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />
        {/* Halos ambientales oscuros y profundos (sin degradado hacia blanco) */}
        <div
          className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-brand-sky/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-brand-pink/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        {/* Capa de opacidad oscura profunda */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#090710]/95 via-[#130f20]/90 to-[#0a0812]/96" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Texto Principal */}
            <div className="relative isolate overflow-hidden rounded-3xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:p-7 dark:border-white/10 dark:bg-[#211d2a]/90 lg:col-span-7">
              <img
                src="/images/logo png.png"
                alt=""
                aria-hidden="true"
                className="home-hero-logo home-hero-logo--light"
              />
              <img
                src="/images/logo inverso.png"
                alt=""
                aria-hidden="true"
                className="home-hero-logo home-hero-logo--dark"
              />
              <div className="relative z-10 flex flex-col items-start">
                <span className="inline-block px-3.5 py-1.5 rounded-md bg-gray-100 text-gray-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 font-display dark:bg-gray-800 dark:text-gray-100">
                  Cusco, Perú · Fundada el {HISTORIA_RESUMEN.fundacion}
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-gray-900 leading-tight tracking-tight mb-5">
                  Resiste Marika
                </h1>

                <p className="text-xl sm:text-2xl font-bold font-display text-brand-purple leading-snug mb-6 border-l-4 border-brand-purple pl-4">
                  {HISTORIA_RESUMEN.sublema}
                </p>

                <div className="mb-8 max-w-2xl">
                  <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
                    Somos una colectiva autoorganizada en Cusco que impulsa espacios de sanación, arte y defensa de derechos para la comunidad LGTBIQ+.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3.5">
                  <Button href="/quienes-somos" size="lg" variant="primary" className="w-full sm:w-auto" icon={<ArrowRight size={18} />}>
                    Quiénes somos y qué hacemos
                  </Button>
                  <Button href="/multimedia" size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver fotos y multimedia
                  </Button>
                </div>
              </div>
            </div>

            {/* Fotografía de la marcha */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/20 group">
                <img
                  src="/images/marcha 8M 2025.png"
                  alt="Marcha de Resiste Marika Cusco con tambores"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── NUESTROS PROYECTOS EN CUSCO ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-white/75 backdrop-blur-xs border-b border-gray-200 relative dark:bg-[#1a1624]/75">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block mb-1">
                  En el Cusco
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900">
                  Nuestros proyectos
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proyectosPreview.map((prog) => (
              <div
                key={prog.id}
                className="graphic-card group flex flex-col rounded-2xl bg-white/90 border border-gray-200 overflow-hidden shadow-sm dark:bg-[#211d2a]/90"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                  <img
                    src={prog.imagen}
                    alt={prog.titulo}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple mb-1 font-display">
                    {prog.categoria}
                  </span>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                    {prog.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans flex-1">
                    {prog.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/proyectos" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Ver todos los proyectos
            </Button>
          </div>
        </Container>
      </section>

      <EngagementPaths />

      {/* ── ACTIVIDADES Y NOTICIAS RECIENTES ──────────────── */}
      <section className="py-16 sm:py-24 bg-transparent border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block mb-1">
                  Registro Colectivo
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900">
                  Actividades y Noticias
                </h2>
              </div>
              <Button href="/noticias" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                Ver archivo de noticias
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticiasPreview.map((n) => (
              <article
                key={n.id}
                className="graphic-card flex flex-col rounded-2xl bg-white/95 border border-gray-200 overflow-hidden shadow-sm dark:bg-[#211d2a]/95"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                  <img src={n.imagen} alt={n.titulo} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-2">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5 font-sans">
                    <Calendar size={13} /> {n.fecha}
                  </span>
                  <h3 className="font-display font-bold text-base text-gray-900 line-clamp-2">
                    {n.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans flex-1 line-clamp-3">
                    {n.resumen}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LLAMADO A ARTICULAR / CONTACTO ─────────────────── */}
      <section className="home-network-cta relative isolate overflow-hidden border-y border-white/10 py-16 sm:py-20">
        <img
          src="/images/Marika Fest 2024 - Productos de conscientización.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-950/90 to-[#1e1330]/92" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-sky font-display mb-2 block">
              Red Colectiva en Cusco
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight mb-4">
              ¿Quieres sumarte, proponer un taller o articular con nosotres?
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-8">
              Escríbenos a nuestro correo oficial{' '}
              <a href="mailto:resistemarik@gmail.com" className="text-brand-sky font-semibold underline">
                resistemarik@gmail.com
              </a>{' '}
              o contáctanos por{' '}
              <a
                href="https://www.instagram.com/resiste.marika.cusco"
                target="_blank"
                rel="noreferrer"
                className="text-brand-pink font-semibold underline hover:text-white transition-colors"
              >
                Instagram
              </a>{' '}
              y{' '}
              <a
                href="https://www.tiktok.com/@resistemarik"
                target="_blank"
                rel="noreferrer"
                className="text-brand-pink font-semibold underline hover:text-white transition-colors"
              >
                TikTok
              </a>.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Button href="/contacto" size="lg" variant="primary">
                Escríbenos un mensaje
              </Button>
              <Button href="/multimedia" size="lg" variant="secondary">
                Ver archivo multimedia
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
