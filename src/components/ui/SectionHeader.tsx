import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      <h2
        className="text-2xl font-extrabold font-display leading-tight text-balance text-brand-dark sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl font-sans text-sm leading-relaxed text-surface-muted sm:text-base"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
