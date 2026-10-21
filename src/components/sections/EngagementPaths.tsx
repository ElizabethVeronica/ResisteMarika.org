import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { ENGAGEMENT_PATHS } from '@/config/engagement'

/** Tres caminos claros de acción (patrón Amnesty / ILGA) */
export default function EngagementPaths() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Cómo puedes involucrarte"
          title="Elige tu camino dentro de la red"
          subtitle="Organizamos el sitio como muchas ONG comunitarias: primero entiendes quiénes somos, luego ves en qué participamos y, si te mueve, contactas."
          className="mb-10 max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ENGAGEMENT_PATHS.map((path, index) => (
            <Link
              key={path.id}
              to={path.href}
              className="group flex flex-col h-full rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:border-brand-purple/40 hover:shadow-md transition-all"
            >
              <span className="text-xs font-black font-display text-gray-300 mb-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-purple transition-colors">
                {path.titulo}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed flex-1">{path.descripcion}</p>
              {path.tiempo && (
                <p className="mt-4 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <Clock size={12} aria-hidden />
                  {path.tiempo}
                </p>
              )}
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-purple">
                {path.cta}
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
