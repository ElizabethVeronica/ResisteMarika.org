// ── Navegación ─────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ── Programa / Área de trabajo ──────────────────────────────
export interface Programa {
  id: string
  titulo: string
  subtitulo?: string
  descripcion: string
  detalles?: string[]
  objetivo?: string
  imagen: string
  icono?: string
  categoria?: string
}

// ── Miembro del equipo ──────────────────────────────────────
export interface TeamMember {
  id: string
  nombre: string
  rol: string
  bio: string
  foto: string
  redes?: {
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

// ── Valor institucional ─────────────────────────────────────
export interface ValorInstitucional {
  id: string
  titulo: string
  descripcion: string
  icono: string
}

// ── Alianza / Partner ───────────────────────────────────────
export interface Alianza {
  id: string
  nombre: string
  tipo: string
  logoText: string
}

// ── Noticia / Comunicado ────────────────────────────────────
export interface Noticia {
  id: string
  titulo: string
  resumen: string
  contenido?: string
  imagen: string
  fecha: string
  categoria: string
  tiempoLectura: string
  slug: string
  destacada?: boolean
}

// ── Preguntas Frecuentes (FAQ) ──────────────────────────────
export interface FAQItem {
  id: string
  pregunta: string
  respuesta: string
  categoria?: string
}

// ── Oportunidades de Voluntariado ───────────────────────────
export interface OportunidadVoluntariado {
  id: string
  rol: string
  area: string
  modalidad: string
  dedicacion: string
  descripcion: string
}

// ── Estadística de impacto ──────────────────────────────────
export interface ImpactoStat {
  valor: number
  sufijo?: string
  etiqueta: string
  icono?: string
  descripcion?: string
}
