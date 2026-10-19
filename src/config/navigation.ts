import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',         href: '/' },
  { label: 'Quiénes somos',  href: '/quienes-somos' },
  { label: 'Proyectos',      href: '/proyectos' },
  { label: 'Noticias',       href: '/noticias' },
  { label: 'Contacto',       href: '/contacto' },
]

export const REDES_SOCIALES = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'FaInstagram' },
  { label: 'Facebook',  href: 'https://facebook.com',  icon: 'FaFacebook' },
  { label: 'X (Twitter)', href: 'https://x.com',       icon: 'FaTwitter' },
  { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: 'FaLinkedin' },
  { label: 'WhatsApp',  href: 'https://wa.me/',        icon: 'FaWhatsapp' },
]
