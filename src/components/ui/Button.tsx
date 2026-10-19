import { cn } from '@/utils/cn'
import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

// Cuando se usa como <button>
type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    children?: ReactNode
  }

// Cuando se usa como <Link>
type ButtonAsLink = ButtonBaseProps & {
  href: string
  children?: ReactNode
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:   'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-900/40',
  secondary: 'bg-accent-600 text-white hover:bg-accent-500 shadow-lg shadow-accent-900/40',
  outline:   'border border-primary-500 text-primary-300 hover:bg-primary-500/10',
  ghost:     'text-surface-200 hover:text-white hover:bg-surface-800',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-13 px-8 text-base gap-2.5',
}

/**
 * Botón polimórfico: renderiza <button> o <Link> según si recibe `href`.
 * Uso: <Button variant="primary" href="/contacto">Contáctanos</Button>
 */
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
    'inline-flex items-center justify-center rounded-lg font-semibold',
    'transition-all duration-200 ease-out focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'focus-visible:ring-offset-surface-950 disabled:opacity-50 disabled:cursor-not-allowed',
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
