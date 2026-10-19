import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'

export default function Noticias() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            pill="Noticias"
            title="Últimas novedades"
            subtitle="Comunicados, artículos y noticias de Resiste Marika y la comunidad."
            className="mb-16"
          />
        </Reveal>

        {/* TODO: Fase 4 — Agregar NoticiasGrid con datos estáticos */}
        <Reveal delay={0.2}>
          <div className="rounded-xl border border-surface-800 bg-surface-900/50 p-10 text-center text-surface-400">
            <p className="text-lg">🚧 Sección en construcción — Fase 4</p>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
