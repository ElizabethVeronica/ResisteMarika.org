import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Mail, MapPin, Phone, ShieldAlert, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Email temporal de recepción vía FormSubmit
const FORMSUBMIT_EMAIL = 'contacto@resistemarika.org'

export default function Contacto() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div className="py-12 sm:py-20">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-14 sm:mb-20">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Canal Comunitario"
              title={
                <>
                  Ponte en contacto con <span className="text-gradient">nosotres</span>
                </>
              }
              subtitle="Escríbenos para consultas sobre asesoría, alianzas institucionales, sumarte al voluntariado o dudas sobre nuestras actividades."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── FORMULARIO & DATOS DE CONTACTO ────────────────── */}
      <section className="mb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Columna Izquierda: Formulario */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="rounded-2xl border border-surface-800 bg-surface-900 p-6 sm:p-10 shadow-xl">
                  {state === 'success' ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <CheckCircle size={52} className="text-primary-400" />
                      <h3 className="font-display font-bold text-2xl text-surface-50">
                        ¡Mensaje enviado con éxito!
                      </h3>
                      <p className="text-surface-300/80 max-w-md text-sm sm:text-base leading-relaxed">
                        Muchas gracias por escribirnos. Nuestro equipo de coordinación revisará tu mensaje y te responderá lo más pronto posible.
                      </p>
                      <button
                        onClick={() => setState('idle')}
                        className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary-300 underline hover:text-primary-200"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <input type="text" name="_honey" className="hidden" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block mb-2 text-xs font-semibold uppercase tracking-wider text-surface-300"
                          >
                            Nombre o Pronombre *
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            placeholder="¿Cómo te gustaría que te llamemos?"
                            className="w-full rounded-lg border border-surface-700 bg-surface-800/90 px-4 py-3 text-sm text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-xs font-semibold uppercase tracking-wider text-surface-300"
                          >
                            Correo Electrónico *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="tu@correo.com"
                            className="w-full rounded-lg border border-surface-700 bg-surface-800/90 px-4 py-3 text-sm text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="motivo"
                          className="block mb-2 text-xs font-semibold uppercase tracking-wider text-surface-300"
                        >
                          Motivo de tu consulta *
                        </label>
                        <select
                          id="motivo"
                          name="motivo"
                          required
                          className="w-full rounded-lg border border-surface-700 bg-surface-800/90 px-4 py-3 text-sm text-surface-50 focus:border-primary-500 focus:outline-none transition-colors"
                        >
                          <option value="Acompañamiento o Asesoría">Acompañamiento legal / psicosocial</option>
                          <option value="Voluntariado">Sumarme al voluntariado</option>
                          <option value="Alianza / Cooperación">Alianzas o propuestas de cooperación</option>
                          <option value="Prensa">Prensa y medios de comunicación</option>
                          <option value="Otro">Otra consulta general</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block mb-2 text-xs font-semibold uppercase tracking-wider text-surface-300"
                        >
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          placeholder="Cuéntanos en qué podemos apoyarte o qué iniciativa te gustaría articular..."
                          className="w-full rounded-lg border border-surface-700 bg-surface-800/90 px-4 py-3 text-sm text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {state === 'error' && (
                        <p className="text-xs text-accent-400 bg-accent-950/40 p-3 rounded-lg border border-accent-800">
                          Ocurrió un inconveniente al enviar tu formulario. Por favor inténtalo de nuevo o contáctanos por nuestras redes.
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={state === 'loading'}
                        size="lg"
                        variant="primary"
                        icon={<Send size={16} />}
                      >
                        {state === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Columna Derecha: Canales e Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              <Reveal direction="right" delay={0.1}>
                <div className="rounded-2xl border border-surface-800 bg-surface-900/60 p-6 sm:p-8 flex flex-col gap-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-surface-50 mb-2">
                      Canales Institucionales
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-300/70">
                      Horarios de atención de lunes a viernes de 10:00 a 18:00 hrs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider">
                          Correo General
                        </p>
                        <p className="text-surface-100 font-medium">contacto@resistemarika.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider">
                          WhatsApp Comunitario
                        </p>
                        <p className="text-surface-100 font-medium">+51 900 000 000 (Consultas)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary-500/15 text-primary-400 flex items-center justify-center shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider">
                          Sede / Punto de Encuentro
                        </p>
                        <p className="text-surface-100 font-medium">Lima, Perú (Atención previa cita)</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-surface-800">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <MessageCircle size={15} />
                      Chatear por WhatsApp directamente
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Caja de Emergencias / Contención */}
              <Reveal direction="right" delay={0.2}>
                <div className="rounded-2xl border border-accent-600/30 bg-accent-950/20 p-6 flex items-start gap-4">
                  <ShieldAlert size={24} className="text-accent-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-sm text-surface-100 mb-1">
                      ¿Estás atravesando una emergencia?
                    </h4>
                    <p className="text-xs text-surface-300/80 leading-relaxed mb-2">
                      Si requieres contención psicológica en crisis inmediata o asistencia legal de urgencia las 24 horas, acude a los servicios de auxilio de tu localidad o contáctanos con el asunto "URGENTE".
                    </p>
                    <span className="text-[11px] font-medium text-accent-300">
                      Línea 100 (Perú) / Central de Emergencia
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
