import { useSyncExternalStore } from 'react'

/**
 * Tracks whether a View Transition is currently active.
 * Returns `true` during view-transitionstart … view-transitionfinish.
 * On browsers without the View Transitions API, always returns `false`.
 */
function getSnapshot(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('vt-active')
}

function getServerSnapshot(): boolean {
  return false
}

export function useViewTransition(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function subscribe(callback: () => void): () => void {
  if (typeof document === 'undefined' || typeof document.startViewTransition !== 'function') {
    return () => {}
  }

  const handleStart = () => {
    document.documentElement.classList.add('vt-active')
    callback()
  }
  const handleFinish = () => {
    document.documentElement.classList.remove('vt-active')
    callback()
  }

  document.addEventListener('viewtransitionstart', handleStart)
  document.addEventListener('viewtransitionfinish', handleFinish)

  return () => {
    document.documentElement.classList.remove('vt-active')
    document.removeEventListener('viewtransitionstart', handleStart)
    document.removeEventListener('viewtransitionfinish', handleFinish)
  }
}