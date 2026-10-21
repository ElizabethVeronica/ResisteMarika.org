import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Heart, Sparkles, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import Container from '@/components/ui/Container'
import { NAV_LINKS } from '@/config/navigation'

export default function Footer() {
  const year = new Date().getFullYear()
  const [contactState, setContactState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setContactState('loading')

    const form = event.currentTarget
    try {
      const response = await fetch('https://formsubmit.co/ajax/resistemarik@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (response.ok) {
        form.reset()
        setContactState('success')
      } else {
        setContactState('error')
      }
    } catch {
      setContactState('error')
    }
  }

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Franja superior con la bandera Trans y No Binaria */}
      <div className="h-2 w-full flex">
        {/* Bandera Trans */}
        <span className="flex-1 bg-brand-sky" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-brand-sky" />
        {/* Bandera No Binaria */}
        <span className="flex-1 bg-brand-yellowWarm" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-purple" />
        <span className="flex-1 bg-brand-charcoal" />
      </div>

      <Container className="pt-14 pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Columna 1: Identidad y Origen */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src="/images/logo.jpg"
                  alt="Logo de Resiste Marika"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
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

          {/* Columna 2: Páginas */}
          <div className="lg:col-span-3">
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

          {/* Columna 3: Formulario de contacto */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {contactState === 'success' ? (
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300" role="status">
                <CheckCircle size={18} />
                Mensaje enviado. ¡Gracias por escribirnos!
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-3" aria-label="Formulario de contacto rápido">
                <input type="text" name="_honey" className="hidden" tabIndex={-1} />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="footer-nombre" className="mb-1.5 block text-xs font-bold text-white/90">
                    Nombre *
                  </label>
                  <input
                    id="footer-nombre"
                    name="nombre"
                    type="text"
                    required
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
                    placeholder="¿Cómo podemos ayudarte?"
                    className="w-full resize-y rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:border-brand-purple focus:outline-none"
                  />
                </div>
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
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans">
          <p>© {year} Resiste Marika. Asociación Civil Sin Fines de Lucro.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Colectividad, artivismo y ternura radical <Heart size={12} className="text-brand-pink fill-brand-pink" />
          </p>
        </div>
      </Container>
    </footer>
  )
}
