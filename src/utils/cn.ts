import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina clases Tailwind de forma segura, resolviendo conflictos.
 * Uso: cn('px-4 py-2', condition && 'bg-primary-500', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
