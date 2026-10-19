import { Link } from 'react-router-dom'
import { Mail, Heart } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import { NAV_LINKS } from '@/config/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-10 border-t-4 border-brand-magenta">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Columna 1: Info e Identidad */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta flex items-center justify-center text-white font-impact text-xl">
                RM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  Resiste <span className="text-brand-magenta">Marika</span>
                </span>
                <span className="text-[10px] font-semibold text-brand-cyan tracking-widest uppercase mt-0.5">
                  Asociación Civil
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm mt-2">
              Organización comprometida con la defensa de los derechos humanos, la autonomía y la justicia social para la diversidad LGBTIQ+.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-2.5 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-colors"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-brand-purple transition-colors"
              >
                <FaFacebook size={17} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-dark transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">
              Páginas
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/75 hover:text-brand-magenta transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Alianzas */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-brand-peach uppercase tracking-widest mb-2">
              Contacto Directo
            </h3>
            <p className="text-sm text-white/75 flex items-center gap-2">
              <Mail size={15} className="text-brand-cyan shrink-0" />
              contacto@resistemarika.org
            </p>
            <p className="text-xs text-white/60 leading-relaxed mt-2">
              Atención presencial y virtual previa coordinación. Espacio seguro y confidencial.
            </p>
            <div className="mt-3">
              <Link
                to="/contacto"
                className="inline-block text-xs font-bold text-brand-peach hover:underline uppercase tracking-wider"
              >
                Escríbenos un mensaje directo →
              </Link>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {year} Resiste Marika. Asociación Civil Sin Fines de Lucro.</p>
          <p className="flex items-center gap-1.5">
            Por los derechos y la dignidad <Heart size={13} className="text-brand-magenta" fill="currentColor" />
          </p>
        </div>
      </Container>
    </footer>
  )
}
