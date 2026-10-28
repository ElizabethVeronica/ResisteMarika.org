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
  Drum,
  Store,
  Palette,
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

const ESPACIO_ICON_MAP: Record<string, LucideIcon> = {
  'En las calles y plazas del Cusco': Drum,
  'En ferias y espacios autogestionados': Store,
  'En talleres artísticos colectivos': Palette,
  'En instancias de vigilancia ciudadana': Eye,
}

const SECTION_LINKS = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'mision-vision', label: 'Misión y Visión' },
  { id: 'donde-trabajamos', label: 'Dónde trabajamos' },
  { id: 'con-quienes-trabajamos', label: 'Con quiénes trabajamos' },
]

const ALLIANCE_PALETTES = [
  {
    card: 'border-brand-purpleSoft/40 bg-brand-purpleLight/50 dark:bg-[#34283f]',
    mark: 'text-brand-purple',
    shape: 'bg-brand-purple/15',
    stripe: 'bg-brand-purple',
  },
  {
    card: 'border-brand-pink/30 bg-brand-pinkLight/50 dark:bg-[#3c2b35]',
    mark: 'text-rose-700 dark:text-rose-300',
    shape: 'bg-brand-pink/20',
    stripe: 'bg-brand-pink',
  },
  {
    card: 'border-brand-sky/40 bg-brand-skyLight/60 dark:bg-[#263846]',
    mark: 'text-sky-800 dark:text-sky-200',
    shape: 'bg-brand-sky/20',
    stripe: 'bg-brand-sky',
  },
  {
    card: 'border-brand-yellowWarm/50 bg-amber-50/80 dark:bg-[#3b3426]',
    mark: 'text-amber-800 dark:text-amber-200',
    shape: 'bg-brand-yellowWarm/25',
    stripe: 'bg-brand-yellowWarm',
  },
  {
    card: 'border-brand-purpleSoft/40 bg-brand-purpleLight/50 dark:bg-[#34283f]',
    mark: 'text-brand-purple',
    shape: 'bg-brand-purple/15',
    stripe: 'bg-brand-purple',
  },
]

export default function QuienesSomos() {
  const sectionMenuRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('nosotros')
  const [nearPageBottom, setNearPageBottom] = useState(false)

  useEffect(() => {
    const updateSectionMenu = () => {
      if (!sectionMenuRef.current) return

      const remainingPageHeight =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight
      setNearPageBottom(remainingPageHeight <= 320)

      const currentSection = [...SECTION_LINKS]
        .reverse()
        .find(({ id }) => {
          const section = document.getElementById(id)
          return section && section.getBoundingClientRect().top <= 180
        })
      if (currentSection) {
        setActiveSection(currentSection.id)
      } else if (window.scrollY < 180) {
        setActiveSection(SECTION_LINKS[0].id)
      }
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
    <div className="page-art-backdrop bg-[#FAF9F6] text-gray-900">
      {/* ── ENCABEZADO INSTITUCIONAL ───────────────────────── */}
      <section className="relative isolate mb-6 overflow-hidden border-b border-gray-200 py-5 sm:mb-8 sm:py-7">
        <img
          src="/images/Presentacion Fanzine colaborativo Manifiesto Marika Vol1 y Vol2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/90 px-5 py-8 text-center shadow-xl backdrop-blur-md sm:px-8 sm:py-10 dark:border-white/10 dark:bg-[#211d2a]/90">
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
        id="quienes-somos-section-nav"
        ref={sectionMenuRef}
        aria-label="Secciones de quiénes somos"
        aria-hidden={nearPageBottom}
        className={`sticky-section-nav z-[60] mx-auto mt-4 sm:mt-6 mb-4 w-full max-w-full px-4 transition-opacity duration-200 sm:w-fit sm:max-w-[calc(100%-2rem)] sm:px-0 ${
          nearPageBottom ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          {SECTION_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-xl px-2 py-2 text-center text-[11px] sm:px-3 sm:py-1.5 sm:text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </a>
            )
          })}
        </div>
      </nav>

      {/* ── 1. SECCIÓN: NOSOTROS ───────────────────────────── */}
      <section id="nosotros" className="scroll-mt-24 pt-0 pb-12 sm:pb-16">
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
              <p className="graphic-card rounded-2xl border-l-4 border-brand-purple bg-brand-purpleLight/40 px-5 py-4 font-semibold text-gray-900">
                {HISTORIA_RESUMEN.declaracionInicial}
              </p>
              <p>{HISTORIA_RESUMEN.parrafo1}</p>

              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-gray-800 text-sm leading-relaxed">
                <p className="font-bold text-amber-900 mb-1">
                  Nuestra postura frente a la dependencia externa:
                </p>
                <p>{HISTORIA_RESUMEN.parrafo2}</p>
              </div>

              <p className="graphic-card rounded-2xl bg-white border border-gray-200 px-5 py-4 font-medium text-gray-900">
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

              <div className="graphic-card bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
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
          <div className="graphic-card--stripe bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 shadow-sm">
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
                  src="/images/marcha del 8M 2024.jpg"
                  alt="Marcha 8M con tambores y batucada en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Cuadrícula de disciplinas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {DISCIPLINAS.map((d) => (
                <div key={d.nombre} className="graphic-card p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <h4 className="font-bold text-sm text-gray-900 font-display">{d.nombre}</h4>
                  <p className="text-sm text-gray-600 mt-1 font-sans leading-relaxed">{d.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formas de Autogestión (4 formas) */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
              Mecanismos de autogestión
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FORMAS_AUTOGESTION.map((f) => (
                <div
                  key={f.id}
                  className="graphic-card p-5 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm"
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
      <section id="mision-vision" className="scroll-mt-24 pt-16 sm:pt-24 pb-16 bg-white/80 backdrop-blur-xs border-y border-gray-200 dark:bg-[#1a1624]/80">
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
          <div className="graphic-card--stripe p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 mb-14">
            <span className="inline-block px-3 py-1 rounded-md bg-gray-900 text-white text-xs font-bold uppercase tracking-wider mb-4 font-display">
              Nuestra Misión y Visión
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
              Qué buscamos, defendemos y construimos como colectiva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              {MISION_VISION.objetivosPrincipales.map((item, idx) => (
                <div key={idx} className="graphic-card p-4 rounded-xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-sm">
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
                    className="graphic-card p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-colors flex flex-col justify-between shadow-sm"
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
            <div className="graphic-card--stripe lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
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
              {DONDE_TRABAJAMOS.espacios.map((esp) => {
                const Icon = ESPACIO_ICON_MAP[esp.titulo]
                return (
                  <div
                    key={esp.titulo}
                    className="graphic-card h-full p-5 rounded-2xl bg-white border border-gray-200 flex flex-col shadow-sm"
                  >
                    <h4 className="font-display font-bold text-base text-gray-900 mb-2">
                      {esp.titulo}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {esp.descripcion}
                    </p>
                    <div className="mt-4 flex justify-center text-brand-purple" aria-hidden="true">
                      <Icon size={24} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. SECCIÓN: CON QUIÉNES TRABAJAMOS ─────────────── */}
      <section id="con-quienes-trabajamos" className="scroll-mt-24 pt-16 sm:pt-24 pb-16 bg-white/80 backdrop-blur-xs border-t border-gray-200 dark:bg-[#1a1624]/80">
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
                className="graphic-card p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between"
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
              {ALIANZAS.map((a, index) => {
                const palette = ALLIANCE_PALETTES[index % ALLIANCE_PALETTES.length]
                return (
                <div
                  key={a.id}
                  className={`group relative isolate flex min-h-36 flex-col justify-between overflow-hidden rounded-2xl border p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${palette.card}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -right-5 -top-6 h-20 w-20 rounded-full ${palette.shape}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-8 -left-5 h-16 w-16 rotate-45 rounded-xl ${palette.shape}`}
                  />
                  <span className={`relative z-10 inline-flex w-fit rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider dark:bg-black/15 ${palette.mark}`}>
                    {a.logoText}
                  </span>
                  <div className="relative z-10 mt-4">
                    <p className="font-bold text-xs text-gray-800 font-display">{a.nombre}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{a.tipo}</p>
                  </div>
                </div>
                )
              })}
            </div>
          </div>

          {/* Llamado final a colaborar */}
          <div className="relative isolate mt-10 overflow-hidden rounded-3xl border border-brand-purple/20 shadow-lg">
            <img
              src="/images/taller de pañuelos 28s.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 m-3 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/20 bg-gray-950/65 p-6 text-center text-white shadow-xl backdrop-blur-md sm:m-5 sm:flex-row sm:p-8 sm:text-left">
              <div>
                <h3 className="text-xl font-bold font-display text-brand-yellowWarm">
                  ¿Deseas articular acciones o sumar tu proyecto?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans mt-1">
                  Escríbenos a nuestro correo oficial <span className="text-white underline">resistemarik@gmail.com</span> o comunícate a través de nuestras redes.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/contacto" variant="primary" icon={<ArrowRight size={16} />}>
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
