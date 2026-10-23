import { cn } from '@/utils/cn'
import { type ReactNode, type ButtonHTMLAttributes, type MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'yellow' | 'dark' | 'outline' | 'ghost'
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
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  // Morado / Lavanda NB
  primary:   'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-md shadow-brand-purple/20',
  // Rosa Trans suave y tierno
  secondary: 'bg-brand-pink text-brand-dark hover:bg-brand-pinkSoft shadow-md shadow-brand-pink/25 font-bold',
  // Celeste Trans cielo
  accent:    'bg-brand-sky text-brand-dark hover:bg-brand-skySoft shadow-md shadow-brand-sky/25 font-bold',
  // Amarillo NB cálido
  yellow:    'bg-brand-yellowWarm text-brand-dark hover:bg-brand-yellow shadow-md shadow-brand-yellowWarm/25 font-bold',
  // Pizarra institucional serio
  dark:      'bg-brand-dark text-white hover:bg-brand-charcoal shadow-md shadow-brand-dark/20',
  // Contorno suave
  outline:   'border-2 border-brand-purple text-brand-purple hover:bg-brand-purpleLight font-bold',
  ghost:     'text-brand-dark hover:text-brand-purple hover:bg-brand-purpleLight/60 font-semibold',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs font-bold tracking-wide gap-1.5 rounded-xl',
  md: 'h-11 px-5 text-sm font-bold gap-2 rounded-2xl',
  lg: 'h-13 px-7 text-base font-bold gap-2.5 rounded-2xl',
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
    'inline-flex items-center justify-center font-sans tracking-normal',
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
    const { href, onClick } = props
    return (
      <Link to={href} viewTransition className={baseClass} onClick={onClick}>
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
