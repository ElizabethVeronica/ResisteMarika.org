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
    <div className="bg-[#FAF9F6] text-gray-900">
      {/* ── HERO AL ESTILO DERECHOS HUMANOS SIN FRONTERAS ───── */}
      <section className="relative bg-white border-b border-gray-200 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Texto Principal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-block px-3.5 py-1.5 rounded-md bg-gray-100 text-gray-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 font-display">
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
                  Somos una colectiva autoorganizada en Cusco que impulsa espacios de encuentro, arte y defensa de derechos para la comunidad LGTBIQ+.
                </p>
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Button href="/quienes-somos" size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                  Quiénes somos y qué hacemos
                </Button>
                <Button href="/multimedia" size="lg" variant="outline">
                  Ver fotos y multimedia
                </Button>
              </div>
            </div>

            {/* Fotografía de la marcha */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-sm group">
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

      <EngagementPaths />

      {/* ── NUESTRAS FERIAS Y PROYECTOS EN CUSCO ────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block mb-1">
                  En el Cusco
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900">
                  Nuestras Ferias y Proyectos
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proyectosPreview.map((prog) => (
              <div
                key={prog.id}
                className="group flex flex-col rounded-2xl bg-[#FAF9F6] border border-gray-200 overflow-hidden shadow-sm"
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
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans flex-1">
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

      {/* ── ACTIVIDADES Y NOTICIAS RECIENTES ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-gray-200">
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
                className="flex flex-col rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm"
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
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans flex-1 line-clamp-3">
                    {n.resumen}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LLAMADO A ARTICULAR / CONTACTO ─────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-skyLight via-white to-brand-purpleLight border-y border-brand-pinkSoft/60">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display mb-2 block">
              Red Colectiva en Cusco
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-dark leading-tight mb-4">
              ¿Quieres sumarte, proponer un taller o articular con nosotres?
            </h2>
            <p className="text-sm sm:text-base text-surface-muted font-sans leading-relaxed mb-8">
              Escríbenos a nuestro correo oficial{' '}
              <a href="mailto:resistemarik@gmail.com" className="text-brand-purple font-semibold underline">
                resistemarik@gmail.com
              </a>{' '}
              o contáctanos por{' '}
              <a
                href="https://www.instagram.com/resiste.marika.cusco"
                target="_blank"
                rel="noreferrer"
                className="text-brand-purple font-semibold underline hover:text-brand-pink transition-colors"
              >
                Instagram
              </a>{' '}
              y{' '}
              <a
                href="https://www.tiktok.com/@resistemarik"
                target="_blank"
                rel="noreferrer"
                className="text-brand-purple font-semibold underline hover:text-brand-pink transition-colors"
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
