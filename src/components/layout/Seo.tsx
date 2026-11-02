import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim()
const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : null

if (siteUrl && siteUrl.protocol !== 'https:') {
  throw new Error('VITE_SITE_URL must use HTTPS.')
}

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Resiste Marika | Autogestión y artivismo en Cusco',
    description:
      'Resiste Marika es una colectiva autoorganizada en Cusco que impulsa la autogestión, el arte, el activismo y los derechos de la comunidad LGTBIQ+.',
  },
  '/quienes-somos': {
    title: 'Nosotres | Resiste Marika',
    description:
      'Conoce a Resiste Marika, colectiva de Cusco que construye espacios de encuentro, memoria, autogestión y defensa de derechos.',
  },
  '/proyectos': {
    title: 'Proyectos | Resiste Marika',
    description:
      'Explora los proyectos, talleres y acciones comunitarias de Resiste Marika en Cusco.',
  },
  '/multimedia': {
    title: 'Multimedia | Resiste Marika',
    description:
      'Fotografías y memoria visual de las actividades, encuentros y acciones de Resiste Marika.',
  },
  '/noticias': {
    title: 'Noticias | Resiste Marika',
    description:
      'Novedades, convocatorias y actividades de Resiste Marika y de la comunidad LGTBIQ+.',
  },
  '/contacto': {
    title: 'Contacto | Resiste Marika',
    description:
      'Contacta a Resiste Marika para participar en ferias, coordinar talleres o proponer actividades colectivas.',
  },
  '/privacidad': {
    title: 'Aviso de privacidad | Resiste Marika',
    description:
      'Información sobre el uso de los datos enviados mediante los formularios de contacto de Resiste Marika.',
  },
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.append(meta)
  }
  meta.content = content
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] ?? pages['/']
    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)

    if (siteUrl) {
      const canonicalPath = `${import.meta.env.BASE_URL}${pathname.replace(/^\/+/, '')}`
      const canonicalUrl = new URL(canonicalPath, siteUrl.origin).toString()
      const socialImageUrl = new URL(
        `${import.meta.env.BASE_URL}images/logo png.webp`,
        siteUrl.origin,
      ).toString()
      setMeta('property', 'og:url', canonicalUrl)
      setMeta('property', 'og:image', socialImageUrl)
      setMeta('name', 'twitter:image', socialImageUrl)
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = canonicalUrl
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove()
      document.head.querySelector('meta[property="og:image"]')?.remove()
      document.head.querySelector('meta[name="twitter:image"]')?.remove()
      document.head.querySelector('link[rel="canonical"]')?.remove()
    }
  }, [pathname])

  return null
}
