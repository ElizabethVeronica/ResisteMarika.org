import type { Programa } from '@/types'

export const PROGRAMAS: Programa[] = [
  {
    id: 'ferias-autogestion',
    titulo: 'Ferias de Emprendimiento & Autogestión',
    subtitulo: 'Economía solidaria, apoyo mutuo y trabajo digno para la comunidad',
    descripcion:
      'Organizamos y participamos en ferias donde personas de la comunidad LGTBIQ+ de Cusco exhiben y comercializan sus artes, artesanías y emprendimientos en un entorno seguro y afectivo.',
    objetivo: 'Fomentar la independencia económica, el autoempleo y la articulación solidaria entre emprendedores disidentes.',
    detalles: [
      'Convocatorias abiertas y cuotas solidarias para ferias en Cusco.',
      'Visibilidad para productos hechos por personas trans, no binarias y de la diversidad.',
      'Espacios libres de discriminación y con fomento al comercio justo.',
    ],
    imagen: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    categoria: 'Autogestión',
  },
  {
    id: 'artivismo-colectivo',
    titulo: 'Artivismo & Resistencia Creativa',
    subtitulo: 'El arte como trinchera de lucha, pedagogía y ternura colectiva',
    descripcion:
      'Creamos y comercializamos mercancía de artivismo (prints, fanzines, stickers, serigrafía) que difunde nuestras demandas, financia las actividades del colectivo y reafirma nuestro orgullo.',
    objetivo: 'Disputar las narrativas públicas a través de la creatividad, la belleza disidente y la memoria histórica.',
    detalles: [
      'Producción gráfica con mensajes de visibilidad trans, no binaria y LGBTIQ+.',
      'Rifas y actividades culturales para financiar proyectos colectivos.',
      'Talleres de zines y expresión artística comunitaria.',
    ],
    imagen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    categoria: 'Artivismo',
  },
  {
    id: 'talleres-capacidades',
    titulo: 'Talleres Compartidos & Educación Popular',
    subtitulo: 'Socialización horizontal de saberes y fortalecimiento integral',
    descripcion:
      'Espacios de aprendizaje mutuo donde integrantes y aliades comparten conocimientos sobre salud, derechos, oficios productivos, recreación y desarrollo personal.',
    objetivo: 'Democratizar el conocimiento y potenciar las capacidades individuales y colectivas de la comunidad.',
    detalles: [
      'Talleres presenciales y círculos de formación entre pares.',
      'Espacios de recreación y salud integral para personas LGBTIQ+ y mujeres.',
      'Herramientas prácticas para el desarrollo de emprendimientos.',
    ],
    imagen: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    categoria: 'Formación',
  },
  {
    id: 'vigilancia-politicas',
    titulo: 'Vigilancia Ciudadana & Políticas Públicas',
    subtitulo: 'Participación ciudadana, concertación y exigibilidad de derechos',
    descripcion:
      'Participamos activamente en los espacios de concertación y gestión participativa distritales en Cusco, promoviendo ordenanzas y políticas públicas en favor de la comunidad y mujeres.',
    objetivo: 'Garantizar el cumplimiento efectivo de derechos fundamentales como salud, empleo, educación y vida libre de violencia.',
    detalles: [
      'Seguimiento a planes y ordenanzas distritales y regionales en Cusco.',
      'Monitoreo del acceso a servicios de salud y oportunidades de empleo.',
      'Articulación permanente con organizaciones afines locales, nacionales e internacionales.',
    ],
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    categoria: 'Incidencia',
  },
]
