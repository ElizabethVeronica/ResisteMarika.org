import { useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import Container from '@/components/ui/Container'

/** Barra superior tipo MSF / Amnesty: contexto institucional sin distraer */
export default function TopBar() {
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.classList.contains('dark')
  )
  const transitionTimeout = useRef<number | undefined>(undefined)

  const toggleTheme = () => {
    const nextTheme = darkMode ? 'light' : 'dark'
    const root = document.documentElement

    root.classList.add('theme-transition')
    root.classList.toggle('dark', nextTheme === 'dark')
    root.style.colorScheme = nextTheme
    window.localStorage.setItem('resiste-marika-theme', nextTheme)
    setDarkMode(nextTheme === 'dark')

    window.clearTimeout(transitionTimeout.current)
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 400)
  }

  return (
    <div className="bg-brand-darkNavy text-white/90 text-[9px] sm:text-[11px] font-semibold tracking-wide border-b border-white/10">
      <Container className="flex items-center justify-between gap-2 py-1.5 sm:py-2">
        <p className="text-white/70 font-sans">
          LGTBIQ+ · Autogestión · Arte · Colectividad
        </p>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-pressed={darkMode}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[9px] sm:text-[11px] font-bold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purpleSoft"
        >
          {darkMode ? <Sun size={13} /> : <Moon size={13} />}
          {darkMode ? 'Modo claro' : 'Modo oscuro'}
        </button>
      </Container>
    </div>
  )
}
