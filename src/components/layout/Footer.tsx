import { Link } from 'react-router-dom'
import { Mail, Heart } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import { NAV_LINKS } from '@/config/navigation'

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebook,  href: 'https://facebook.com',  label: 'Facebook' },
  { icon: FaTwitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { icon: Mail,        href: 'mailto:contacto@resistemarika.org', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-900 border-t border-surface-800/60">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Columna 1: Info org */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-display font-bold text-xl text-gradient w-fit">
              Resiste Marika
            </Link>
            <p className="text-sm text-surface-300/70 leading-relaxed max-w-xs">
              Asociación civil sin fines de lucro que trabaja por los derechos,
              la dignidad y el bienestar de la comunidad LGBTIQ+.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3 mt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-800 text-surface-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-surface-50 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-surface-300/70 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-surface-50 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-surface-300/70">
              <li>contacto@resistemarika.org</li>
              {/* TODO: Agregar dirección y teléfono reales */}
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-surface-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface-400">
          <p>© {year} Resiste Marika. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con <Heart size={12} className="text-accent-500" fill="currentColor" /> por y para la comunidad
          </p>
        </div>
      </Container>
    </footer>
  )
}
