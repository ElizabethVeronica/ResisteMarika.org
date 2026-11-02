export interface EngagementPath {
  id: string
  titulo: string
  descripcion: string
  href: string
  cta: string
}

export const ENGAGEMENT_PATHS: EngagementPath[] = [
  {
    id: 'conocer',
    titulo: 'Conocer la organización',
    descripcion:
      'Historia, misión, autogestión y el rol del arte en nuestro activismo en las calles del Cusco.',
    href: '/quienes-somos',
    cta: 'Quiénes somos',
  },
  {
    id: 'participar',
    titulo: 'Participar en proyectos',
    descripcion:
      'Iniciativas de arte y formación, espacios de apoyo colectivo y acciones de autoorganización.',
    href: '/proyectos',
    cta: 'Ver proyectos',
  },
  {
    id: 'accion',
    titulo: 'Articular o proponer',
    descripcion:
      'Si quieres sumarte, proponer un taller o colaborar en un proyecto, escríbenos directamente.',
    href: '/contacto',
    cta: 'Escríbenos',
  },
]
