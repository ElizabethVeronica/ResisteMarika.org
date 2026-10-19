import { useEffect, useRef, useState } from 'react'

interface UseCounterOptions {
  end: number
  duration?: number   // ms
  start?: number
}

/**
 * Hook para animar un número desde `start` hasta `end` en `duration` ms.
 * Dispara la animación cuando el elemento entra en el viewport.
 */
export function useCounter({ end, duration = 2000, start = 0 }: UseCounterOptions) {
  const [count, setCount]     = useState(start)
  const [hasRun, setHasRun]   = useState(false)
  const ref                   = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true)
          const startTime   = performance.now()
          const range       = end - start

          const step = (now: number) => {
            const elapsed  = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const ease     = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(start + range * ease))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, start, duration, hasRun])

  return { count, ref }
}
