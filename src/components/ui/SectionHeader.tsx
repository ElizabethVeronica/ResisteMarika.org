import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  pill?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

/**
 * Encabezado de sección con pill opcional, título y subtítulo.
 * Uso: <SectionHeader pill="Nosotros" title="Quiénes somos" subtitle="..." />
 */
export default function SectionHeader({ pill, title, subtitle, align = 'center', className }: SectionHeaderProps) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {pill && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300 uppercase tracking-wide w-fit">
          {pill}
        </span>
      )}
      <h2 className="text-3xl font-bold text-surface-50 sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-surface-200/70 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
