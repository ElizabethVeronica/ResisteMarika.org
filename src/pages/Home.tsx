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
      {/* ── HERO INSTITUCIONAL A PANTALLA COMPLETA ───── */}
      <section className="page-section relative flex flex-col justify-between overflow-hidden">
        {/* Contenedor centralizado vertical y horizontalmente */}
        <div className="my-auto w-full py-6 sm:py-10">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Texto Principal */}
              <div className="relative isolate overflow-hidden rounded-3xl border border-gray-200/80 bg-white/95 p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#211d2a]/95 lg:col-span-7">
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
                  <span className="inline-block px-3.5 py-1.5 rounded-md bg-brand-purpleLight/60 text-brand-purple text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 font-display dark:bg-brand-purple/20 dark:text-purple-300">
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 group">
                  <img
                    src="/images/marcha 8M 2025.png"
                    alt="Marcha de Resiste Marika Cusco con tambores"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Separación decorativa ubicada justo al final del primer viewport */}
        <div className="w-full pb-3 sm:pb-4" aria-hidden="true">
          <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto px-4">
            <div className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-transparent via-brand-purple/20 to-brand-purple/50 dark:via-purple-500/20 dark:to-purple-500/50" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-purple/25 bg-white/90 dark:bg-[#211d2a] shadow-xs">
              <span className="h-2 w-2 rounded-full bg-brand-sky" />
              <span className="h-2 w-2 rounded-full bg-brand-pink" />
              <span className="h-2 w-2 rounded-full bg-brand-purple" />
            </div>
            <div className="h-0.5 flex-1 rounded-full bg-gradient-to-l from-transparent via-brand-purple/20 to-brand-purple/50 dark:via-purple-500/20 dark:to-purple-500/50" />
          </div>
        </div>
      </section>

      {/* ── NUESTROS PROYECTOS EN CUSCO ─────────────────────── */}
      <section className="page-section py-16 sm:py-24 bg-white/75 backdrop-blur-xs border-b border-gray-200 relative dark:bg-[#1a1624]/75">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
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
      <section className="page-section py-16 sm:py-24 bg-transparent border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
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
      <section className="page-section page-section--photo home-network-cta relative isolate overflow-hidden border-y border-white/10 py-16 sm:py-20">
        <img
          src="/images/Marika Fest 2024 - Productos de conscientización.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="photo-section__overlay" />
        <Container>
          <div className="photo-section__content mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight mb-4">
              ¿Quieres sumarte, proponer un taller o articular con nosotres?
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed mb-8">
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
