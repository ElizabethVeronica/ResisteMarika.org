// ── Navegación ─────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ── Programa / Área de trabajo ──────────────────────────────
export interface Programa {
  id: string
  titulo: string
  descripcion: string
  imagen?: string
  icono?: string
  color?: string
}

// ── Miembro del equipo ──────────────────────────────────────
export interface TeamMember {
  nombre: string
  rol: string
  bio?: string
  foto?: string
  redes?: {
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

// ── Noticia / Artículo ──────────────────────────────────────
export interface Noticia {
  id: string
  titulo: string
  resumen: string
  contenido?: string
  imagen?: string
  fecha: string
  categoria?: string
  slug: string
}

// ── Estadística de impacto ──────────────────────────────────
export interface ImpactoStat {
  valor: number
  sufijo?: string
  etiqueta: string
  icono?: string
}
