export interface SocialPost {
  id: string
  url: string
  title?: string
  caption?: string
  thumbnailUrl?: string
  publishedAt?: string
}

export interface SocialFeed {
  instagram: SocialPost[]
  tiktok: SocialPost[]
}

// The API returns newest-first arrays using this shape. The page displays at most 6
// Instagram posts and 3 TikTok videos.
export const SOCIAL_PROFILES = {
  instagram: 'https://www.instagram.com/resiste.marika.cusco/',
  tiktok: 'https://www.tiktok.com/@resistemarik',
} as const

const SOCIAL_FEED_API_URL = import.meta.env.VITE_SOCIAL_FEED_API_URL

function isSecureUrl(value: string) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

function isSocialPost(value: unknown): value is SocialPost {
  if (typeof value !== 'object' || value === null) return false

  const post = value as Record<string, unknown>
  return (
    typeof post.id === 'string' &&
    typeof post.url === 'string' &&
    isSecureUrl(post.url) &&
    (post.title === undefined || typeof post.title === 'string') &&
    (post.caption === undefined || typeof post.caption === 'string') &&
    (post.thumbnailUrl === undefined ||
      (typeof post.thumbnailUrl === 'string' && isSecureUrl(post.thumbnailUrl))) &&
    (post.publishedAt === undefined || typeof post.publishedAt === 'string')
  )
}

function isPostList(value: unknown): value is SocialPost[] {
  return Array.isArray(value) && value.every(isSocialPost)
}

function isSocialFeed(value: unknown): value is SocialFeed {
  if (typeof value !== 'object' || value === null) return false

  const feed = value as Record<string, unknown>
  return isPostList(feed.instagram) && isPostList(feed.tiktok)
}

export async function fetchSocialFeed(signal: AbortSignal): Promise<SocialFeed | null> {
  if (!SOCIAL_FEED_API_URL) return null

  const response = await fetch(SOCIAL_FEED_API_URL, {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`No se pudo cargar el feed social (HTTP ${response.status}).`)
  }

  const payload: unknown = await response.json()
  if (!isSocialFeed(payload)) {
    throw new Error('El servidor devolvió un formato de feed social no válido.')
  }

  return payload
}
