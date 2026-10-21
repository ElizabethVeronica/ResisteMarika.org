import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',         href: '/' },
  {
    label: 'Quiénes somos',
    href: '/quienes-somos',
    children: [
      { label: 'Nosotros',               href: '/quienes-somos#nosotros' },
      { label: 'Misión y Visión',        href: '/quienes-somos#mision-vision' },
      { label: 'Dónde trabajamos',       href: '/quienes-somos#donde-trabajamos' },
      { label: 'Con quiénes trabajamos', href: '/quienes-somos#con-quienes-trabajamos' },
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
