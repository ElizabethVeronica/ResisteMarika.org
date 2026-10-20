import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  fundacion: '7 de agosto del 2023',
  ciudad: 'Cusco, Perú',
  parrafo1:
    'RESISTE MARIKA CUSCO nació el 7 de agosto del 2023 con el sueño de ser una red de apoyo que pueda organizar espacios de autogestión donde la comunidad LGTBIQ pueda vender sus artes y construir sus emprendimientos desde el apoyo mutuo.',
  parrafo2:
    'Nos dimos cuenta de que muchas actividades del activismo dependían del financiamiento de ONGs para existir. Estos grandes montos de dinero han generado un fuerte deterioro en las relaciones entre activistas y que se pierda de vista nuestra fortaleza más grande: la solidaridad y la interdependencia.',
  parrafo3:
    'Hasta ahora, la gran parte de las actividades que realizamos son posibles mediante la autogestión. Cada miembro aporta con cuotas, realizamos rifas, organizamos y participamos en ferias, compartimos talleres y vendemos mercancía de nuestro artivismo.',
}

export const MISION_VISION = {
  mision:
    'Construir una red comunitaria, autónoma y solidaria en Cusco que promueva la autogestión económica, el artivismo, la protección mutua y la satisfacción de los derechos fundamentales de las personas LGBTIQ+ y mujeres.',
  vision:
    'Ser un referente de activismo colectivo e independiente en el Perú que demuestre que el cuidado mutuo, la solidaridad y la autogestión son el camino para transformar nuestras realidades sin perder nuestra esencia comunitaria.',
}

export const OBJETIVOS_ESTRATEGICOS = [
  {
    id: 'derechos',
    titulo: 'Derechos Fundamentales',
    descripcion:
      'Buscar la satisfacción de los derechos fundamentales de sus integrantes y de la comunidad como salud, empleo, desarrollo económico y productivo, educación y recreación, junto con otras organizaciones afines.',
    icono: 'Heart',
    tag: 'Salud & Empleo',
  },
  {
    id: 'politicas',
    titulo: 'Políticas Públicas',
    descripcion:
      'Fortalecer las capacidades de los miembros para aportar en la formulación de políticas públicas en favor de la comunidad.',
    icono: 'FileText',
    tag: 'Incidencia',
  },
  {
    id: 'vigilancia',
    titulo: 'Vigilancia Ciudadana',
    descripcion:
      'Participar en los procesos, espacios e instancias de vigilancia ciudadana, concertación y gestión participativa distritales existentes, y en aquéllos que se instituyan en adelante.',
    icono: 'Eye',
    tag: 'Participación',
  },
  {
    id: 'desarrollo',
    titulo: 'Desarrollo Integral',
    descripcion:
      'Promover e impulsar proyectos y programas de desarrollo integral con el fin de fortalecer las capacidades de las y los integrantes y de la comunidad en general.',
    icono: 'Sparkles',
    tag: 'Capacidades',
  },
  {
    id: 'mujeres-lgbtiq',
    titulo: 'Reconocimiento y Valoración',
    descripcion:
      'Reconocer y valorar el rol y los derechos de la población LGBTIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
    icono: 'Users',
    tag: 'Intergeneracional',
  },
  {
    id: 'articulacion',
    titulo: 'Articulación & Redes',
    descripcion:
      'Impulsar la creación, el fortalecimiento y coordinación permanente con organizaciones afines y superiores estatales y privadas de ámbito nacional e internacional.',
    icono: 'Network',
    tag: 'Alianzas',
  },
]

export const FORMAS_AUTOGESTION = [
  {
    id: 'ferias',
    titulo: 'Ferias de Emprendimiento',
    descripcion: 'Espacios seguros y comunitarios donde integrantes de la diversidad venden sus creaciones, arte y productos.',
    emoji: '🎪',
  },
  {
    id: 'artivismo',
    titulo: 'Venta de Artivismo',
    descripcion: 'Mercancía autogestiva, zines, prints y diseños que transmiten nuestros mensajes de lucha y ternura radical.',
    emoji: '🎨',
  },
  {
    id: 'talleres',
    titulo: 'Talleres Compartidos',
    descripcion: 'Espacios formativos dictados por miembres del colectivo para socializar saberes prácticos y afectivos.',
    emoji: '🌱',
  },
  {
    id: 'cuotas-rifas',
    titulo: 'Cuotas & Rifas Solidarias',
    descripcion: 'Sostenimiento financiero horizontal e independiente con aportes voluntarios y actividades benéficas internas.',
    emoji: '🎟️',
  },
]

export const VALORES: ValorInstitucional[] = [
  {
    id: 'autogestion',
    titulo: 'Autogestión Colectiva',
    descripcion:
      'Sostenemos nuestras acciones con trabajo propio, cuotas y actividades solidarias sin condicionamientos externos.',
    icono: 'Sparkles',
  },
  {
    id: 'solidaridad',
    titulo: 'Solidaridad e Interdependencia',
    descripcion:
      'Creemos que nadie se salva sole; nuestro poder radica en reconocernos mutuamente y apoyarnos día a día.',
    icono: 'HeartHandshake',
  },
  {
    id: 'artivismo',
    titulo: 'Artivismo & Ternura Radical',
    descripcion:
      'El arte es trinchera y abrazo. Resistimos desde la belleza, el afecto y la creatividad disidente.',
    icono: 'Palette',
  },
  {
    id: 'vigilancia',
    titulo: 'Vigilancia & Dignidad',
    descripcion:
      'Exigimos derechos plenos, educación, salud y empleo digno para la comunidad LGBTIQ+ y mujeres en Cusco.',
    icono: 'ShieldCheck',
  },
]

export const EQUIPO: TeamMember[] = [
  {
    id: '1',
    nombre: 'Elizabeth Huamán',
    rol: 'Coordinación & Articulación Comunitaria',
    bio: 'Activista cusqueña comprometida con la defensa de derechos, la autogestión y el fortalecimiento de redes de cuidado mutuo en Cusco.',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#' },
  },
  {
    id: '2',
    nombre: 'Coordinación de Ferias & Emprendimientos',
    rol: 'Gestión Económica Solidaria',
    bio: 'Impulso de espacios de comercio justo, ferias de artivismo y acompañamiento a emprendedores de la comunidad LGTBIQ+.',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#' },
  },
  {
    id: '3',
    nombre: 'Coordinación de Talleres & Formación',
    rol: 'Pedagogías Comunitarias',
    bio: 'Dinamización de talleres entre pares, artivismo disidente y espacios de fortalecimiento de capacidades.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#' },
  },
  {
    id: '4',
    nombre: 'Incidencia & Vigilancia Ciudadana',
    rol: 'Políticas Públicas y Derechos',
    bio: 'Seguimiento de ordenanzas, derechos fundamentales en salud y trabajo, y articulación con organizaciones afines.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#' },
  },
]

export const ALIANZAS: Alianza[] = [
  { id: '1', nombre: 'Colectivos LGTBIQ+ de Cusco', tipo: 'Articulación Local', logoText: 'CUSCO' },
  { id: '2', nombre: 'Red de Emprendimientos Disidentes', tipo: 'Economía Solidaria', logoText: 'RED' },
  { id: '3', nombre: 'Organizaciones de Mujeres y DDHH', tipo: 'Defensa de Derechos', logoText: 'DDHH' },
  { id: '4', nombre: 'Espacios de Artivismo & Cultura', tipo: 'Cultura Libre', logoText: 'ARTE' },
  { id: '5', nombre: 'Instancias de Vigilancia Ciudadana', tipo: 'Gestión Pública', logoText: 'VIGILA' },
]
