import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Sparkles, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { NAV_LINKS } from '@/config/navigation'
import { submitContactForm } from '@/services/contactForm'

export default function Footer() {
  const year = new Date().getFullYear()
  const [contactState, setContactState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setContactState('loading')

    const form = event.currentTarget
    try {
      await submitContactForm(form)
      form.reset()
      setContactState('success')
    } catch {
      setContactState('error')
    }
  }

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <div className="h-2 w-full flex">
        <span className="flex-1 bg-brand-sky" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-brand-sky" />
        <span className="flex-1 bg-brand-yellowWarm" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-purple" />
        <span className="flex-1 bg-brand-charcoal" />
      </div>

      <Container className="pt-8 pb-3 sm:pt-10 sm:pb-3.5">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-6 sm:grid-cols-2 sm:gap-10 sm:pb-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3 w-fit">
                <div className="site-logo-frame h-[4.5rem] w-[4.5rem] rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo png.webp`}
                    alt="Logo de Resiste Marika"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-2xl tracking-tight text-white leading-none">
                    Resiste <span className="text-brand-purpleSoft">Marika</span>
                  </span>
                </div>
              </Link>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold text-brand-yellowWarm uppercase tracking-widest font-display">
                  Correo y Redes sociales
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="mailto:resistemarik@gmail.com"
                    aria-label="Correo electrónico: resistemarik@gmail.com"
                    className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-pink hover:text-brand-dark transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/resiste.marika.cusco"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-pink hover:text-brand-dark transition-colors"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@resistemarik"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors"
                  >
                    <FaTiktok size={15} />
                  </a>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-brand-pink hover:text-white transition-colors mt-1"
                >
                  <Sparkles size={13} />
                  Contáctanos para sumar proyectos o talleres →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.08}>
            <div>
              <h3 className="text-xs font-bold text-brand-sky uppercase tracking-widest mb-4 font-display">
                Navegación
              </h3>
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/75 hover:text-brand-pink transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="sm:col-span-2 lg:col-span-4" delay={0.16}>
            <div className="flex flex-col gap-3">
              {contactState === 'success' ? (
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300" role="status">
                  <CheckCircle size={18} />
                  Mensaje enviado. ¡Gracias por escribirnos!
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="graphic-card--stripe flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5" aria-label="Formulario de contacto rápido">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
                  <div>
                    <label htmlFor="footer-nombre" className="mb-1.5 block text-xs font-bold text-white/90">
                      Nombre *
                    </label>
                    <input
                      id="footer-nombre"
                      name="nombre"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:border-brand-purple focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-email" className="mb-1.5 block text-xs font-bold text-white/90">
                      Correo Electrónico *
                    </label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      placeholder="tu@correo.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:border-brand-purple focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-mensaje" className="mb-1.5 block text-xs font-bold text-white/90">
                      Mensaje *
                    </label>
                    <textarea
                      id="footer-mensaje"
                      name="mensaje"
                      required
                      rows={3}
                      maxLength={2000}
                      placeholder="¿Cómo podemos ayudarte?"
                      className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:border-brand-purple focus:outline-none"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-xs leading-relaxed text-white/75">
                    <input type="checkbox" required className="mt-0.5 accent-brand-purple" />
                    <span>
                      He leído el{' '}
                      <Link to="/privacidad" className="font-semibold text-brand-pink underline underline-offset-2">
                        aviso de privacidad
                      </Link>
                      .
                    </span>
                  </label>
                  {contactState === 'error' && (
                    <p className="text-xs text-rose-300" role="alert">
                      No se pudo enviar. Inténtalo de nuevo o escríbenos por correo.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={contactState === 'loading'}
                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-purple px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-pink hover:text-brand-dark disabled:cursor-wait disabled:opacity-60"
                  >
                    <Send size={15} />
                    {contactState === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
              <div className="flex items-center gap-2 text-xs text-brand-yellowWarm font-semibold">
                <MapPin size={14} className="shrink-0" />
                <span>Cusco, Perú</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/60 font-sans">
          <p>© {year} Resiste Marika.</p>
          <Link to="/privacidad" className="underline underline-offset-2 hover:text-white">
            Aviso de privacidad
          </Link>
        </div>
      </Container>
    </footer>
  )
}
