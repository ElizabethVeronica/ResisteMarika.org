import type { OportunidadVoluntariado, FAQItem } from '@/types'

export const ROLES_VOLUNTARIADO: OportunidadVoluntariado[] = [
  {
    id: 'comms',
    rol: 'Diseño Gráfico & Contenido Digital',
    area: 'Comunicaciones',
    modalidad: 'Remoto',
    dedicacion: '4 a 6 hrs / semana',
    descripcion:
      'Apoyo en la creación de piezas gráficas para redes sociales, infografías de sensibilización y edición de videos cortos de campañas.',
  },
  {
    id: 'legal',
    rol: 'Asistencia Legal / Estudiantes de Derecho',
    area: 'Defensa de Derechos',
    modalidad: 'Híbrido',
    dedicacion: '6 hrs / semana',
    descripcion:
      'Registro de casos, investigación jurisprudencial sobre derechos de la diversidad y apoyo en la redacción de informes temáticos.',
  },
  {
    id: 'eventos',
    rol: 'Logística & Facilitación de Espacios',
    area: 'Comunidad & Cultura',
    modalidad: 'Presencial',
    dedicacion: 'Fines de semana puntuales',
    descripcion:
      'Acompañamiento en la organización de ferias, conversatorios, logística de transporte y bienvenida en eventos públicos.',
  },
  {
    id: 'psico',
    rol: 'Facilitación de Círculos de Escucha',
    area: 'Salud Mental & Cuidados',
    modalidad: 'Presencial / Virtual',
    dedicacion: '3 a 5 hrs / semana',
    descripcion:
      'Dirigido a profesionales o últimos ciclos de Psicología o Trabajo Social con formación previa en enfoque afirmativo LGTBIQ+.',
  },
]

export const FAQS_COLABORA: FAQItem[] = [
  {
    id: '1',
    pregunta: '¿Cuáles son los requisitos para ser voluntarie?',
    respuesta:
      'Tener compromiso con los derechos humanos y la causa LGTBIQ+, disposición de tiempo para reuniones de coordinación y participar en nuestro taller de inducción obligatoria.',
  },
  {
    id: '2',
    pregunta: '¿Cómo se utilizan las donaciones económicas?',
    respuesta:
      'El 100% de los fondos recibidos se destina a sostener el programa de asesoría gratuita, materiales para talleres educativos colectivos y fondo de emergencia para personas en situación de vulnerabilidad extrema. Publicamos balances periódicos de rendición de cuentas.',
  },
  {
    id: '3',
    pregunta: '¿Puedo donar como empresa u organización?',
    respuesta:
      'Sí. Contamos con programas de responsabilidad social, convenios de colaboración y talleres de sensibilización corporativa. Puedes escribirnos directamente a nuestro correo de alianzas.',
  },
  {
    id: '4',
    pregunta: '¿Se entrega constancia o certificado de voluntariado?',
    respuesta:
      'Sí. Al cumplir un periodo mínimo de 3 a 6 meses de colaboración activa, emitimos un certificado institucional detallando las horas aportadas y el impacto de tu labor.',
  },
]

export const METODOS_DONACION = [
  {
    id: 'transferencia',
    nombre: 'Transferencia Bancaria Nacional',
    detalle: 'Cuenta Corriente Soles (Perú)',
    numero: 'BCP: 191-00000000-0-00 (Ejemplo)',
    cci: 'CCI: 002-191-000000000000-00',
  },
  {
    id: 'billeteras',
    nombre: 'Billeteras Digitales (Yape / Plin)',
    detalle: 'Aportes rápidos desde celular',
    numero: '+51 900 000 000 (Ejemplo)',
    cci: 'Titular: Resiste Marika Org',
  },
  {
    id: 'internacional',
    nombre: 'Aportes Internacionales',
    detalle: 'Vía PayPal o plataforma segura',
    numero: 'paypal.me/resistemarika (Ejemplo)',
    cci: 'Tarjetas de crédito y débito internacionales',
  },
]
