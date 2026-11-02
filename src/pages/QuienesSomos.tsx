import { useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import {
  HISTORIA_RESUMEN,
  DISCIPLINAS,
  OBJETIVOS_ESTRATEGICOS,
  FORMAS_AUTOGESTION,
  DONDE_TRABAJAMOS,
  CON_QUIENES_TRABAJAMOS,
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
            <div className="max-w-3xl mb-4">
              <h2 className="mt-1 mb-2 font-display text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                Nosotros
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          {/* Identidad y origen */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-7">
            <Reveal className="lg:col-span-6">
              <div className="space-y-3 font-sans text-base leading-relaxed text-gray-700">
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
            </Reveal>

            <Reveal className="lg:col-span-6" delay={0.1}>
              <div className="flex flex-col gap-3">
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
            </Reveal>
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
                <div className="mb-5 h-1 w-16 rounded-full bg-brand-purple" />
                <p className="mb-4 font-sans text-sm leading-relaxed text-gray-700 sm:text-base">
                  {HISTORIA_RESUMEN.pilarArtes}
                </p>
                <p className="font-sans text-sm leading-relaxed text-gray-700">
                  {HISTORIA_RESUMEN.talleresMultidisciplinarios}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal className="mb-5">
                <div className="aspect-[16/7] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <img
                    src="/images/marcha del 8M 2024.jpg"
                    alt="Marcha 8M con tambores y batucada en Cusco"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DISCIPLINAS.map((d) => (
                  <Reveal key={d.nombre} className="h-full">
                    <div className="interactive-card h-full rounded-xl border border-gray-200 bg-white p-3 dark:border-white/10 dark:bg-[#211d2a]">
                      <h3 className="font-display text-sm font-bold text-brand-purple">{d.nombre}</h3>
                      <p className="mt-1 font-sans text-xs leading-relaxed text-gray-600 dark:text-gray-300">{d.descripcion}</p>
                    </div>
                  </Reveal>
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
        <div className="photo-section__overlay" />
        <Container className="relative z-10 w-full">
          <Reveal>
            <div className="mb-6 max-w-2xl text-white">
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Mecanismos de autogestión
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-brand-pink" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 divide-y divide-white/25 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {FORMAS_AUTOGESTION.map((f, index) => (
              <Reveal key={f.id} className="h-full" delay={Math.min(index * 0.08, 0.24)}>
                <div className="photo-section__item group py-5 sm:px-4 sm:py-2 lg:px-5">
                  <div className="photo-section__item-accent" />
                  <h3 className="photo-section__item-title mb-2 font-display text-lg font-bold">{f.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{f.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 2. SECCIÓN: MISIÓN Y VISIÓN ────────────────────── */}
      <section id="mision-vision" className="page-section pt-10 sm:pt-12 pb-10 bg-white/80 backdrop-blur-xs border-y border-gray-200 dark:bg-[#1a1624]/80">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Misión y Visión
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          {/* Los 6 Objetivos Estratégicos */}
          <div>
            <Reveal className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Objetivos institucionales
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-sans">
                Líneas de acción que guían nuestra labor en el ámbito distrital, regional y nacional.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {OBJETIVOS_ESTRATEGICOS.map((obj, index) => (
                <Reveal key={obj.id} className="h-full" delay={Math.min(index % 3 * 0.07, 0.14)}>
                  <div className="interactive-card graphic-card flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-400 dark:border-white/10 dark:bg-[#211d2a]">
                    <div>
                      <h4 className="mt-1 mb-2 font-display text-sm font-bold text-brand-purple dark:text-brand-pink">
                        {obj.titulo}
                      </h4>
                      <p className="font-sans text-xs leading-snug text-gray-600 dark:text-gray-300">
                        {obj.descripcion}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. SECCIÓN: DÓNDE TRABAJAMOS ───────────────────── */}
      <section id="donde-trabajamos" className="page-section pt-16 sm:pt-24 pb-16">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-gray-900 mt-2 mb-4">
                Dónde trabajamos
              </h2>
              <div className="h-1 w-16 bg-brand-purple rounded-full" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <Reveal className="lg:col-span-5">
              <div className="interactive-card graphic-card--stripe bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 dark:border-white/10 dark:bg-[#211d2a]">
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
                  <h3 className="font-display font-bold text-lg text-brand-purple">
                    Región Cusco
                  </h3>
                  <p className="text-xs text-gray-500">Ámbito urbano y colectivo</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed font-sans dark:text-gray-300">
                Nuestra presencia se despliega activamente en la ciudad del Cusco, sus distritos y espacios públicos: calles, plazas históricas, ferias vecinales y espacios de participación ciudadana.
              </p>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4">
              {DONDE_TRABAJAMOS.espacios.map((esp, index) => (
                <Reveal key={esp.titulo} className="h-full" delay={Math.min(index % 2 * 0.08, 0.08)}>
                  <div className="interactive-card h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#211d2a]">
                    <h4 className="mb-2 font-display text-base font-bold text-brand-purple dark:text-brand-pink">
                      {esp.titulo}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {esp.descripcion}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. SECCIÓN: CON QUIÉNES TRABAJAMOS ─────────────── */}
      <section id="con-quienes-trabajamos" className="page-section flex scroll-mt-24 items-center bg-white/80 py-12 backdrop-blur-xs border-t border-gray-200 dark:bg-[#1a1624]/80 sm:py-16">
        <Container className="w-full max-w-6xl">
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CON_QUIENES_TRABAJAMOS.redes.map((red) => (
              <Reveal key={red.categoria} className="h-full">
                <div className="interactive-card h-full rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-[#211d2a]/80">
                  <h3 className="mb-2 font-display text-base font-bold text-brand-purple dark:text-brand-pink">
                    {red.categoria}
                  </h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {red.descripcion}
                  </p>
                </div>
              </Reveal>
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
        <div className="photo-section__overlay" />
        <Container className="w-full">
          <Reveal>
            <div className="photo-section__content max-w-3xl">
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
