import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  pill?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  light?: boolean
}

export default function SectionHeader({
  pill,
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
    <div className={cn('flex flex-col gap-3.5', alignClass, className)}>
      {pill && (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider',
            light
              ? 'bg-white/15 text-white border border-white/20'
              : 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20'
          )}
        >
          {pill}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold font-display sm:text-4xl lg:text-5xl text-balance leading-tight',
          light ? 'text-white' : 'text-brand-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-sm sm:text-base leading-relaxed',
            light ? 'text-white/80' : 'text-surface-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
