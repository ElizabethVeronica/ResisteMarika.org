import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Heart, FileText, Eye, Sparkles, Users, Network, Calendar, Flame } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { PROGRAMAS } from '@/config/programas'
import { NOTICIAS } from '@/config/noticias'
import { HISTORIA_RESUMEN, OBJETIVOS_ESTRATEGICOS } from '@/config/nosotros'

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
      {/* ── HERO INSTITUCIONAL ───────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200 py-16 sm:py-24">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Texto de Cabecera */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-3.5 py-1 text-xs font-semibold text-gray-700">
                <span className="h-2 w-2 rounded-full bg-brand-purple" />
                Cusco · Fundada el {HISTORIA_RESUMEN.fundacion}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display text-gray-900 leading-[1.15] text-balance mb-5">
                Las artes nos devuelven el poder para resistir en el Cusco
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mb-4 font-sans font-medium">
                {HISTORIA_RESUMEN.declaracionInicial}
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-8 font-sans">
                Red de apoyo mutuo y autogestión donde la comunidad LGTBIQ+ y mujeres organizan ferias, marchan con batucada propia, comparten talleres y defienden sus derechos sin depender de financiamientos que condicionen su lucha.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href="/quienes-somos" size="lg" variant="primary" icon={<ArrowRight size={17} />}>
                  Conoce nuestra historia
                </Button>
                <Button href="/proyectos" size="lg" variant="secondary">
                  Ferias y Proyectos
                </Button>
              </div>
            </div>

            {/* Tarjeta de Resumen Institucional y Fotografía */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl overflow-hidden p-3 shadow-sm">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Comunidad Resiste Marika Cusco"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      Segundo Pilar Institucional
                    </span>
                    <p className="font-display font-bold text-base leading-tight mt-0.5">
                      Batucada LGTBIQ+ y artivismo callejero
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <Flame size={15} className="text-brand-purple shrink-0" />
                    <span>8 de Marzo del 2024: Tambores propios en las calles del Cusco</span>
                  </div>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    Nuestros miembros son escritores, ilustradores, actores, escultores, músicos, tejedores, danzantes y arte terapeutas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MANIFIESTO: SOLIDARIDAD FRENTE A DEPENDENCIAS ──── */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display mb-2 block">
                Nuestra Fortaleza Comunitaria
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mb-6 leading-tight">
                "Nuestra fortaleza más grande es la solidaridad y la interdependencia"
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-8">
                {HISTORIA_RESUMEN.parrafo2}
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                <span className="text-brand-purple font-bold">Autogestión real:</span>
                <span>Cuotas de integrantes · Rifas solidarias · Ferias de arte · Talleres · Mercancía de artivismo</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── LOS DOS PILARES INSTITUCIONALES ───────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Bases de Acción
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mt-2">
                Los dos pilares de Resiste Marika
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pilar 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-gray-400 font-display">
                  Pilar 01
                </span>
                <h3 className="text-xl font-bold font-display text-gray-900 mt-1 mb-3">
                  Autogestión y Apoyo Mutuo
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mb-4">
                  Organizamos espacios comerciales seguros, ferias de emprendimiento y mecanismos solidarios internos para que la comunidad LGTBIQ+ y mujeres puedan generar ingresos dignos desde la cooperación horizontal.
                </p>
                <div className="text-xs text-gray-600 space-y-1.5 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    <span>Ferias de arte y emprendimientos locales en Cusco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    <span>Rifas, cuotas comunitarias y venta de mercancía autogestiva</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Button href="/quienes-somos#nosotros" variant="outline" size="sm">
                  Leer sobre nuestra autogestión →
                </Button>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-gray-400 font-display">
                  Pilar 02
                </span>
                <h3 className="text-xl font-bold font-display text-gray-900 mt-1 mb-3">
                  Las Artes para hacer Activismo
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mb-4">
                  {HISTORIA_RESUMEN.pilarArtes}
                </p>
                <div className="text-xs text-gray-600 space-y-1.5 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    <span>Batucada LGTBIQ+ en las calles del Cusco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    <span>Talleres de activismo antipatriarcal, descolonial y antirracista</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Button href="/quienes-somos#nosotros" variant="outline" size="sm">
                  Conoce nuestras disciplinas →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OBJETIVOS ESTRATÉGICOS ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Líneas Institucionales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 mt-2 mb-3">
                Nuestros 6 Objetivos Estratégicos
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-sans">
                Aprobados para promover la defensa de derechos, salud, empleo y vigilancia ciudadana en Cusco.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJETIVOS_ESTRATEGICOS.map((obj) => {
              const IconComp = ICON_MAP[obj.icono] || ShieldCheck
              return (
                <div
                  key={obj.id}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between hover:border-gray-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-extrabold text-xl text-gray-300">
                        {obj.numero}
                      </span>
                      <IconComp size={16} className="text-brand-purple" />
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
              Ver misión, visión y marco institucional completo
            </Button>
          </div>
        </Container>
      </section>

      {/* ── PROYECTOS Y FERIAS ACTIVAS ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block mb-1">
                  Iniciativas en Cusco
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
                  Proyectos Comunitarios
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
                className="group flex flex-col rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={prog.imagen}
                    alt={prog.titulo}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple mb-1">
                    {prog.categoria}
                  </span>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                    {prog.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans flex-1 line-clamp-3">
                    {prog.descripcion}
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      to="/proyectos"
                      className="text-xs font-bold text-brand-purple hover:underline inline-flex items-center gap-1"
                    >
                      Más información <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── NOTICIAS Y ACTIVIDADES RECIENTES ──────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display block mb-1">
                  Prensa y Difusión
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
                  Actividades y Pronunciamientos
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
                className="flex flex-col rounded-2xl bg-[#FAF9F6] border border-gray-200 overflow-hidden"
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
                  <p className="text-xs text-gray-600 leading-relaxed font-sans flex-1 line-clamp-3">
                    {n.resumen}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LLAMADO A LA ACCIÓN / CONTACTO ─────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-display mb-2 block">
              Red Comunitaria en Cusco
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight mb-4">
              ¿Quieres sumarte, proponer un taller o colaborar?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed mb-8">
              Escríbenos a nuestro correo oficial o comunícate a través de nuestras redes oficiales en Instagram y TikTok.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contacto" size="lg" variant="primary">
                Escríbenos un mensaje
              </Button>
              <Button href="/quienes-somos#con-quienes-trabajamos" size="lg" variant="secondary">
                Ver con quiénes trabajamos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
