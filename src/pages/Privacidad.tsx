import Container from '@/components/ui/Container'

export default function Privacidad() {
  return (
    <section className="page-section bg-surface-light py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="rounded-3xl border border-surface-border bg-white p-6 shadow-md sm:p-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-purple">
            Formularios de contacto
          </p>
          <h1 className="mb-6 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Aviso de privacidad
          </h1>

          <div className="space-y-5 font-sans leading-relaxed text-surface-muted">
            <p>
              Cuando envías un formulario de este sitio, compartes tu nombre, correo electrónico y
              mensaje para que Resiste Marika pueda responderte y dar seguimiento a tu consulta.
              Envía solo la información necesaria y evita incluir datos sensibles.
            </p>
            <p>
              El formulario transmite esos datos a FormSubmit, un servicio externo de recepción de
              formularios, que los remite al correo de Resiste Marika. Según la documentación de
              FormSubmit, las entregas también se conservan en su archivo de envíos durante 30 días.
              El mensaje recibido por correo queda sujeto a las prácticas de almacenamiento del
              servicio de correo y de la organización.
            </p>
            <p>
              Para consultas sobre un mensaje enviado, escribe a{' '}
              <a
                href="mailto:resistemarik@gmail.com"
                className="font-semibold text-brand-purple underline underline-offset-2"
              >
                resistemarik@gmail.com
              </a>
              . No se garantiza la eliminación inmediata de copias ya entregadas o conservadas por
              los proveedores.
            </p>
            <p>
              Este aviso se limita a los formularios de contacto. Antes de publicar el sitio, Resiste
              Marika debe confirmar quién es responsable del tratamiento de los datos y definir sus
              propios plazos de conservación y el procedimiento para atender solicitudes relacionadas
              con ellos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
