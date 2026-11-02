export interface SubNavLink {
  label: string
  href: string
  descripcion?: string
}

export interface NavLink {
  label: string
  href: string
  children?: SubNavLink[]
}

export interface Programa {
  id: string
  titulo: string
  descripcion: string
  detalles?: string[]
  objetivo?: string
  imagen: string
  categoria?: string
}

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
