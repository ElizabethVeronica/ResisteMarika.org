import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Mail, MapPin, Heart, Sparkles } from 'lucide-react'
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
    <div className="py-12 sm:py-20 bg-surface-light">
      {/* ── ENCABEZADO ───────────────────────────────────── */}
      <section className="mb-14 sm:mb-20">
        <Container>
          <Reveal>
            <SectionHeader
              pill="Contacto Directo en Cusco"
              title={
                <>
                  Ponte en contacto con <span className="text-gradient">nosotres</span>
                </>
              }
              subtitle="Escríbenos para participar en nuestras ferias de emprendimiento, coordinar talleres de artivismo, proponer alianzas o sumarte a la red."
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
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-surface-border shadow-md">
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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <input type="text" name="_honey" className="hidden" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark font-display"
                          >
                            Nombre o Pronombre *
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            placeholder="¿Cómo te gusta que te llamemos?"
                            className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors font-sans"
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
                            className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="motivo"
                          className="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-dark font-display"
                        >
                          ¿En qué te gustaría sumar o coordinar? *
                        </label>
                        <select
                          id="motivo"
                          name="motivo"
                          required
                          className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-3 text-sm text-brand-dark focus:border-brand-purple focus:outline-none transition-colors font-sans"
                        >
                          <option value="Ferias y Emprendimiento">Sumar mi emprendimiento / arte a las ferias</option>
                          <option value="Talleres y Saberes">Compartir o proponer un taller</option>
                          <option value="Vigilancia y Políticas">Vigilancia ciudadana y derechos en Cusco</option>
                          <option value="Alianzas y Apoyo">Alianzas entre colectivos y articulación</option>
                          <option value="Consulta general">Otra consulta general</option>
                        </select>
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
                          rows={5}
                          placeholder="Cuéntanos sobre tu iniciativa, emprendimiento o propuesta..."
                          className="w-full rounded-2xl border border-gray-200 bg-surface-light px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-purple focus:outline-none transition-colors resize-none font-sans"
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
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              <Reveal direction="right" delay={0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-md flex flex-col gap-6">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-brand-dark mb-1">
                      Canales de Contacto
                    </h3>
                    <p className="text-xs text-surface-muted font-sans">
                      Respuesta atenta y con respeto a la confidencialidad.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 text-sm font-sans">
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
                          Espacio Comunitario
                        </p>
                        <p className="text-brand-dark font-semibold">Ferias itinerantes y encuentros presenciales</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <a
                      href="https://www.instagram.com/resiste.marika.cusco"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm font-sans"
                    >
                      <FaInstagram size={16} />
                      Seguirnos en Instagram
                    </a>

                    <a
                      href="https://www.tiktok.com/@resistemarik"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-brand-dark text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-dark/80 transition-colors shadow-sm font-sans"
                    >
                      <FaTiktok size={15} />
                      Seguirnos en TikTok
                    </a>

                    <div className="flex justify-center gap-3 pt-2 text-brand-dark/70">
                      <a href="https://www.instagram.com/resiste.marika.cusco" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 hover:text-brand-pink transition-colors">
                        <FaInstagram size={17} />
                      </a>
                      <a href="https://www.tiktok.com/@resistemarik" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-2 hover:text-brand-dark transition-colors">
                        <FaTiktok size={17} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Mensaje de Apoyo Mutuo */}
              <Reveal direction="right" delay={0.2}>
                <div className="rounded-3xl border-2 border-brand-pinkSoft/40 bg-brand-pinkLight/30 p-6 flex items-start gap-4">
                  <Sparkles size={24} className="text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark mb-1">
                      Construcción colectiva
                    </h4>
                    <p className="text-xs text-surface-muted leading-relaxed font-sans">
                      Resiste Marika Cusco no cobra comisiones abusivas ni lucra con las actividades de la comunidad. Construimos economía solidaria basada en el respeto, el afecto y la transparencia.
                    </p>
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
