import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  fundacion: '7 de agosto del 2023',
  ciudad: 'Cusco, Perú',
  lema: 'Autogestión, arte y apoyo mutuo',
  declaracionInicial:
    'Las artes nos han devuelto el poder para existir como marikas racializadas y para resistir contra la discriminación de género, sexo y el racismo en Cusco.',
  parrafo1:
    'RESISTE MARIKA CUSCO nació el 7 de agosto del 2023 con el sueño de ser una red de apoyo que pueda organizar espacios de autogestión donde la comunidad LGTBIQ pueda vender sus artes y construir sus emprendimientos desde el apoyo mutuo.',
  parrafo2:
    'Nos dimos cuenta de que muchas actividades del activismo dependían del financiamiento de ONGs para existir. Estos grandes montos de dinero han generado un fuerte deterioro en las relaciones entre activistas y que se pierda de vista nuestra fortaleza más grande: la solidaridad y la interdependencia.',
  parrafo3:
    'Hasta ahora, la gran parte de las actividades que realizamos son posibles mediante la autogestión. Cada miembro aporta con cuotas, realizamos rifas, organizamos y participamos en ferias, compartimos talleres y vendemos mercancía de nuestro artivismo.',
  pilarArtes:
    'El segundo pilar de RESISTE MARIKA es el uso de las ARTES para hacer activismo. El 8 de Marzo del 2024, gracias a un apoyo económico, pudimos comprar nuestros tambores y salir por primera vez a marchar como una BATUCADA LGTBIQ.',
  disciplinasArtisticas:
    'Además de hacer música y performar en las calles del Cusco haciendo activismo, nuestros miembros son escritores, ilustradores, actores, escultores, músicos, tejedores, danzantes y arte terapeutas.',
  talleresMultidisciplinarios:
    'Por esa razón, solemos compartir talleres artísticos multidisciplinarios en los que enseñamos a conectar con las artes como forma de activismo LGBTIQ, antipatriarcal, descolonial y antirracista.',
}

export const DISCIPLINAS = [
  { nombre: 'Música & Batucada', descripcion: 'Tambores en las calles como latido y protesta' },
  { nombre: 'Ilustración & Artes Visuales', descripcion: 'Gráfica disidente, zines y cartelería callejera' },
  { nombre: 'Escritura & Literatura', descripcion: 'Relatos marikas, poesía y memoria viva' },
  { nombre: 'Tejido & Arte Textil', descripcion: 'Recuperación de técnicas tradicionales y memoria andina' },
  { nombre: 'Artes Escénicas & Danza', descripcion: 'Cuerpo, performance y ocupación del espacio público' },
  { nombre: 'Arte Terapia', descripcion: 'Espacios seguros de sanación y cuidado colectivo' },
]

export const MISION_VISION = {
  mision:
    'Buscar la satisfacción de los derechos fundamentales de las personas LGBTIQ+ y mujeres en Cusco —salud, empleo, desarrollo económico y productivo, educación y recreación— mediante la autogestión comunitaria, el artivismo antipatriarcal y la articulación con organizaciones afines.',
  vision:
    'Consolidar una red autónoma, sólida y transformadora en el Cusco donde las marikas racializadas, diversidades y mujeres ejerzan plenamente su ciudadanía, soberanía económica y bienestar integral sin depender de financiamientos que condicionen su esencia comunitaria.',
}

export const OBJETIVOS_ESTRATEGICOS = [
  {
    id: 'derechos',
    numero: '01',
    titulo: 'Derechos Fundamentales',
    descripcion:
      'Buscar la satisfacción de los derechos fundamentales de sus integrantes y de la comunidad como salud, empleo, desarrollo económico y productivo, educación y recreación, junto con otras organizaciones afines.',
    icono: 'Heart',
    enfoque: 'Salud, Trabajo y Educación',
  },
  {
    id: 'politicas',
    numero: '02',
    titulo: 'Políticas Públicas',
    descripcion:
      'Fortalecer las capacidades de los miembros para aportar en la formulación de políticas públicas en favor de la comunidad.',
    icono: 'FileText',
    enfoque: 'Incidencia y Propuesta',
  },
  {
    id: 'vigilancia',
    numero: '03',
    titulo: 'Vigilancia Ciudadana',
    descripcion:
      'Participar en los procesos, espacios e instancias de vigilancia ciudadana, concertación y gestión participativa distritales existentes, y en aquéllos que se instituyan en adelante.',
    icono: 'Eye',
    enfoque: 'Gestión Participativa',
  },
  {
    id: 'desarrollo',
    numero: '04',
    titulo: 'Desarrollo Integral',
    descripcion:
      'Promover e impulsar proyectos y programas de desarrollo integral con el fin de fortalecer las capacidades de las y los integrantes y de la comunidad en general.',
    icono: 'Sparkles',
    enfoque: 'Capacidades Colectivas',
  },
  {
    id: 'mujeres-lgbtiq',
    numero: '05',
    titulo: 'Reconocimiento y Derechos Intergeneracionales',
    descripcion:
      'Reconocer y valorar el rol y los derechos de la población LGBTIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
    icono: 'Users',
    enfoque: 'Diversidades y Género',
  },
  {
    id: 'articulacion',
    numero: '06',
    titulo: 'Articulación y Coordinación',
    descripcion:
      'Impulsar la creación, el fortalecimiento y coordinación permanente con organizaciones afines y superiores estatales y privadas de ámbito nacional e internacional.',
    icono: 'Network',
    enfoque: 'Alianzas Solidarias',
  },
]

export const FORMAS_AUTOGESTION = [
  {
    id: 'cuotas',
    titulo: 'Cuotas Solidarias',
    descripcion: 'Aportes directos de cada miembro para sostener el fondo común y responder a emergencias colectivas.',
  },
  {
    id: 'rifas',
    titulo: 'Rifas Comunitarias',
    descripcion: 'Actividades pro-fondos organizadas periódicamente para adquirir herramientas y materiales de trabajo.',
  },
  {
    id: 'ferias',
    titulo: 'Ferias de Emprendimiento',
    descripcion: 'Espacios autogestionados en Cusco donde la comunidad vende productos propios de su trabajo digno.',
  },
  {
    id: 'talleres',
    titulo: 'Talleres Compartidos',
    descripcion: 'Socialización horizontal de saberes técnicos, artísticos y pedagógicos entre pares y hacia el público.',
  },
  {
    id: 'mercancia',
    titulo: 'Venta de Artivismo',
    descripcion: 'Prendas, zines, cerámicas, stickers y arte gráfico producido por la red para financiar nuestras marchas.',
  },
]

export const DONDE_TRABAJAMOS = {
  region: 'Cusco, Perú',
  espacios: [
    {
      titulo: 'Espacios Públicos y Calles Históricas',
      descripcion:
        'Hacemos activismo vivo en el espacio público del Cusco: marchas con nuestra batucada, intervenciones artísticas, performances y acciones de memoria.',
    },
    {
      titulo: 'Ferias Barriales y Plazas Comunitarias',
      descripcion:
        'Instalamos ferias de emprendimiento y trueque en diferentes distritos de Cusco para visibilizar el trabajo de artistas y artesanes marikas.',
    },
    {
      titulo: 'Talleres e Intervenciones Multidisciplinarias',
      descripcion:
        'Espacios formativos itinerantes donde compartimos música, artes plásticas, tejido y arte terapia en un marco antipatriarcal y antirracista.',
    },
    {
      titulo: 'Instancias de Vigilancia y Concertación',
      descripcion:
        'Participamos activamente en los espacios de vigilancia ciudadana y concertación distrital y provincial existentes en la región Cusco.',
    },
  ],
}

export const CON_QUIENES_TRABAJAMOS = {
  principios:
    'Nuestras alianzas se basan en el respeto mutuo, la horizontalidad y la defensa innegociable de la dignidad de las poblaciones históricamente excluidas.',
  redes: [
    {
      categoria: 'Colectivos LGTBIQ+ y Disidencias',
      descripcion: 'Articulamos con agrupaciones de diversidades sexuales y de género en Cusco y regiones andinas.',
    },
    {
      categoria: 'Organizaciones de Mujeres y Feministas',
      descripcion: 'Alianzas con colectivas antipatriarcales para la defensa coordinada de derechos y contra las violencias.',
    },
    {
      categoria: 'Plataformas de Derechos Humanos',
      descripcion: 'Coordinación con mesas de trabajo y vigilancia ciudadana distrital y regional en Cusco.',
    },
    {
      categoria: 'Comunidades de Artistas y Creadores',
      descripcion: 'Redes de artivistas, tejedores, músicos y agentes culturales independientes comprometidos con la justicia social.',
    },
  ],
}

export const VALORES: ValorInstitucional[] = [
  {
    id: 'autogestion',
    titulo: 'Autogestión Real',
    descripcion: 'Autonomía frente a la dependencia financiera de ONGs, sosteniendo nuestras causas desde el esfuerzo propio.',
    icono: 'Sparkles',
  },
  {
    id: 'interdependencia',
    titulo: 'Interdependencia y Solidaridad',
    descripcion: 'Reconocimiento mutuo y cuidado recíproco como base comunitaria contra el aislamiento y la precarización.',
    icono: 'HeartHandshake',
  },
  {
    id: 'artivismo',
    titulo: 'Artivismo Antipatriarcal y Antirracista',
    descripcion: 'Las artes y la batucada como vehículo de sanación, visibilidad política y resistencia en el Cusco.',
    icono: 'Palette',
  },
  {
    id: 'vigilancia',
    titulo: 'Vigilancia y Políticas Públicas',
    descripcion: 'Compromiso riguroso con la incidencia distrital, formulación de políticas y satisfacción de derechos plenos.',
    icono: 'ShieldCheck',
  },
]

export const EQUIPO: TeamMember[] = [
  {
    id: '1',
    nombre: 'Coordinación Comunitaria y Artivismo',
    rol: 'Resiste Marika Cusco',
    bio: 'Articulación de actividades, batucada y talleres multidisciplinarios desde la autogestión en Cusco.',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '2',
    nombre: 'Gestión de Ferias y Emprendimiento',
    rol: 'Economía Solidaria',
    bio: 'Organización de ferias de arte, rifas comunitarias y espacios comerciales seguros para integrantes de la red.',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '3',
    nombre: 'Batucada y Pedagogías Artísticas',
    rol: 'Música y Formación',
    bio: 'Coordinación de los tambores LGTBIQ+, talleres de ritmo, danza y ocupación del espacio público.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '4',
    nombre: 'Incidencia y Vigilancia Ciudadana',
    rol: 'Derechos y Políticas',
    bio: 'Seguimiento de ordenanzas, derechos fundamentales en salud y trabajo, y articulación con organizaciones afines.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
]

export const ALIANZAS: Alianza[] = [
  { id: '1', nombre: 'Colectivos LGTBIQ+ de Cusco', tipo: 'Articulación Local', logoText: 'CUSCO' },
  { id: '2', nombre: 'Red de Emprendimientos Disidentes', tipo: 'Economía Solidaria', logoText: 'RED' },
  { id: '3', nombre: 'Organizaciones de Mujeres y DDHH', tipo: 'Defensa de Derechos', logoText: 'DDHH' },
  { id: '4', nombre: 'Espacios de Artivismo & Cultura', tipo: 'Cultura Libre', logoText: 'ARTE' },
  { id: '5', nombre: 'Instancias de Vigilancia Ciudadana', tipo: 'Gestión Pública', logoText: 'VIGILA' },
]
