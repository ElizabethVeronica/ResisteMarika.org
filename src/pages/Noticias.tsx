import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, ExternalLink, RefreshCw } from 'lucide-react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  fetchSocialFeed,
  SOCIAL_PROFILES,
  type SocialPost,
} from '@/services/socialFeed'

type FeedStatus = 'idle' | 'loading' | 'ready' | 'error'

function formatPublishedDate(value?: string) {
  if (!value) return null

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null

  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function SocialPostCard({ post, platform }: { post: SocialPost; platform: 'Instagram' | 'TikTok' }) {
  const title = post.title || post.caption
  const publishedDate = formatPublishedDate(post.publishedAt)
  const PlatformIcon = platform === 'Instagram' ? FaInstagram : FaTiktok

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="graphic-card group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-purpleLight via-white to-brand-pinkSoft">
        {post.thumbnailUrl ? (
          <img
            src={post.thumbnailUrl}
            alt={title ? `Publicación de ${platform}: ${title}` : `Publicación reciente de ${platform}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-purple">
            <PlatformIcon size={36} aria-hidden="true" />
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/95 p-2 text-brand-purple shadow-sm">
          <PlatformIcon size={16} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {publishedDate && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
            <CalendarDays size={13} aria-hidden="true" />
            {publishedDate}
          </span>
        )}
        {title && (
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-700">
            {title}
          </p>
        )}
        <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple">
          Ver en {platform}
          <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}

function SocialEmptyState({ configured }: { configured: boolean }) {
  return (
    <div className="graphic-card rounded-3xl border border-dashed border-brand-purple/25 bg-white/70 px-6 py-10 text-center sm:px-10">
      <p className="font-display text-base font-bold text-brand-dark">
        {configured
          ? 'Todavía no hay publicaciones disponibles.'
          : 'Las publicaciones aparecerán aquí cuando se conecte la actualización automática.'}
      </p>
      {!configured && (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-surface-muted">
          La página ya está preparada para recibir las publicaciones recientes desde el servicio
          que se configure para el sitio.
        </p>
      )}
    </div>
  )
}

export default function Noticias() {
  const [feed, setFeed] = useState<{ instagram: SocialPost[]; tiktok: SocialPost[] }>({
    instagram: [],
    tiktok: [],
  })
  const [status, setStatus] = useState<FeedStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [retryKey, setRetryKey] = useState(0)
  const feedConfigured = Boolean(import.meta.env.VITE_SOCIAL_FEED_API_URL)

  useEffect(() => {
    const controller = new AbortController()
    let isCurrentRequest = true

    if (!feedConfigured) {
      return () => controller.abort()
    }

    fetchSocialFeed(controller.signal)
      .then((result) => {
        if (!isCurrentRequest || !result) return
        setFeed(result)
        setStatus('ready')
      })
      .catch((error: unknown) => {
        if (!isCurrentRequest || controller.signal.aborted) return
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'No se pudieron cargar las publicaciones de redes sociales.'
        )
        setStatus('error')
      })

    return () => {
      isCurrentRequest = false
      controller.abort()
    }
  }, [feedConfigured, retryKey])

  const instagramPosts = feed.instagram.slice(0, 6)
  const tiktokPosts = feed.tiktok.slice(0, 3)
  const isLoading = feedConfigured && (status === 'idle' || status === 'loading')

  return (
    <div className="page-art-backdrop bg-surface-light">
      <section className="page-hero">
        <img
          src="/images/Taller de Memoria con el Archivo Marika del Perú 2025.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="page-hero__overlay" />
        <Container className="relative z-10 flex items-center justify-end">
          <Reveal className="w-full">
            <div className="page-hero__content ml-auto text-left lg:text-right">
              <h1 className="page-hero__title">Noticias y comunicados</h1>
              <p className="page-hero__subtitle lg:ml-auto">
                Sigue las publicaciones recientes y novedades de Resiste Marika.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {status === 'error' && (
        <section className="page-section mb-10">
          <Container>
            <Reveal>
            <div
              role="alert"
              className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-center sm:flex-row sm:text-left"
            >
              <p className="text-sm text-red-800">{errorMessage}</p>
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('')
                  setStatus('loading')
                  setRetryKey((current) => current + 1)
                }}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-red-800 transition-colors hover:bg-red-100"
              >
                <RefreshCw size={15} aria-hidden="true" />
                Intentar de nuevo
              </button>
            </div>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="page-section mb-16 pt-12 sm:mb-20 sm:pt-16">
        <Container>
          <Reveal>
            <div className="mb-7 flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
                <div className="flex-1">
                  <SectionHeader
                    title="Últimas publicaciones"
                    subtitle="Memoria, actividades y momentos compartidos desde nuestra cuenta."
                    align="left"
                  />
                </div>
                <a
                  href={SOCIAL_PROFILES.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-brand-purple/20 bg-white px-4 text-sm font-bold text-brand-purple transition-colors hover:bg-brand-purpleLight/50"
                >
                  <FaInstagram size={16} aria-hidden="true" />
                  Ver Instagram
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {isLoading ? (
            <Reveal>
              <p className="rounded-2xl bg-white px-6 py-8 text-center text-sm text-surface-muted">
                Cargando publicaciones…
              </p>
            </Reveal>
          ) : instagramPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {instagramPosts.map((post) => (
                <Reveal key={post.id}>
                  <SocialPostCard post={post} platform="Instagram" />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal><SocialEmptyState configured={feedConfigured} /></Reveal>
          )}
        </Container>
      </section>

      <section className="page-section mb-16 sm:mb-20">
        <Container>
          <Reveal>
            <div className="mb-7 flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
                <div className="flex-1">
                  <SectionHeader
                    title="Últimos videos"
                    subtitle="Videos y registros breves de nuestras acciones y encuentros."
                    align="left"
                  />
                </div>
                <a
                  href={SOCIAL_PROFILES.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-brand-purple/20 bg-white px-4 text-sm font-bold text-brand-purple transition-colors hover:bg-brand-purpleLight/50"
                >
                  <FaTiktok size={16} aria-hidden="true" />
                  Ver TikTok
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {isLoading ? (
            <Reveal>
              <p className="rounded-2xl bg-white px-6 py-8 text-center text-sm text-surface-muted">
                Cargando videos…
              </p>
            </Reveal>
          ) : tiktokPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tiktokPosts.map((post) => (
                <Reveal key={post.id}>
                  <SocialPostCard post={post} platform="TikTok" />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal><SocialEmptyState configured={feedConfigured} /></Reveal>
          )}
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <Reveal>
            <SectionHeader
              title={
                <>
                  Noticias y <span className="text-gradient">comunicados</span>
                </>
              }
              subtitle="Este espacio reunirá futuras noticias, convocatorias y comunicados de la colectiva."
              className="mb-7"
              align="left"
            />
            <div className="graphic-card--stripe rounded-3xl border border-surface-border bg-white px-6 py-10 text-center sm:px-10">
              <p className="font-display text-base font-bold text-brand-dark">
                Aún no hay noticias ni comunicados publicados.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
