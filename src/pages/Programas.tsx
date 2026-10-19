import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import { PROGRAMAS } from '@/config/programas'

export default function Programas() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            pill="Programas"
            title="Nuestras áreas de trabajo"
            subtitle="Cada programa es una forma de resistencia y construcción de comunidad."
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROGRAMAS.map((programa, i) => (
            <Reveal key={programa.id} delay={i * 0.1}>
              <div className="rounded-xl border border-surface-800/60 bg-surface-900 p-8">
                <h3 className="font-display font-bold text-xl text-surface-50 mb-3">
                  {programa.titulo}
                </h3>
                <p className="text-surface-300/70 leading-relaxed">
                  {programa.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* TODO: Fase 3 — Agregar imágenes, detalles, actividades por programa */}
      </Container>
    </div>
  )
}
