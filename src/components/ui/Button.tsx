import { cn } from '@/utils/cn'
import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    children?: ReactNode
  }

type ButtonAsLink = ButtonBaseProps & {
  href: string
  children?: ReactNode
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:   'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-md shadow-brand-purple/20',
  secondary: 'bg-brand-magenta text-white hover:bg-brand-magenta/90 shadow-md shadow-brand-magenta/25',
  accent:    'bg-brand-cyan text-brand-dark hover:bg-brand-cyan/90 font-bold shadow-md shadow-brand-cyan/25',
  outline:   'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
  ghost:     'text-brand-dark hover:text-brand-purple hover:bg-brand-purple/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs font-semibold uppercase tracking-wider gap-1.5',
  md: 'h-11 px-6 text-sm font-semibold gap-2',
  lg: 'h-13 px-8 text-base font-bold gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center rounded-xl font-sans',
    'transition-all duration-200 ease-out focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {icon && iconPosition === 'left'  && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if ('href' in props && props.href != null) {
    const { href } = props
    return (
      <Link to={href} className={baseClass}>
        {content}
      </Link>
    )
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton & { href?: never }
  return (
    <button className={baseClass} {...buttonProps}>
      {content}
    </button>
  )
}
