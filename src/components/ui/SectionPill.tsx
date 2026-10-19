import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface SectionPillProps {
  children: ReactNode
  className?: string
}

/**
 * Etiqueta tipo "pill" para encabezar secciones.
 * Uso: <SectionPill>Sobre nosotros</SectionPill>
 */
export default function SectionPill({ children, className }: SectionPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-primary-500/40',
        'bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300',
        'tracking-wide uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
