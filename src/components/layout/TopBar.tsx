import Container from '@/components/ui/Container'

/** Barra superior tipo MSF / Amnesty: contexto institucional sin distraer */
export default function TopBar() {
  return (
    <div className="hidden sm:block bg-brand-darkNavy text-white/90 text-[11px] font-semibold tracking-wide border-b border-white/10">
      <Container className="flex items-center justify-center py-2">
        <p className="text-white/70 font-sans">
          LGTBIQ+ · Autogestión · Arte · Colectividad
        </p>
      </Container>
    </div>
  )
}
