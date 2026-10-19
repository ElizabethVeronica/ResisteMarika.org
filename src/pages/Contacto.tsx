import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Mail, MapPin, Phone, ShieldAlert, MessageCircle } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

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
    <div className="py-12 sm:py-20 bg-brand-light">
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
              subtitle="Escríbenos para consultas sobre asesoría, alianzas institucionales, sumarte a nuestros proyectos o información sobre actividades."
              className="max-w-3xl mx-auto text-center"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── FORMULARIO Y CANALES ─────────────────────────── */}
      <section className="mb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Formulario */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md">
                  {state === 'success' ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-brand-dark">
                        ¡Mensaje recibido con éxito!
                      </h3>
                      <p className="text-surface-muted max-w-md text-sm sm:text-base leading-relaxed">
                        Muchas gracias por escribirnos. Nuestro equipo revisará tu mensaje y responderá a la brevedad posible.
                      </p>
                      <button
                        onClick={() => setState('idle')}
                        className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-purple underline hover:text-brand-magenta"
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
                            className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark"
                          >
                            Nombre o Pronombre *
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            placeholder="¿Cómo te gustaría que te llamemos?"
                            className="w-full rounded-xl border border-gray-200 bg-brand-light/50 px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark"
                          >
                            Correo Electrónico *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="tu@correo.com"
                            className="w-full rounded-xl border border-gray-200 bg-brand-light/50 px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="motivo"
                          className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark"
                        >
                          Motivo del Contacto *
                        </label>
                        <select
                          id="motivo"
                          name="motivo"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-brand-light/50 px-4 py-3 text-sm text-brand-dark focus:border-brand-purple focus:outline-none transition-colors"
                        >
                          <option value="Acompañamiento o Asesoría">Acompañamiento legal o psicosocial</option>
                          <option value="Proyectos / Voluntariado">Sumarme a proyectos o voluntariado</option>
                          <option value="Alianzas / Donaciones">Alianzas institucionales o donación</option>
                          <option value="Prensa">Prensa y comunicación</option>
                          <option value="Otro">Consulta general</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark"
                        >
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          placeholder="Escribe aquí tu consulta o propuesta..."
                          className="w-full rounded-xl border border-gray-200 bg-brand-light/50 px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {state === 'error' && (
                        <p className="text-xs text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                          Ocurrió un error al enviar tu consulta. Por favor inténtalo de nuevo o contáctanos por WhatsApp.
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

            {/* Canales Directos & Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              <Reveal direction="right" delay={0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md flex flex-col gap-6">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-brand-dark mb-1">
                      Canales de Atención
                    </h3>
                    <p className="text-xs text-surface-muted">
                      Horarios de respuesta: Lunes a Viernes de 10:00 a 18:00 hrs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider">
                          Correo Oficial
                        </p>
                        <p className="text-brand-dark font-semibold">contacto@resistemarika.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider">
                          WhatsApp Institucional
                        </p>
                        <p className="text-brand-dark font-semibold">+51 900 000 000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider">
                          Punto de Articulación
                        </p>
                        <p className="text-brand-dark font-semibold">Lima, Perú (Atención coordinada)</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-sm"
                    >
                      <MessageCircle size={16} />
                      Escribir por WhatsApp
                    </a>

                    <div className="flex justify-center gap-3 pt-2 text-brand-dark/70">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-magenta">
                        <FaInstagram size={17} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-purple">
                        <FaFacebook size={17} />
                      </a>
                      <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-dark">
                        <FaTwitter size={17} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:text-brand-deep">
                        <FaLinkedin size={17} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Caja de Emergencias */}
              <Reveal direction="right" delay={0.2}>
                <div className="rounded-3xl border-2 border-brand-peach bg-brand-peach/20 p-6 flex items-start gap-4">
                  <ShieldAlert size={26} className="text-brand-dark shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark mb-1">
                      ¿Necesitas auxilio inmediato?
                    </h4>
                    <p className="text-xs text-brand-dark/80 leading-relaxed mb-2">
                      Si te encuentras en una situación de riesgo inminente, recurre a las líneas de emergencia oficiales de tu localidad o escríbenos con el asunto <strong>"URGENTE"</strong>.
                    </p>
                    <span className="text-[11px] font-bold text-brand-purple">
                      Línea 100 (Perú) / Central Nacional de Emergencias
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
