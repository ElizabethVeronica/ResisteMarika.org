import type { Programa } from '@/types'

export const PROGRAMAS: Programa[] = [
  {
    id: 'ferias-autogestion',
    titulo: 'Ferias Comunitarias & Autogestión',
    subtitulo: 'Economía solidaria, apoyo mutuo y trabajo digno para la comunidad',
    descripcion:
      'Organizamos y participamos en ferias donde personas de la comunidad LGTBIQ+ de Cusco exhiben y comparten sus artes y creaciones en un entorno seguro y afectivo.',
    objetivo: 'Fomentar la autonomía, el trabajo digno y la articulación solidaria.',
    detalles: [
      'Convocatorias abiertas y participación comunitaria en ferias en Cusco.',
      'Visibilidad para creaciones hechas por personas trans, no binarias y de la diversidad.',
      'Espacios libres de discriminación y con fomento a la autogestión.',
    ],
    imagen: '/images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg',
    categoria: 'Autogestión',
  },
  {
    id: 'artivismo-colectivo',
    titulo: 'Artivismo & Resistencia Creativa',
    subtitulo: 'El arte como trinchera de lucha, pedagogía y afecto colectivo',
    descripcion:
      'Desarrollamos artivismo comunitario (prints, fanzines, stickers, serigrafía, música y batucada) que difunde nuestras demandas y reafirma nuestro orgullo.',
    objetivo: 'Disputar las narrativas públicas a través de la creatividad, el arte y la memoria viva.',
    detalles: [
      'Producción gráfica con mensajes de visibilidad trans, no binaria y LGBTIQ+.',
      'Rifas y actividades culturales para sostener nuestras iniciativas.',
      'Talleres de fanzines, expresión artística y batucada comunitaria.',
    ],
    imagen: '/images/Presentacion Fanzine colaborativo Manifiesto Marika Vol1 y Vol2.jpg',
    categoria: 'Artivismo',
  },
  {
    id: 'talleres-capacidades',
    titulo: 'Talleres Compartidos & Educación Popular',
    subtitulo: 'Socialización horizontal de saberes y fortalecimiento integral',
    descripcion:
      'Espacios de aprendizaje mutuo donde integrantes y aliades compartimos conocimientos sobre arte, memoria, derechos, salud comunitaria y desarrollo personal.',
    objetivo: 'Democratizar el conocimiento y potenciar las capacidades individuales y colectivas de la comunidad.',
    detalles: [
      'Talleres presenciales y círculos de formación entre pares.',
      'Espacios de cuidado y salud integral para personas LGBTIQ+ y mujeres.',
      'Herramientas prácticas para el desarrollo de proyectos comunitarios.',
    ],
    imagen: '/images/Taller de collage - Ancestralidad Qhariwarmi.jpg',
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
      'Monitoreo del acceso a servicios de salud y oportunidades laborales.',
      'Articulación permanente con organizaciones afines locales, nacionales e internacionales.',
    ],
    imagen: '/images/planton 25N.jpg',
    categoria: 'Incidencia',
  },
]
