import type { Noticia } from '@/types'

export const NOTICIAS: Noticia[] = [
  {
    id: '1',
    titulo: 'Rimanakuy Marika 2025: Investigaciones sobre la Memoria Andina LGTBIQ+',
    resumen:
      'Círculo de diálogo e investigaciones colectivas sobre memoria disidente andina, identidades históricas y resistencia en el Cusco.',
    imagen: `${import.meta.env.BASE_URL}images/Rimanakuy Marika 2025  - Investigaciones sobre la Memoria Andina LGTBIQ.png`,
    fecha: '2025',
    categoria: 'Memoria',
    tiempoLectura: '5 min lectura',
    slug: 'rimanakuy-marika-2025',
    destacada: true,
  },
  {
    id: '2',
    titulo: 'Taller de Memoria con el Archivo Marika del Perú',
    resumen:
      'Jornada de rescate y preservación colectiva de archivos, fanzines y documentos vivos de la resistencia marika en el Perú.',
    imagen: `${import.meta.env.BASE_URL}images/Taller de Memoria con el Archivo Marika del Perú 2025.png`,
    fecha: '2025',
    categoria: 'Formación',
    tiempoLectura: '4 min lectura',
    slug: 'taller-memoria-archivo-marika',
    destacada: false,
  },
  {
    id: '3',
    titulo: 'Marika Fest 2024: Feria Colectiva y Autogestión LGTBIQ+ en Cusco',
    resumen:
      'Espacio autogestionado de arte disidente, productos de concientización, talleres de cuidado y sanación colectiva.',
    imagen: `${import.meta.env.BASE_URL}images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg`,
    fecha: '2024',
    categoria: 'Autogestión',
    tiempoLectura: '4 min lectura',
    slug: 'marika-fest-2024',
    destacada: false,
  },
  {
    id: '4',
    titulo: 'Plantón 25N: Pronunciamiento contra la Violencia hacia las Mujeres',
    resumen:
      'Acción en las calles de Cusco exigiendo justicia, vidas libres de violencia y celeridad en las investigaciones por crímenes de odio.',
    imagen: `${import.meta.env.BASE_URL}images/planton 25N.jpg`,
    fecha: '25 de noviembre',
    categoria: 'Comunicado',
    tiempoLectura: '4 min lectura',
    slug: 'planton-25n-violencia',
    destacada: false,
  },
  {
    id: '5',
    titulo: 'Piquete informativo y sensibilización en el Día Mundial del Sida',
    resumen:
      'Jornada callejera en Cusco de información sobre salud sexual, prevención de ITS y exigibilidad de atención médica digna.',
    imagen: `${import.meta.env.BASE_URL}images/Piquete Informativo de ETS y Sensibilización Dia Mundial del SIDA.jpg`,
    fecha: '1 de diciembre',
    categoria: 'Salud',
    tiempoLectura: '3 min lectura',
    slug: 'piquete-informativo-dia-mundial-sida',
    destacada: false,
  },
  {
    id: '6',
    titulo: 'Presentación del Fanzine Colaborativo: Manifiesto Marika Vol. 1 y 2',
    resumen:
      'Publicación impresa con textos, ilustraciones y poesía de integrantes de la red como herramienta de artivismo y memoria viva.',
    imagen: `${import.meta.env.BASE_URL}images/Presentacion Fanzine colaborativo Manifiesto Marika Vol1 y Vol2.jpg`,
    fecha: 'Cusco',
    categoria: 'Artivismo',
    tiempoLectura: '3 min lectura',
    slug: 'presentacion-fanzine-manifiesto-marika',
    destacada: false,
  },
]
