import type { Programa } from '@/types'

export const PROGRAMAS: Programa[] = [
  {
    id: 'ferias-autogestion',
    titulo: 'Autogestión',
    descripcion:
      'Organizamos y participamos en ferias donde personas de la comunidad LGTBIQ+ de Cusco pueden vender sus creaciones en un entorno seguro.',
    objetivo: 'Fomentar la autonomía, la autogestión y la articulación entre personas de la comunidad LGTBIQ+.',
    detalles: [
      'Convocatorias abiertas y participación en ferias en Cusco.',
      'Visibilidad para las creaciones de personas de la comunidad.',
      'Espacios seguros fomentando la autogestión.',
    ],
    imagen: '/images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg',
    categoria: 'Autogestión',
  },
  {
    id: 'artivismo-colectivo',
    titulo: 'Artivismo & Resistencia Creativa',
    descripcion:
      'Desarrollamos artivismo (prints, fanzines, stickers, serigrafía, música y poesía) donde mostramos nuestra resistencia como personas de la comunidad.',
    objetivo: 'Disputar las narrativas públicas a través de la creatividad, el arte y la memoria.',
    detalles: ['Producción artística mostrando nuestra expresión como personas de la comunidad.'],
    imagen: '/images/Presentacion Fanzine colaborativo Manifiesto Marika Vol1 y Vol2.jpg',
    categoria: 'Artivismo',
  },
  {
    id: 'talleres-capacidades',
    titulo: 'Talleres Compartidos & Educación Popular',
    descripcion:
      'Espacios de aprendizaje mutuo donde integrantes y aliades compartimos conocimientos sobre arte, memoria, espiritualidad, salud colectiva y activismo.',
    objetivo: 'Democratizar el conocimiento y potenciar las capacidades individuales y colectivas de la comunidad.',
    detalles: [
      'Talleres presenciales y círculos de formación entre pares.',
      'Espacios de cuidado y salud integral para personas LGTBIQ+ y mujeres.',
      'Herramientas prácticas para el desarrollo de proyectos colectivos.',
    ],
    imagen: '/images/Taller de collage - Ancestralidad Qhariwarmi.jpg',
    categoria: 'Talleres',
  },
  {
    id: 'vigilancia-politicas',
    titulo: 'Vigilancia Ciudadana & Políticas Públicas',
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
