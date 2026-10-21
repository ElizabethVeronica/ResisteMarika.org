import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  pill?: string
  /** Etiqueta superior estilo editorial (MSF, Amnesty, Frida Fund) */
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  light?: boolean
}

export default function SectionHeader({
  pill,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-bold uppercase tracking-wider font-display',
            light ? 'text-brand-yellowWarm' : 'text-brand-purple',
          )}
        >
          {eyebrow}
        </span>
      )}
      {pill && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-bold tracking-wide',
            light
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-brand-purpleLight text-brand-purple border border-brand-purpleSoft/30'
          )}
        >
          {pill}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-extrabold font-display sm:text-4xl lg:text-5xl text-balance leading-tight',
          light ? 'text-white' : 'text-brand-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-sm sm:text-base leading-relaxed font-sans',
            light ? 'text-white/85' : 'text-surface-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
