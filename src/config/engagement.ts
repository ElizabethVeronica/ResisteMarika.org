/** Rutas de participación inspiradas en portales tipo Amnesty / Frida Fund */
export interface EngagementPath {
  id: string
  titulo: string
  descripcion: string
  href: string
  cta: string
  tiempo?: string
}

export const ENGAGEMENT_PATHS: EngagementPath[] = [
  {
    id: 'conocer',
    titulo: 'Conocer la organización',
    descripcion:
      'Historia, misión, autogestión y el rol del arte en nuestro activismo en las calles del Cusco.',
    href: '/quienes-somos',
    cta: 'Quiénes somos',
    tiempo: '~5 min de lectura',
  },
  {
    id: 'participar',
    titulo: 'Participar en proyectos',
    descripcion:
      'Ferias colectivas, talleres de batucada, arte drag y espacios de apoyo colectivo y auto-organización.',
    href: '/proyectos',
    cta: 'Ver proyectos',
    tiempo: 'Explorar actividades',
  },
  {
    id: 'accion',
    titulo: 'Articular o proponer',
    descripcion:
      'Si quieres sumarte, proponer un taller o colaborar en una feria, escríbenos directamente.',
    href: '/contacto',
    cta: 'Escríbenos',
    tiempo: 'Respuesta por correo o redes',
  },
]
