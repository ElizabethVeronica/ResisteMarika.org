import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Mail, MapPin, Heart } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const FORMSUBMIT_EMAIL = 'resistemarik@gmail.com'

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
    <div className="page-art-backdrop bg-surface-light py-8 sm:py-10">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="relative isolate mb-8 overflow-hidden py-4 sm:mb-10 sm:py-6">
        <img
          src="/images/taller de batucada.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-skyLight/70 via-white/65 to-brand-pinkLight/70 dark:from-[#17141f]/75 dark:via-[#211d2a]/70 dark:to-[#34283f]/75" />
        <Container>
          <Reveal>
            <div className="graphic-card relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/85 bg-white/85 px-5 py-7 shadow-xl backdrop-blur-md sm:px-8 sm:py-9 dark:border-white/10 dark:bg-[#211d2a]/90">
              <SectionHeader
                title={
                  <>
                    Ponte en contacto con <span className="text-gradient">nosotres</span>
                  </>
                }
                subtitle="Escríbenos para participar en nuestras ferias, coordinar talleres, proponer actividades colectivas."
                className="max-w-3xl mx-auto text-center"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FORMULARIO Y CANALES ─────────────────────────── */}
      <section className="mb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
            {/* Formulario */}
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="graphic-card--stripe bg-white rounded-3xl p-5 sm:p-7 border border-surface-border shadow-md">
                  {state === 'success' ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-brand-dark">
                        ¡Mensaje recibido con mucho cariño!
                      </h3>
                      <p className="text-surface-muted max-w-md text-sm sm:text-base leading-relaxed font-sans">
                        Muchas gracias por escribir a Resiste Marika Cusco. Nuestro equipo revisará tu mensaje y responderá a la brevedad posible.
                      </p>
                      <button
                        onClick={() => setState('idle')}
                        className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-purple underline hover:text-brand-pink"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input type="text" name="_honey" className="hidden" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark font-display"
                          >
                            Nombre *
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            placeholder="Tu nombre"
                            className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors font-sans"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark font-display"
                          >
                            Correo Electrónico *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="tu@correo.com"
                            className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark font-display"
                        >
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={4}
                          placeholder="Cuéntanos sobre tu iniciativa o propuesta"
                          className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors resize-none font-sans"
                        />
                      </div>

                      {state === 'error' && (
                        <p className="text-xs text-rose-600 bg-rose-50 p-3 rounded-2xl border border-rose-200 font-sans">
                          Ocurrió un error al enviar el formulario. Por favor inténtalo de nuevo o escríbenos directamente a nuestro Instagram o TikTok.
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
            <div className="relative isolate flex flex-col justify-between gap-6 lg:col-span-5">
              <img
                src="/images/Rezo a Chuquichinchay y Ritual de cosecha en Otoño.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-[2rem] object-cover opacity-50"
              />
              <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-brand-purple/30 via-brand-pink/20 to-brand-sky/30 dark:from-gray-950/60 dark:via-gray-950/45 dark:to-brand-purple/40" />
              <Reveal direction="right" delay={0.1}>
                <div className="relative z-10 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl backdrop-blur-md flex flex-col gap-4 sm:p-7 dark:border-white/10 dark:bg-[#211d2a]/90">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-brand-dark mb-1">
                      Canales de Contacto
                    </h3>
                    <p className="text-xs text-surface-muted font-sans">
                      Respuesta atenta y con respeto a la confidencialidad.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 text-sm font-sans">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-brand-purpleLight text-brand-purple flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider font-display">
                          Correo de la Red
                        </p>
                        <p className="text-brand-dark font-semibold">
                          <a href="mailto:resistemarik@gmail.com" className="hover:text-brand-purple transition-colors">
                            resistemarik@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-brand-skyLight text-brand-dark flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider font-display">
                          Ubicación
                        </p>
                        <p className="text-brand-dark font-semibold">Cusco, Perú</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-brand-pinkLight text-brand-dark flex items-center justify-center shrink-0">
                        <Heart size={18} className="text-brand-pink fill-brand-pink" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-surface-muted uppercase tracking-wider font-display">
                          Espacio Colectivo
                        </p>
                        <p className="text-brand-dark font-semibold">Ferias itinerantes y encuentros presenciales</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                    <a
                      href="https://www.instagram.com/resiste.marika.cusco"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm font-sans"
                    >
                      <FaInstagram size={16} />
                      Síguenos en Instagram
                    </a>

                    <a
                      href="https://www.tiktok.com/@resistemarik"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-brand-dark text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-dark/80 transition-colors shadow-sm font-sans"
                    >
                      <FaTiktok size={15} />
                      Síguenos en TikTok
                    </a>
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
