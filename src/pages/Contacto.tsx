import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// ⚠️ TODO: Reemplazar con el email real de la organización
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
    <div className="min-h-screen py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            pill="Contacto"
            title="Escribinos"
            subtitle="Respondemos a la brevedad. Podés escribirnos para consultas, alianzas o simplemente para conectar."
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Formulario */}
          <Reveal direction="left">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-primary-500/30 bg-primary-500/10 p-12 text-center">
                <CheckCircle size={48} className="text-primary-400" />
                <h3 className="font-display font-bold text-xl text-surface-50">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-surface-300/70">
                  Gracias por escribirnos. Te respondemos pronto 💜
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="text-sm text-primary-300 underline hover:text-primary-200"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Anti-spam honeypot */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="nombre" className="block mb-1.5 text-sm font-medium text-surface-200">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-surface-200">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block mb-1.5 text-sm font-medium text-surface-200">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block mb-1.5 text-sm font-medium text-surface-200">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Contanos lo que necesitás..."
                    className="w-full rounded-lg border border-surface-700 bg-surface-800 px-4 py-3 text-surface-50 placeholder:text-surface-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-sm text-accent-400">
                    Hubo un error al enviar. Por favor intentá de nuevo o escribinos directamente al email.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={state === 'loading'}
                  size="lg"
                  icon={<Send size={16} />}
                >
                  {state === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            )}
          </Reveal>

          {/* Info de contacto */}
          <Reveal direction="right" delay={0.2}>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-display font-bold text-xl text-surface-50 mb-2">
                  Información de contacto
                </h3>
                <p className="text-surface-300/70 text-sm leading-relaxed">
                  También podés encontrarnos en nuestras redes sociales o escribirnos directamente.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: 'Email', value: 'contacto@resistemarika.org' },
                  { label: 'Ubicación', value: 'Lima, Perú' },  // TODO: actualizar
                  { label: 'Instagram', value: '@resistemarika' }, // TODO: actualizar
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                      {label}
                    </span>
                    <span className="text-surface-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
