import type { ImpactoStat } from '@/types'

/**
 * Estadísticas de impacto para la sección de contadores animados.
 * TODO: Reemplazar con datos reales de la organización.
 */
export const IMPACTO_STATS: ImpactoStat[] = [
  { valor: 500,  sufijo: '+', etiqueta: 'Personas acompañadas',    icono: 'users' },
  { valor: 5,               etiqueta: 'Años de trabajo',          icono: 'calendar' },
  { valor: 120,  sufijo: '+', etiqueta: 'Actividades realizadas',  icono: 'star' },
  { valor: 15,               etiqueta: 'Alianzas institucionales', icono: 'handshake' },
]
