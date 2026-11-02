import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.45,
}: RevealProps) {
  const isTouchDevice =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (isTouchDevice || prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <AnimatedReveal
      className={className}
      delay={delay}
      direction={direction}
      duration={duration}
    >
      {children}
    </AnimatedReveal>
  )
}

interface AnimatedRevealProps {
  children: ReactNode
  className?: string
  delay: number
  direction: NonNullable<RevealProps['direction']>
  duration: number
}

function AnimatedReveal({
  children,
  className,
  delay,
  direction,
  duration,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-100px' },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
  }

  return (
    <div
      ref={ref}
      className={className ? `reveal-item ${className}` : 'reveal-item'}
      data-visible={visible}
      data-direction={direction}
      style={style}
    >
      {children}
    </div>
  )
}
