import { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { ROLES_VOLUNTARIADO, FAQS_COLABORA, METODOS_DONACION } from '@/config/voluntariado'
import {
  Heart,
  Users,
  Building2,
  ChevronDown,
  Clock,
  MapPin,
  Check,
  Copy,
  Sparkles,
} from 'lucide-react'

export default function Colabora() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS_COLABORA[0]?.id || null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <div className="py-12 sm:py-20">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-16 sm:mb-24">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Acción Colectiva"
              title={
                <>
                  Formas de apoyar y <span className="text-gradient">sostener la causa</span>
                </>
              }
              subtitle="Cada aporte, sea tu tiempo como voluntarie, una donación económica o una alianza institucional, hace posible la continuidad de nuestros programas."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── 3 PILARES DE APOYO (RESUMEN) ──────────────────── */}
      <section className="mb-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Voluntariado Activo',
                desc: 'Aporta tus habilidades y conocimientos profesionales en derecho, psicología, diseño o logística comunitaria.',
                cta: 'Ver convocatorias',
                href: '#voluntariado',
                color: 'text-primary-400 bg-primary-500/15',
              },
              {
                icon: Heart,
                title: 'Donación Económica',
                desc: 'Tus aportes aseguran la gratuidad de la asesoría legal, materiales educativos y fondos de auxilio mutuo.',
                cta: 'Canales de aporte',
                href: '#donaciones',
                color: 'text-accent-400 bg-accent-500/15',
              },
              {
                icon: Building2,
                title: 'Alianzas Institucionales',
                desc: 'Diseñamos proyectos conjuntos con empresas responsables, universidades y organismos de cooperación.',
                cta: 'Escribir a alianzas',
                href: '/contacto',
                color: 'text-primary-300 bg-primary-600/15',
              },
            ].map((pilar, idx) => {
              const Icon = pilar.icon
              return (
                <Reveal key={pilar.title} delay={idx * 0.1}>
                  <div className="h-full flex flex-col items-center text-center p-8 rounded-2xl border border-surface-800 bg-surface-900/60 hover:border-primary-500/40 transition-colors">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-5 ${pilar.color}`}
                    >
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-surface-50 mb-3">
                      {pilar.title}
                    </h3>
                    <p className="text-sm text-surface-300/75 leading-relaxed flex-1 mb-6">
                      {pilar.desc}
                    </p>
                    <a
                      href={pilar.href}
                      className="text-xs font-semibold text-primary-300 hover:text-primary-200 transition-colors uppercase tracking-wider underline underline-offset-4"
                    >
                      {pilar.cta} ↓
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CONVOCATORIA DE VOLUNTARIADO ──────────────────── */}
      <section id="voluntariado" className="mb-24 scroll-mt-24">
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2 block">
                Únete a la resistencia
              </span>
              <h2 className="text-3xl font-bold font-display text-surface-50 mb-3">
                Perfiles de Voluntariado Abiertos
              </h2>
              <p className="text-sm text-surface-300/70 max-w-xl mx-auto">
                Buscamos personas comprometidas para sumar esfuerzos en diferentes áreas de trabajo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROLES_VOLUNTARIADO.map((rol, i) => (
              <Reveal key={rol.id} delay={i * 0.08}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-surface-800 bg-surface-900 p-6 sm:p-8 hover:border-primary-500/40 transition-colors">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="rounded-full bg-primary-500/15 border border-primary-500/30 px-3 py-0.5 text-xs font-semibold text-primary-300">
                        {rol.area}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-surface-50 mb-3">
                      {rol.rol}
                    </h3>

                    <p className="text-sm text-surface-300/80 leading-relaxed mb-6">
                      {rol.descripcion}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 text-xs text-surface-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-primary-400" />
                        {rol.modalidad}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-primary-400" />
                        {rol.dedicacion}
                      </span>
                    </div>

                    <Button href="/contacto" variant="primary" size="sm">
                      Postular al rol
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pasos para postular */}
          <div className="mt-14 rounded-2xl border border-surface-800 bg-surface-900/40 p-8 sm:p-10">
            <h4 className="font-display font-semibold text-lg text-surface-100 text-center mb-8">
              ¿Cómo es el proceso de ingreso al voluntariado?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                  1
                </span>
                <p className="font-semibold text-surface-100 text-sm mb-1">Ficha de Postulación</p>
                <p className="text-xs text-surface-400">Completas el formulario con tu perfil y disponibilidad de tiempo.</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                  2
                </span>
                <p className="font-semibold text-surface-100 text-sm mb-1">Charla de Encuadre</p>
                <p className="text-xs text-surface-400">Conversatorio breve para conocer tus expectativas y resolver dudas.</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="h-8 w-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-sm mb-3">
                  3
                </span>
                <p className="font-semibold text-surface-100 text-sm mb-1">Taller de Inducción</p>
                <p className="text-xs text-surface-400">Capacitación sobre nuestros protocolos, enfoque de género y herramientas.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CANALES DE DONACIÓN ───────────────────────────── */}
      <section id="donaciones" className="mb-24 py-16 bg-surface-900/40 border-y border-surface-800/60 scroll-mt-24">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-2 block">
                Sostenibilidad Comunitaria
              </span>
              <h2 className="text-3xl font-bold font-display text-surface-50 mb-3">
                Canales Oficiales de Donación
              </h2>
              <p className="text-sm text-surface-300/70">
                Resiste Marika se financia mediante aportes solidarios y cooperación. Cada aporte cuenta para sostener nuestro acompañamiento gratuito.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {METODOS_DONACION.map((metodo) => (
              <div
                key={metodo.id}
                className="rounded-xl border border-surface-800 bg-surface-900 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-surface-100 mb-1">
                    {metodo.nombre}
                  </h3>
                  <p className="text-xs text-surface-400 mb-4">{metodo.detalle}</p>

                  <div className="rounded-lg bg-surface-950 p-3 border border-surface-800 text-xs font-mono text-primary-300 break-all mb-2 flex items-center justify-between gap-2">
                    <span>{metodo.numero}</span>
                    <button
                      onClick={() => handleCopy(metodo.id, metodo.numero)}
                      className="p-1 rounded hover:bg-surface-800 text-surface-400 hover:text-white transition-colors shrink-0"
                      title="Copiar datos"
                    >
                      {copiedId === metodo.id ? (
                        <Check size={14} className="text-green-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-surface-400">{metodo.cci}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-surface-800">
                  <span className="text-[11px] text-primary-300 flex items-center gap-1 font-medium">
                    <Sparkles size={12} />
                    Reporte de donación vía contacto
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PREGUNTAS FRECUENTES (FAQ) ────────────────────── */}
      <section className="mb-16">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2 block">
                Dudas Habituales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-surface-50 mb-3">
                Preguntas Frecuentes
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {FAQS_COLABORA.map((faq) => {
              const isOpen = openFaq === faq.id
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-surface-800 bg-surface-900/70 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-medium text-surface-100 hover:text-primary-300 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.pregunta}</span>
                    <ChevronDown
                      size={18}
                      className={`text-surface-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-surface-300/80 leading-relaxed border-t border-surface-800/60">
                      {faq.respuesta}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}
