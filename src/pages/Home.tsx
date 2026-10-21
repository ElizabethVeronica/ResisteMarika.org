import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Heart, FileText, Eye, Sparkles, Users, Network, Calendar } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { HISTORIA_RESUMEN, OBJETIVOS_ESTRATEGICOS, FORMAS_AUTOGESTION, DISCIPLINAS } from '@/config/nosotros'
import EngagementPaths from '@/components/sections/EngagementPaths'

const ICON_MAP: Record<string, React.ElementType> = {
  Heart,
  FileText,
  Eye,
  Sparkles,
  Users,
  Network,
}

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

              {/* Lema directo tomado de sus propias palabras */}
              <p className="text-xl sm:text-2xl font-bold font-display text-brand-purple leading-snug mb-6 border-l-4 border-brand-purple pl-4">
                {HISTORIA_RESUMEN.declaracionInicial}
              </p>

              {/* Quiénes somos y origen en primera persona plural */}
              <div className="space-y-4 text-base sm:text-lg text-gray-700 font-sans leading-relaxed mb-8">
                <p>
                  {HISTORIA_RESUMEN.parrafo1}
                </p>
                <p className="text-gray-600">
                  {HISTORIA_RESUMEN.pilarArtes}
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

            {/* Columna Lateral: Tarjeta con Fotografía Real */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-display">
                    Nuestra Batucada en las Calles
                  </span>
                  <h2 className="font-display font-black text-xl text-gray-900 mt-0.5">
                    Marcha 8M Cusco con Tambores Propios
                  </h2>
                </div>

                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 border border-gray-200 relative group">
                  <img
                    src="/images/marcha 8M 2025.png"
                    alt="Marcha de Resiste Marika Cusco con tambores"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-gray-900/85 backdrop-blur-sm text-white p-3 rounded-lg text-xs font-sans">
                    <p className="font-bold font-display text-brand-yellowWarm">
                      Batucada LGTBIQ+ Cusco
                    </p>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Performando y marchando en las calles del Cusco haciendo activismo.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-gray-700 font-sans space-y-1">
                  <p className="font-bold text-gray-900 font-display">
                    Autogestión colectiva
                  </p>
                  <p className="text-gray-600 text-xs">
                    Nos sostenemos de manera autónoma con rifas, ferias, artivismo, talleres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <EngagementPaths />

      {/* ── MANIFIESTO Y AUTOGESTIÓN ────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display mb-2 block">
                Nuestra Fortaleza Colectiva
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mb-5 leading-tight">
                La autogestión, el arte y la ternura
              </h2>

              <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed mb-6">
                {HISTORIA_RESUMEN.parrafo2}
              </p>

            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LAS 4 FORMAS DE AUTOGESTIÓN ────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Autonomía Colectiva
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mt-1">
                Cómo hacemos posible nuestras actividades
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMAS_AUTOGESTION.map((forma) => (
              <div
                key={forma.id}
                className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                    {forma.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {forma.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── EL SEGUNDO PILAR: LAS ARTES PARA HACER ACTIVISMO ─ */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block">
                Segundo Pilar Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                El uso de las artes para hacer activismo
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed">
                {HISTORIA_RESUMEN.pilarArtes}
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                {HISTORIA_RESUMEN.disciplinasArtisticas}
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed font-semibold text-brand-purple">
                {HISTORIA_RESUMEN.talleresMultidisciplinarios}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/9] bg-gray-100">
                <img
                  src="/images/taller de batucada.jpg"
                  alt="Taller de batucada y ensayo en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {DISCIPLINAS.map((d) => (
                  <div
                    key={d.nombre}
                    className="p-4 rounded-xl bg-[#FAF9F6] border border-gray-200 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-display font-bold text-sm text-gray-900 mb-1">
                        {d.nombre}
                      </h3>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        {d.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── QUÉ BUSCAMOS Y HACEMOS: OBJETIVOS ESTRATÉGICOS ─── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Misión y Visión
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-1 mb-3">
                Nuestros Objetivos Fundamentales
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-sans">
                Compromisos que guían nuestro activismo y trabajo colectivo en Cusco.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJETIVOS_ESTRATEGICOS.map((obj) => {
              const IconComp = ICON_MAP[obj.icono] || ShieldCheck
              return (
                <div
                  key={obj.id}
                  className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-black text-2xl text-gray-300">
                        {obj.numero}
                      </span>
                      <IconComp size={18} className="text-brand-purple" />
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                      {obj.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                      {obj.descripcion}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/quienes-somos#mision-vision" variant="outline" size="sm">
              Conoce en detalle nuestra misión y visión
            </Button>
          </div>
        </Container>
      </section>

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
              <Button href="/proyectos" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                Ver todos los proyectos
              </Button>
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
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans flex-1 line-clamp-3">
                    {prog.descripcion}
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Link
                      to="/proyectos"
                      className="text-xs sm:text-sm font-bold text-brand-purple hover:underline inline-flex items-center gap-1"
                    >
                      Más información <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
              Escríbenos a nuestro correo oficial <span className="text-brand-purple font-semibold underline">resistemarik@gmail.com</span> o contáctanos por Instagram y TikTok.
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
