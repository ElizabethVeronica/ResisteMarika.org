import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

export default function Colabora() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            pill="Colabora"
            title={<>La resistencia es <span className="text-gradient">colectiva</span></>}
            subtitle="Hay muchas formas de sumarte: como voluntarie, donando o aliándote institucionalmente."
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              emoji: '🙋',
              titulo: 'Voluntariado',
              desc: 'Sumá tu tiempo y talento a nuestros programas y actividades.',
            },
            {
              emoji: '💜',
              titulo: 'Donaciones',
              desc: 'Tu aporte económico nos ayuda a sostener nuestro trabajo en la comunidad.',
            },
            {
              emoji: '🤝',
              titulo: 'Alianzas',
              desc: 'Si sos una organización o empresa, podés articular con nosotres.',
            },
          ].map(({ emoji, titulo, desc }, i) => (
            <Reveal key={titulo} delay={i * 0.15}>
              <div className="flex flex-col gap-4 rounded-xl border border-surface-800/60 bg-surface-900 p-8 h-full">
                <div className="text-4xl">{emoji}</div>
                <h3 className="font-display font-bold text-xl text-surface-50">{titulo}</h3>
                <p className="text-surface-300/70 leading-relaxed flex-1">{desc}</p>
                <Button href="/contacto" variant="outline" size="sm">
                  Escribinos
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* TODO: Fase 3 — Agregar formulario de voluntariado, datos de donación */}
      </Container>
    </div>
  )
}
