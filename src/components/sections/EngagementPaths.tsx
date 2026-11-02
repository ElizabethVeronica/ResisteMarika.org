import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import { ENGAGEMENT_PATHS } from '@/config/engagement'

/** Tres caminos claros de acción (patrón Amnesty / ILGA) */
export default function EngagementPaths() {
  return (
    <section className="page-section page-section--photo relative isolate overflow-hidden border-b border-gray-200 py-14 sm:py-20">
      <img
        src="/images/3er Reencuentro Plurisexual en La Paz, Bolivia 2025.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="photo-section__overlay" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl py-8 text-white">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Acompáñanos
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-white/90 sm:text-lg">
              Nos organizamos con colectivas aliadas. Anímate a participar con nosotres y contáctanos.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/30 border-y border-white/30 md:grid-cols-3 md:divide-x md:divide-y-0">
            {ENGAGEMENT_PATHS.map((path) => (
              <Link
                key={path.id}
                to={path.href}
                className="group flex h-full flex-col py-6 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <h3 className="mb-2 font-display text-lg font-bold text-white transition-colors group-hover:text-brand-pink">
                  {path.titulo}
                </h3>
                <p className="flex-1 font-sans text-sm leading-relaxed text-white/80">{path.descripcion}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white">
                  {path.cta}
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
