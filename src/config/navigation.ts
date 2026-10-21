import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',         href: '/' },
  {
    label: 'Quiénes somos',
    href: '/quienes-somos',
    children: [
      { label: 'Nosotros',               href: '/quienes-somos#nosotros',               descripcion: 'Historia, arte y comunidad en Cusco' },
      { label: 'Misión y Visión',        href: '/quienes-somos#mision-vision',          descripcion: 'Propósito y 6 objetivos estratégicos' },
      { label: 'Dónde trabajamos',       href: '/quienes-somos#donde-trabajamos',       descripcion: 'Ámbito territorial y presencia en Cusco' },
      { label: 'Con quiénes trabajamos', href: '/quienes-somos#con-quienes-trabajamos', descripcion: 'Redes, articulación y apoyo mutuo' },
    ],
  },
  { label: 'Proyectos',      href: '/proyectos' },
  { label: 'Multimedia',     href: '/multimedia' },
  { label: 'Noticias',       href: '/noticias' },
  { label: 'Contacto',       href: '/contacto' },
]

export const REDES_SOCIALES = [
  { label: 'Instagram', href: 'https://www.instagram.com/resiste.marika.cusco', icon: 'FaInstagram' },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@resistemarik',         icon: 'FaTiktok' },
]
