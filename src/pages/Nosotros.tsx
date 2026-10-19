import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'

export default function Nosotros() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            pill="Nosotros"
            title="Quiénes somos"
            subtitle="Conocé la historia, los valores y el equipo detrás de Resiste Marika."
            className="mb-16"
          />
        </Reveal>

        {/* TODO: Fase 3 — Agregar QuienesSomos, ValoresSection, EquipoSection, AlianzasSection */}
        <Reveal delay={0.2}>
          <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-10 text-center text-surface-400">
            <p className="text-lg">🚧 Sección en construcción — Fase 3</p>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
