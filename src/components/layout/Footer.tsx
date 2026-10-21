import { Link } from 'react-router-dom'
import { Mail, Heart, Sparkles, MapPin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import Container from '@/components/ui/Container'
import { NAV_LINKS } from '@/config/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Franja superior con la bandera Trans y No Binaria */}
      <div className="h-2 w-full flex">
        {/* Bandera Trans */}
        <span className="flex-1 bg-brand-sky" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-pink" />
        <span className="flex-1 bg-brand-sky" />
        {/* Bandera No Binaria */}
        <span className="flex-1 bg-brand-yellowWarm" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-brand-purple" />
        <span className="flex-1 bg-brand-charcoal" />
      </div>

      <Container className="pt-14 pb-12">
        {/* Franja de Contacto presente debajo de cada página */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-yellowWarm text-xs font-bold uppercase tracking-wider font-display">
              <Mail size={14} className="text-brand-pink" />
              <span>Contacto de la Red</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              ¿Quieres sumarte, proponer un taller o participar en ferias?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 font-sans">
              Escríbenos directamente o visita nuestra página de contacto para más detalles.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="mailto:resistemarik@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-sm font-sans"
            >
              <Mail size={15} />
              resistemarik@gmail.com
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors font-sans border border-white/15"
            >
              <Sparkles size={14} className="text-brand-yellowWarm" />
              Página de Contacto
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Columna 1: Identidad y Origen */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-pink flex items-center justify-center text-white font-display font-extrabold text-base shadow-sm">
                RM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  Resiste <span className="text-brand-purpleSoft">Marika</span> <span className="text-brand-pink">Cusco</span>
                </span>
                <span className="text-[10px] font-bold text-brand-sky tracking-wider uppercase mt-0.5">
                  Red de Apoyo Mutuo & Autogestión
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm mt-1 font-sans">
              Nacimos el <strong>7 de agosto del 2023</strong> en Cusco como una red de apoyo mutuo para construir espacios de autogestión, arte y defensa de los derechos de la comunidad LGTBIQ+ y mujeres.
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-yellowWarm font-semibold">
              <MapPin size={14} className="shrink-0" />
              <span>Cusco, Perú</span>
            </div>

            {/* Redes */}
            <div className="flex gap-2.5 mt-2">
              <a
                href="https://www.instagram.com/resiste.marika.cusco"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-pink hover:text-brand-dark transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@resistemarik"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors"
              >
                <FaTiktok size={15} />
              </a>
            </div>
          </div>

          {/* Columna 2: Páginas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-brand-sky uppercase tracking-widest mb-4 font-display">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/75 hover:text-brand-pink transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Autogestión y Contacto */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-brand-yellowWarm uppercase tracking-widest mb-2 font-display">
              Apoyo Colectivo
            </h3>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Nos sostenemos de manera autónoma con rifas, ferias, artivismo, talleres.
            </p>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5 mt-2 flex items-center gap-3">
              <Mail size={16} className="text-brand-pink shrink-0" />
              <a
                href="mailto:resistemarik@gmail.com"
                className="text-xs text-white/90 font-medium hover:text-brand-pink transition-colors"
              >
                resistemarik@gmail.com
              </a>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-pink hover:text-white transition-colors mt-1"
            >
              <Sparkles size={13} />
              Contáctanos para sumar ferias o talleres →
            </Link>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans">
          <p>© {year} Resiste Marika Cusco. Asociación Civil Sin Fines de Lucro.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Solidaridad, artivismo y ternura radical <Heart size={12} className="text-brand-pink fill-brand-pink" />
          </p>
        </div>
      </Container>
    </footer>
  )
}
