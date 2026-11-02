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
  ArrowRight,
  MapPin,
} from 'lucide-react'

const SECTION_LINKS = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'artes', label: 'Artes y artivismo' },
  { id: 'autogestion', label: 'Autogestión' },
  { id: 'mision-vision', label: 'Misión y Visión' },
  { id: 'donde-trabajamos', label: 'Dónde trabajamos' },
  { id: 'con-quienes-trabajamos', label: 'Con quiénes trabajamos' },
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
      <section className="page-hero">
        <img
          src="/images/Presentacion Fanzine colaborativo Manifiesto Marika Vol1 y Vol2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="page-hero__overlay" />
        <Container className="relative z-10 flex items-center">
          <Reveal className="w-full">
            <div className="page-hero__content">
              <h1 className="page-hero__title">¿Quiénes somos?</h1>
              <p className="page-hero__subtitle">{HISTORIA_RESUMEN.sublema}</p>
            </div>
          </Reveal>
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
              <button
                key={id}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(id)
                  const element = document.getElementById(id)
                  if (element) {
                    const headerHeight = Number.parseFloat(
                      getComputedStyle(document.documentElement).getPropertyValue('--site-header-height'),
                    )
                    const navHeight = sectionMenuRef.current?.getBoundingClientRect().height ?? 0
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                      top: elementPosition - headerHeight - navHeight - 12,
                      behavior: 'smooth',
                    })
                  }
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-xl px-2 py-2 text-center text-[11px] sm:px-3 sm:py-1.5 sm:text-xs font-bold transition-colors duration-200 ${
                  isActive
                    ? 'bg-brand-purple text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* ── 1. SECCIÓN: NOSOTROS ───────────────────────────── */}
      <section id="nosotros" className="page-section scroll-mt-24 py-8 sm:py-10">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Nuestra Identidad y Origen
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Nosotros
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          {/* Identidad y origen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 text-base text-gray-700 font-sans leading-relaxed">
              <p className="font-semibold text-gray-900">
                {HISTORIA_RESUMEN.declaracionInicial}
              </p>
              <p>{HISTORIA_RESUMEN.parrafo1}</p>

              <div className="text-sm leading-relaxed text-gray-700">
                <p className="font-bold text-gray-900">
                  Nuestra postura frente a la dependencia externa:
                </p>
                <p>{HISTORIA_RESUMEN.parrafo2}</p>
              </div>

              <p className="font-medium text-gray-900">
                {HISTORIA_RESUMEN.parrafo3}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="aspect-[16/8] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                <img
                  src="/images/Ceremonia de Agradecimiento a la Pachamama y Compartir Marika 2024.jpg"
                  alt="Ceremonia y compartir colectivo en Cusco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="graphic-card bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-display font-extrabold text-base text-gray-900 mb-2 pb-2 border-b border-gray-100">
                  Ficha de la Organización
                </h3>
                <dl className="grid grid-cols-2 gap-x-3 gap-y-2 font-sans">
                  <div className="min-w-0">
                    <dt className="text-[11px] text-gray-500 font-medium">Nombre oficial</dt>
                    <dd className="text-xs font-bold text-gray-900">Resiste Marika Cusco</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[11px] text-gray-500 font-medium">Fecha de fundación</dt>
                    <dd className="text-xs font-semibold text-gray-800">{HISTORIA_RESUMEN.fundacion}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[11px] text-gray-500 font-medium">Ámbito territorial</dt>
                    <dd className="text-xs font-semibold text-gray-800">{HISTORIA_RESUMEN.ciudad}</dd>
                  </div>
                  <div className="col-span-2 min-w-0">
                    <dt className="text-[11px] text-gray-500 font-medium">Naturaleza</dt>
                    <dd className="text-xs font-semibold text-gray-800">
                      Asociación civil, colectiva autoorganizada
                    </dd>
                  </div>
                  <div className="col-span-2 min-w-0">
                    <dt className="text-[11px] text-gray-500 font-medium">Enfoques</dt>
                    <dd className="text-xs font-semibold text-gray-800">
                      LGTBIQ+, racializado, antipatriarcal, decolonial y antirracista
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="artes" className="page-section scroll-mt-24 flex items-center bg-white/80 py-10 sm:py-12 backdrop-blur-xs dark:bg-[#1a1624]/80">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="mb-4 font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  El uso de las artes para hacer activismo
                </h2>
                <p className="mb-4 font-sans text-sm leading-relaxed text-gray-700 sm:text-base">
                  {HISTORIA_RESUMEN.pilarArtes}
                </p>
                <p className="font-sans text-sm leading-relaxed text-gray-700">
                  {HISTORIA_RESUMEN.talleresMultidisciplinarios}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-5 aspect-[16/7] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <img
                  src="/images/marcha del 8M 2024.jpg"
                  alt="Marcha 8M con tambores y batucada en Cusco"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DISCIPLINAS.map((d) => (
                  <div key={d.nombre} className="rounded-xl border border-gray-200 bg-white p-3 dark:border-white/10 dark:bg-[#211d2a]">
                    <h3 className="font-display text-sm font-bold text-gray-900">{d.nombre}</h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-gray-600">{d.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="autogestion" className="page-section page-section--photo relative isolate scroll-mt-24 overflow-hidden py-10 sm:py-12">
        <img
          src="/images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <Container className="relative z-10 w-full">
          <Reveal>
            <div className="mb-6 max-w-2xl text-white">
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Mecanismos de autogestión
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {FORMAS_AUTOGESTION.map((f) => (
                <div key={f.id} className="rounded-2xl border border-white/40 bg-white/95 p-4 shadow-sm">
                  <h3 className="font-display text-base font-bold text-gray-900">{f.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.descripcion}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 2. SECCIÓN: MISIÓN Y VISIÓN ────────────────────── */}
      <section id="mision-vision" className="page-section pt-10 sm:pt-12 pb-10 bg-white/80 backdrop-blur-xs border-y border-gray-200 dark:bg-[#1a1624]/80">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Horizonte y Marco Estratégico
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Misión y Visión
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          <div className="mb-8 max-w-3xl">
            <h3 className="text-xl font-bold font-display text-gray-900">
              Qué buscamos, defendemos y construimos como colectiva
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              {MISION_VISION.descripcion}
            </p>
          </div>

          {/* Los 6 Objetivos Estratégicos */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Objetivos institucionales
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-sans">
                Líneas de acción que guían nuestra labor en el ámbito distrital, regional y nacional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {OBJETIVOS_ESTRATEGICOS.map((obj) => {
                return (
                  <div
                    key={obj.id}
                    className="graphic-card flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-400"
                  >
                    <div>
                      <h4 className="mt-1 mb-2 font-display text-sm font-bold text-gray-900">
                        {obj.titulo}
                      </h4>
                      <p className="font-sans text-xs leading-snug text-gray-600">
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
      <section id="donde-trabajamos" className="page-section pt-16 sm:pt-24 pb-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple font-display">
                Territorio y Ámbito de Acción
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
              {DONDE_TRABAJAMOS.espacios.map((esp) => (
                <div
                  key={esp.titulo}
                  className="h-full p-5 rounded-2xl bg-white border border-gray-200 flex flex-col shadow-sm"
                >
                  <h4 className="font-display font-bold text-base text-gray-900 mb-2">
                    {esp.titulo}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {esp.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. SECCIÓN: CON QUIÉNES TRABAJAMOS ─────────────── */}
      <section id="con-quienes-trabajamos" className="page-section scroll-mt-24 pt-12 pb-12 sm:pt-16 bg-white/80 backdrop-blur-xs border-t border-gray-200 dark:bg-[#1a1624]/80">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Con quiénes trabajamos
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
              <p className="text-sm sm:text-base text-gray-600 font-sans mt-4">
                {CON_QUIENES_TRABAJAMOS.principios}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CON_QUIENES_TRABAJAMOS.redes.map((red) => (
              <div
                key={red.categoria}
                className="graphic-card rounded-2xl border border-gray-200 bg-gray-50 p-4"
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
            {ALIANZAS.map((a) => (
              <div
                key={a.id}
                className="graphic-card rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <p className="font-display text-base font-bold text-gray-900">{a.nombre}</p>
                  <p className="mt-1 text-sm text-gray-600">{a.tipo}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section page-section--photo relative isolate overflow-hidden py-12 sm:py-16">
        <img
          src="/images/taller de pañuelos 28s.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <Container className="relative z-10 w-full">
          <Reveal>
            <div className="max-w-3xl py-8 text-white">
              <h2 className="mb-4 font-display text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl">
                ¿Deseas articular acciones o sumar tu proyecto?
              </h2>
              <p className="mb-6 font-sans text-base leading-relaxed text-white/95 drop-shadow-md">
                Escríbenos a nuestro correo oficial{' '}
                <a className="font-semibold text-white underline" href="mailto:resistemarik@gmail.com">
                  resistemarik@gmail.com
                </a>{' '}
                o comunícate a través de nuestras redes.
              </p>
              <Button href="/contacto" variant="primary" icon={<ArrowRight size={16} />}>
                Contáctanos
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
