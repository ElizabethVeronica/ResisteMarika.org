import type { Programa } from '@/types'

/**
 * Datos de los programas/áreas de trabajo de Resiste Marika.
 * TODO: Reemplazar con datos reales de la organización.
 */
export const PROGRAMAS: Programa[] = [
  {
    id: 'derechos',
    titulo: 'Defensa de Derechos',
    descripcion:
      'Acompañamos a personas LGBTIQ+ en situaciones de vulneración de derechos, brindando orientación legal y psicológica.',
    icono: 'shield',
    color: 'primary',
  },
  {
    id: 'educacion',
    titulo: 'Educación y Sensibilización',
    descripcion:
      'Talleres, charlas y materiales formativos en escuelas, universidades y organizaciones para promover el respeto a la diversidad.',
    icono: 'book-open',
    color: 'accent',
  },
  {
    id: 'comunidad',
    titulo: 'Comunidad y Salud',
    descripcion:
      'Espacios seguros de encuentro, grupos de apoyo y acceso a servicios de salud integral para la comunidad.',
    icono: 'heart',
    color: 'primary',
  },
  {
    id: 'incidencia',
    titulo: 'Incidencia Política',
    descripcion:
      'Trabajamos con organismos públicos y otros actores para impulsar políticas de igualdad y no discriminación.',
    icono: 'megaphone',
    color: 'accent',
  },
]
