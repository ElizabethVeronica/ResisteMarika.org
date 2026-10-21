import { Calendar, Heart, Shield, Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import { IMPACTO_STATS } from '@/config/impacto'
import { useCounter } from '@/hooks/useCounter'
import { cn } from '@/utils/cn'

const ICONS: Record<string, React.ElementType> = {
  calendar: Calendar,
  heart: Heart,
  star: Star,
  shield: Shield,
}

function ImpactStat({
  valor,
  sufijo,
  etiqueta,
  icono,
}: (typeof IMPACTO_STATS)[number]) {
  const Icon = ICONS[icono ?? 'star'] ?? Star
  const { count, ref } = useCounter({ end: valor, duration: 1800 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col gap-2 border-l border-gray-200 pl-5 first:border-l-0 first:pl-0 sm:min-w-0"
    >
      <div className="flex items-center gap-2 text-brand-purple">
        <Icon size={16} aria-hidden />
        <span className="font-display font-black text-3xl sm:text-4xl text-gray-900 tabular-nums leading-none">
          {count}
          {sufijo}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 font-sans leading-snug max-w-[14rem]">{etiqueta}</p>
    </div>
  )
}

/** Franja de impacto al estilo MSF / reportes anuales de ONG */
export default function ImpactStrip({ className }: { className?: string }) {
  return (
    <section
      className={cn('bg-white border-b border-gray-200 py-10 sm:py-12', className)}
      aria-label="Cifras de nuestra labor comunitaria"
    >
      <Container>
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-display mb-6">
          Nuestro impacto en Cusco
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {IMPACTO_STATS.map((stat) => (
            <ImpactStat key={stat.etiqueta} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
