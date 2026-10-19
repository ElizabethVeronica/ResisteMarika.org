import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  parrafo1:
    'Resiste Marika nace como una respuesta colectiva y autónoma ante la necesidad urgente de visibilidad, justicia y contención comunitaria para las personas LGBTIQ+. Lo que inició como círculos barriales de encuentro y debate autogestivo, se consolidó formalmente como una asociación civil sin fines de lucro comprometida con la defensa integral de los derechos humanos.',
  parrafo2:
    'A lo largo de los años, hemos acompañado a cientos de personas en procesos de afirmación, denuncia de discriminación y desarrollo de liderazgos juveniles. Nuestra labor combina la acción territorial directa con la incidencia política estratégica, manteniendo siempre nuestra autonomía, transparencia y apego al cuidado colectivo.',
}

export const VALORES: ValorInstitucional[] = [
  {
    id: 'interseccionalidad',
    titulo: 'Interseccionalidad',
    descripcion:
      'Comprendemos que las opresiones se cruzan: género, clase, raza, corporalidad y procedencia moldean nuestras experiencias y nuestras luchas.',
    icono: 'Users',
  },
  {
    id: 'autonomia',
    titulo: 'Autonomía & Transparencia',
    descripcion:
      'Actuamos con independencia política y rendición de cuentas pública frente a la comunidad, aliades y donantes.',
    icono: 'ShieldCheck',
  },
  {
    id: 'cuidados',
    titulo: 'Ética del Cuidado Mutuo',
    descripcion:
      'Colocamos la salud mental, el bienestar físico y la contención afectiva en el centro de todas nuestras acciones de resistencia.',
    icono: 'HeartHandshake',
  },
  {
    id: 'justicia',
    titulo: 'Memoria & Justicia Social',
    descripcion:
      'Honramos la memoria histórica de quienes abrieron camino y exigimos reparación y garantías de no repetición.',
    icono: 'Flame',
  },
]

export const EQUIPO: TeamMember[] = [
  {
    id: '1',
    nombre: 'Valeria Castro Morales',
    rol: 'Coordinación General & Dirección Ejecutiva',
    bio: 'Abogada con especialización en derechos humanos y derecho constitucional. Activista trans con más de 7 años de trayectoria en incidencia pública.',
    foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#', linkedin: '#' },
  },
  {
    id: '2',
    nombre: 'Santiago Mendoza R.',
    rol: 'Coordinación de Programas & Acompañamiento',
    bio: 'Psicólogo comunitario orientado a terapias afirmativas y abordaje de estrés de minorías en adolescencias y juventudes de la diversidad.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#', twitter: '#' },
  },
  {
    id: '3',
    nombre: 'Mariana Quispe L.',
    rol: 'Comunicaciones, Prensa & Alianzas',
    bio: 'Comunicadora social y estratega digital. Especialista en campañas de cambio narrativo, pedagogía visual y vocería de causas sociales.',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#', linkedin: '#' },
  },
  {
    id: '4',
    nombre: 'Alex Delgado V.',
    rol: 'Articulación Territorial & Voluntariado',
    bio: 'Gestor cultural y activista barrial. Encargado de la red de voluntariado, logística de eventos comunitarios y vinculación con colectivos aliados.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: '#' },
  },
]

export const ALIANZAS: Alianza[] = [
  { id: '1', nombre: 'Red Nacional de Derechos Humanos', tipo: 'Defensoría', logoText: 'RNDH' },
  { id: '2', nombre: 'Fondo de Acción Diversa', tipo: 'Cooperación', logoText: 'FAD' },
  { id: '3', nombre: 'Colectiva Salud & Género', tipo: 'Salud Comunitaria', logoText: 'CSG' },
  { id: '4', nombre: 'Observatorio Ciudadano por la Igualdad', tipo: 'Investigación', logoText: 'OCI' },
  { id: '5', nombre: 'Federación de Juventudes Diversas', tipo: 'Articulación Juvenil', logoText: 'FJD' },
]
