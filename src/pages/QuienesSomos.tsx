import { useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import {
  HISTORIA_RESUMEN,
  DISCIPLINAS,
  MISION_VISION,
  OBJETIVOS_ESTRATEGICOS,
  FORMAS_AUTOGESTION,
  DONDE_TRABAJAMOS,
  CON_QUIENES_TRABAJAMOS,
  ALIANZAS,
} from '@/config/nosotros'
import {
  ShieldCheck,
  Heart,
  FileText,
  Eye,
  Sparkles,
  Users,
  Network,
  ArrowRight,
  MapPin,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  FileText,
  Eye,
  Sparkles,
  Users,
  Network,
}

export default function QuienesSomos() {
  const sectionMenuRef = useRef<HTMLElement>(null)
  const [sectionMenuStuck, setSectionMenuStuck] = useState(false)

  useEffect(() => {
    const updateSectionMenu = () => {
      const menu = sectionMenuRef.current
      if (!menu) return

      const stickyTop = Number.parseFloat(window.getComputedStyle(menu).top)
      setSectionMenuStuck(menu.getBoundingClientRect().top <= stickyTop)
    }

    updateSectionMenu()
    window.addEventListener('scroll', updateSectionMenu, { passive: true })
    window.addEventListener('resize', updateSectionMenu)
    return () => {
      window.removeEventListener('scroll', updateSectionMenu)
      window.removeEventListener('resize', updateSectionMenu)
    }
  }, [])

  return (
    <div className="bg-[#FAF9F6] text-gray-900">
      {/* ── ENCABEZADO INSTITUCIONAL ───────────────────────── */}
      <section className="bg-white border-b border-gray-200 pt-12 pb-8 sm:pt-16 sm:pb-10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purpleLight/70 rounded-full mb-4 font-display">
              Asociación Civil Sin Fines de Lucro · Cusco, Perú
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gray-900 leading-tight mb-5">
              ¿Quiénes somos?
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-sans max-w-3xl mx-auto font-medium">
              {HISTORIA_RESUMEN.sublema}
            </p>
          </div>
        </Container>
      </section>

      <nav
        ref={sectionMenuRef}
        aria-label="Secciones de quiénes somos"
        className={`sticky top-24 sm:top-[8.5rem] lg:top-[7.5rem] z-[60] mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-2xl border p-2 transition-[background-color,border-color,box-shadow] duration-200 ${
          sectionMenuStuck
            ? 'border-gray-200/80 bg-white/95 shadow-lg shadow-gray-900/10 backdrop-blur-md'
            : 'border-transparent bg-[#FAF9F6]'
        }`}
      >
        <div className="flex max-w-full justify-center gap-1 overflow-x-auto">
          <a href="#nosotros" className="whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            Nosotros
          </a>
          <a href="#mision-vision" className="whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            Misión y Visión
          </a>
          <a href="#donde-trabajamos" className="whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            Dónde trabajamos
          </a>
          <a href="#con-quienes-trabajamos" className="whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
            Con quiénes trabajamos
          </a>
        </div>
      </nav>

      {/* ── 1. SECCIÓN: NOSOTROS ───────────────────────────── */}
      <section id="nosotros" className="scroll-mt-24 py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                01. Nuestra Identidad y Origen
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Nosotros
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          {/* Identidad y origen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
            <div className="lg:col-span-7 space-y-4 text-base text-gray-700 font-sans leading-relaxed">
              <p className="rounded-2xl border-l-4 border-brand-purple bg-brand-purpleLight/40 px-5 py-4 font-semibold text-gray-900">
                {HISTORIA_RESUMEN.declaracionInicial}
              </p>
              <p>{HISTORIA_RESUMEN.parrafo1}</p>

              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-gray-800 text-sm leading-relaxed">
                <p className="font-bold text-amber-900 mb-1">
                  Nuestra postura frente a la dependencia externa:
                </p>
                <p>{HISTORIA_RESUMEN.parrafo2}</p>
              </div>

              <p className="rounded-2xl bg-white border border-gray-200 px-5 py-4 font-medium text-gray-900">
                {HISTORIA_RESUMEN.parrafo3}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                <img
                  src="/images/Ceremonia de Agradecimiento a la Pachamama y Compartir Marika 2024.jpg"
                  alt="Ceremonia y compartir colectivo en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-900 mb-3 pb-2 border-b border-gray-100">
                  Ficha de la Organización
                </h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans">
                  <div className="min-w-0">
                    <dt className="text-xs text-gray-500 font-medium">Nombre oficial</dt>
                    <dd className="text-sm font-bold text-gray-900">Resiste Marika Cusco</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs text-gray-500 font-medium">Fecha de fundación</dt>
                    <dd className="text-sm font-semibold text-gray-800">{HISTORIA_RESUMEN.fundacion}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs text-gray-500 font-medium">Ámbito territorial</dt>
                    <dd className="text-sm font-semibold text-gray-800">{HISTORIA_RESUMEN.ciudad}</dd>
                  </div>
                  <div className="col-span-2 min-w-0">
                    <dt className="text-xs text-gray-500 font-medium">Naturaleza</dt>
                    <dd className="text-sm font-semibold text-gray-800">
                      Asociación civil, colectiva autoorganizada
                    </dd>
                  </div>
                  <div className="col-span-2 min-w-0">
                    <dt className="text-xs text-gray-500 font-medium">Enfoques</dt>
                    <dd className="text-sm font-semibold text-gray-800">
                      LGTBIQ+, racializado, antipatriarcal, decolonial y antirracista
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* El arte y la batucada */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-skyLight text-gray-800 text-xs font-bold mb-3 font-display">
                  El arte y la batucada
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
                  El uso de las artes para hacer activismo y la batucada LGTBIQ+
                </h3>
                <p className="text-gray-700 font-sans text-base leading-relaxed mb-4">
                  {HISTORIA_RESUMEN.pilarArtes}
                </p>
                <p className="text-gray-700 font-sans text-sm leading-relaxed mb-4">
                  {HISTORIA_RESUMEN.disciplinasArtisticas}
                </p>
                <p className="text-gray-700 font-sans text-sm leading-relaxed font-semibold text-brand-purple">
                  {HISTORIA_RESUMEN.talleresMultidisciplinarios}
                </p>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-gray-200 aspect-[4/3] bg-gray-100 shadow-sm">
                <img
                  src="/images/amrcha del 8M 2025.jpg"
                  alt="Marcha 8M con tambores y batucada en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Cuadrícula de disciplinas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {DISCIPLINAS.map((d) => (
                <div key={d.nombre} className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <h4 className="font-bold text-sm text-gray-900 font-display">{d.nombre}</h4>
                  <p className="text-sm text-gray-600 mt-1 font-sans leading-relaxed">{d.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formas de Autogestión (4 formas) */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
              Mecanismos reales de autogestión
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FORMAS_AUTOGESTION.map((f) => (
                <div
                  key={f.id}
                  className="p-5 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-gray-900 mb-2">
                      {f.titulo}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {f.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. SECCIÓN: MISIÓN Y VISIÓN ────────────────────── */}
      <section id="mision-vision" className="scroll-mt-24 pt-16 sm:pt-24 pb-16 bg-white border-y border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                02. Horizonte y Marco Estratégico
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Misión y Visión
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          {/* Bloque Central de Misión y Visión */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 mb-14">
            <span className="inline-block px-3 py-1 rounded-md bg-gray-900 text-white text-xs font-bold uppercase tracking-wider mb-4 font-display">
              Nuestra Misión y Visión
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
              Qué buscamos, defendemos y construimos como colectiva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              {MISION_VISION.objetivosPrincipales.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-sm">
                  <span className="font-display font-black text-brand-purple text-base shrink-0">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Los 6 Objetivos Estratégicos */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Objetivos institucionales
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-sans">
                Líneas de acción que guían nuestra labor en el ámbito distrital, regional y nacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OBJETIVOS_ESTRATEGICOS.map((obj) => {
                const IconComp = ICON_MAP[obj.icono] || ShieldCheck
                return (
                  <div
                    key={obj.id}
                    className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-colors flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display font-black text-2xl text-gray-300">
                          {obj.numero}
                        </span>
                        <div className="h-8 w-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
                          <IconComp size={16} />
                        </div>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-purple font-display">
                        {obj.enfoque}
                      </span>
                      <h4 className="font-display font-bold text-base text-gray-900 mt-1 mb-2">
                        {obj.titulo}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {obj.descripcion}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. SECCIÓN: DÓNDE TRABAJAMOS ───────────────────── */}
      <section id="donde-trabajamos" className="scroll-mt-24 pt-16 sm:pt-24 pb-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                03. Territorio y Ámbito de Acción
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Dónde trabajamos
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src="/images/marcha del orgullo 2025.png"
                  alt="Marcha de Resiste Marika en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-skyLight text-brand-dark flex items-center justify-center">
                  <MapPin size={20} className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900">
                    Región Cusco
                  </h3>
                  <p className="text-xs text-gray-500">Ámbito urbano y colectivo</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Nuestra presencia se despliega activamente en la ciudad del Cusco, sus distritos y espacios públicos: calles, plazas históricas, ferias vecinales y espacios de participación ciudadana.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4">
              {DONDE_TRABAJAMOS.espacios.map((esp) => (
                <div
                  key={esp.titulo}
                  className="h-full p-5 rounded-2xl bg-white border border-gray-200 flex flex-col shadow-sm"
                >
                  <h4 className="font-display font-bold text-base text-gray-900 mb-2">
                    {esp.titulo}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {esp.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. SECCIÓN: CON QUIÉNES TRABAJAMOS ─────────────── */}
      <section id="con-quienes-trabajamos" className="scroll-mt-24 pt-16 sm:pt-24 pb-16 bg-white border-t border-gray-200">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                04. Alianzas y Articulación
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Con quiénes trabajamos
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
              <p className="text-sm sm:text-base text-gray-600 font-sans mt-4">
                {CON_QUIENES_TRABAJAMOS.principios}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CON_QUIENES_TRABAJAMOS.redes.map((red) => (
              <div
                key={red.categoria}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-base text-gray-900 mb-2">
                    {red.categoria}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {red.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bloques de articulación institucional */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display mb-4">
              Redes y plataformas afines en Cusco
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ALIANZAS.map((a) => (
                <div
                  key={a.id}
                  className="p-4 rounded-xl border border-gray-200 bg-white text-center hover:border-gray-300 transition-colors"
                >
                  <p className="font-bold text-xs text-gray-800 font-display">{a.nombre}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{a.tipo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Llamado final a colaborar */}
          <div className="mt-10 p-8 rounded-2xl bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-brand-yellowWarm">
                ¿Deseas articular acciones o sumar tu proyecto?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1">
                Escríbenos a nuestro correo oficial <span className="text-white underline">resistemarik@gmail.com</span> o comunícate a través de nuestras redes.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contacto" variant="primary" icon={<ArrowRight size={16} />}>
                Contáctanos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
