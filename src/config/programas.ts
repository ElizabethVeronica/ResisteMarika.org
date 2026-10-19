import type { Programa } from '@/types'

export const PROGRAMAS: Programa[] = [
  {
    id: 'derechos-asesoria',
    titulo: 'Defensa de Derechos & Acompañamiento',
    subtitulo: 'Asesoría legal, contención psicosocial y orientación ante vulneraciones',
    descripcion:
      'Brindamos espacios de orientación confidencial y gratuita a personas LGBTIQ+ cuyos derechos hayan sido vulnerados en ámbitos laborales, educativos, familiares o institucionales.',
    objetivo: 'Garantizar el acceso efectivo a la justicia, la reparación y el soporte emocional de la comunidad.',
    detalles: [
      'Orientación legal personalizada ante casos de discriminación.',
      'Acompañamiento psicosocial con enfoque interseccional y afirmativo.',
      'Canalización con redes aliadas de defensoría pública y salud mental.',
    ],
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    categoria: 'Acompañamiento',
  },
  {
    id: 'escuela-formacion',
    titulo: 'Escuela de Liderazgo & Formación',
    subtitulo: 'Talleres, laboratorios comunitarios y pedagogías diversas',
    descripcion:
      'Programa de formación política, activismo digital, comunicación inclusiva y herramientas de incidencia para juventudes y activistas de la diversidad sexual y de género.',
    objetivo: 'Fortalecer las capacidades de incidencia, vocería y articulación de líderes comunitaries.',
    detalles: [
      'Ciclos de talleres semestrales presenciales y virtuales.',
      'Laboratorios de creación artística, zines y fanzines de resistencia.',
      'Mentorías entre pares y formación en derechos humanos.',
    ],
    imagen: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    categoria: 'Formación',
  },
  {
    id: 'espacios-seguros',
    titulo: 'Cultura, Encuentro & Redes de Cuidado',
    subtitulo: 'Construcción de comunidad, salud integral y espacios libres de violencia',
    descripcion:
      'Impulsamos encuentros culturales, ferias autogestivas, clubes de lectura y actividades recreativas que fortalecen el tejido social y la salud colectiva de nuestra comunidad.',
    objetivo: 'Crear refugios comunitarios de bienestar, celebración de las identidades y autocuidado.',
    detalles: [
      'Círculos de escucha y grupos de apoyo mutuo mensuales.',
      'Festivales de arte cuir, ferias de emprendimientos disidentes.',
      'Jornadas de salud sexual integral y prevención comunitaria.',
    ],
    imagen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    categoria: 'Comunidad',
  },
  {
    id: 'incidencia-politica',
    titulo: 'Incidencia Política & Monitoreo Ciudadano',
    subtitulo: 'Políticas públicas, diálogo institucional y producción de datos',
    descripcion:
      'Articulamos con organismos nacionales e internacionales para vigilar el cumplimiento de estándares de derechos humanos, promoviendo ordenanzas y leyes antidiscriminatorias.',
    objetivo: 'Transformar el marco normativo y social hacia una igualdad real y sustantiva.',
    detalles: [
      'Informes anuales sobre situación de derechos y violencia por prejuicio.',
      'Mesas de trabajo y diálogo con instituciones públicas y gobiernos locales.',
      'Campañas de sensibilización ciudadana y monitoreo legislativo.',
    ],
    imagen: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    categoria: 'Incidencia',
  },
]
