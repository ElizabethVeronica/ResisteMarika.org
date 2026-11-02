import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const initialTheme = window.localStorage.getItem('resiste-marika-theme') === 'dark'
  ? 'dark'
  : 'light'
document.documentElement.classList.toggle('dark', initialTheme === 'dark')
document.documentElement.style.colorScheme = initialTheme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
