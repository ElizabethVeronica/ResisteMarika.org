import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { HISTORIA_RESUMEN } from '@/config/nosotros'
import EngagementPaths from '@/components/sections/EngagementPaths'

const HERO_PHOTOS = [
  {
    src: `${import.meta.env.BASE_URL}images/marcha 8M 2025.webp`,
    alt: 'Integrantes de Resiste Marika en la marcha del 8M de 2025 en Cusco',
  },
  {
    src: `${import.meta.env.BASE_URL}images/marcha del 8M 2024.webp`,
    alt: 'Integrantes de Resiste Marika marchando con tambores en Cusco en 2024',
  },
  {
    src: `${import.meta.env.BASE_URL}images/marcha del orgullo 2025.webp`,
    alt: 'Integrantes de Resiste Marika en la Marcha del Orgullo de Cusco en 2025',
  },
]

export default function Home() {
  const noticiasPreview = NOTICIAS.slice(0, 3)
  const proyectosPreview = PROGRAMAS.slice(0, 3)
  const [activeHeroPhoto, setActiveHeroPhoto] = useState(0)
  const [heroPhotoDirection, setHeroPhotoDirection] = useState<'next' | 'previous'>('next')
  const touchStartX = useRef<number | null>(null)

  const showNextHeroPhoto = () => {
    setHeroPhotoDirection('next')
    setActiveHeroPhoto((current) => Math.min(current + 1, HERO_PHOTOS.length - 1))
  }

  const showPreviousHeroPhoto = () => {
    setHeroPhotoDirection('previous')
    setActiveHeroPhoto((current) => Math.max(current - 1, 0))
  }

  return (
    <div className="page-art-backdrop bg-[#FAF9F6] text-gray-900">
      <section className="page-section relative flex flex-col justify-between overflow-hidden">
        <div className="my-auto w-full py-6 sm:py-10">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-7">
                <div className="relative isolate overflow-hidden rounded-3xl border border-gray-200/80 bg-white/95 p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#211d2a]/95">
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo png.webp`}
                    alt=""
                    aria-hidden="true"
                    className="home-hero-logo home-hero-logo--light"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo inverso.webp`}
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
              </Reveal>

              <Reveal className="lg:col-span-5" delay={0.1}>
                <div
                  className="home-hero-gallery group relative aspect-[4/3] touch-pan-y overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md"
                  role="region"
                  aria-label="Fotografías de las marchas de Resiste Marika"
                  aria-roledescription="carrusel"
                  onPointerDown={(event) => {
                    if (event.pointerType === 'touch') touchStartX.current = event.clientX
                  }}
                  onPointerUp={(event) => {
                    if (touchStartX.current === null) return

                    const swipeDistance = event.clientX - touchStartX.current
                    touchStartX.current = null
                    if (swipeDistance > 50) showPreviousHeroPhoto()
                    else if (swipeDistance < -50) showNextHeroPhoto()
                  }}
                  onPointerCancel={() => {
                    touchStartX.current = null
                  }}
                >
                  <img
                    key={HERO_PHOTOS[activeHeroPhoto].src}
                    src={HERO_PHOTOS[activeHeroPhoto].src}
                    alt={HERO_PHOTOS[activeHeroPhoto].alt}
                    fetchPriority={activeHeroPhoto === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className={`h-full w-full object-cover home-hero-gallery__image--${heroPhotoDirection}`}
                  />
                  <button
                    type="button"
                    onClick={showPreviousHeroPhoto}
                    disabled={activeHeroPhoto === 0}
                    aria-label="Ver fotografía anterior"
                    className="home-hero-gallery__arrow home-hero-gallery__arrow--previous"
                  >
                    <ArrowLeft size={20} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextHeroPhoto}
                    disabled={activeHeroPhoto === HERO_PHOTOS.length - 1}
                    aria-label="Ver fotografía siguiente"
                    className="home-hero-gallery__arrow home-hero-gallery__arrow--next"
                  >
                    <ArrowRight size={20} aria-hidden="true" />
                  </button>
                  <span className="sr-only" aria-live="polite" aria-atomic="true">
                    Fotografía {activeHeroPhoto + 1} de {HERO_PHOTOS.length}
                  </span>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/25 to-transparent px-4 pb-2 pt-6">
                    <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
                      <div className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-transparent via-brand-purple/40 to-brand-purple/70" />
                      <div
                        className="home-hero-gallery__indicator flex items-center gap-1 rounded-full border border-brand-purple/25 bg-white/95 px-2.5 py-1.5 shadow-xs dark:bg-[#211d2a]"
                        role="img"
                        aria-label={`Fotografía ${activeHeroPhoto + 1} de ${HERO_PHOTOS.length}`}
                      >
                        {HERO_PHOTOS.map((photo, index) => (
                          <span key={photo.src} className="home-hero-gallery__dot-slot" aria-hidden="true">
                            {activeHeroPhoto === index && (
                              <span
                                className={`home-hero-gallery__dot ${
                                  ['bg-brand-sky', 'bg-brand-pink', 'bg-brand-purple'][index]
                                }`}
                              />
                            )}
                          </span>
                        ))}
                      </div>
                      <div className="h-0.5 flex-1 rounded-full bg-gradient-to-l from-transparent via-brand-purple/40 to-brand-purple/70" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

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
            {proyectosPreview.map((prog, index) => (
              <Reveal key={prog.id} className="h-full" delay={Math.min(index * 0.08, 0.24)}>
                <div className="graphic-card group flex h-full flex-col rounded-2xl border border-gray-200 bg-white/90 shadow-sm dark:bg-[#211d2a]/90">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                    <img
                      src={prog.imagen}
                      alt={prog.titulo}
                      loading="lazy"
                      decoding="async"
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
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex justify-center">
              <Button href="/proyectos" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Ver todos los proyectos
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <EngagementPaths />

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
            {noticiasPreview.map((n, index) => (
              <Reveal key={n.id} className="h-full" delay={Math.min(index * 0.08, 0.24)}>
                <article className="graphic-card flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-sm dark:bg-[#211d2a]/95">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-1 flex-col gap-2">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-gray-500">
                      <Calendar size={13} /> {n.fecha}
                    </span>
                    <h3 className="line-clamp-2 font-display text-base font-bold text-gray-900">
                      {n.titulo}
                    </h3>
                    <p className="line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-gray-600">
                      {n.resumen}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section page-section--photo home-network-cta relative isolate overflow-hidden border-y border-white/10 py-16 sm:py-20">
        <img
          src={`${import.meta.env.BASE_URL}images/Marika Fest 2024 - Productos de conscientización.webp`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="photo-section__overlay" />
        <Container>
          <Reveal>
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
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
