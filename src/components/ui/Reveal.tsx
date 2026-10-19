import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number       // segundos
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

const OFFSET = 28

const directionMap = {
  up:    { y: OFFSET,  x: 0 },
  down:  { y: -OFFSET, x: 0 },
  left:  { x: OFFSET,  y: 0 },
  right: { x: -OFFSET, y: 0 },
  none:  { x: 0,       y: 0 },
}

/**
 * Envuelve cualquier contenido con una animación de entrada al hacer scroll.
 * Uso: <Reveal delay={0.2}><MiComponente /></Reveal>
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: RevealProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const offset = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
