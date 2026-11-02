export function shouldUseViewTransition() {
  return typeof window === 'undefined' || !window.matchMedia('(pointer: coarse)').matches
}
