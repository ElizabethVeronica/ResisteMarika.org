import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  fundacion: '7 de agosto del 2023',
  ciudad: 'Cusco, Perú',
  organizacion: 'Resiste Marika Cusco',
  lema: 'Las artes nos han devuelto el poder para existir como marikas racializadas y resistir contra la discriminación en Cusco.',
  sublema: 'Red de autogestión, arte y apoyo mutuo',
  declaracionInicial:
    'Las artes nos han devuelto el poder para existir como marikas racializadas y para resistir contra la discriminación de género, sexo y el racismo en Cusco.',
  parrafo1:
    'RESISTE MARIKA CUSCO nacimos el 7 de agosto del 2023 con el sueño de ser una red de apoyo que pueda organizar espacios de autogestión donde la comunidad LGTBIQ podamos vender nuestras artes y construir nuestros emprendimientos desde el apoyo mutuo.',
  parrafo2:
    'Nos dimos cuenta de que muchas actividades del activismo dependían del financiamiento de ONGs para existir. Estos grandes montos de dinero han generado un fuerte deterioro en las relaciones entre activistas y que se pierda de vista nuestra fortaleza más grande: la solidaridad y la interdependencia.',
  parrafo3:
    'Hasta ahora, la gran parte de las actividades que realizamos son posibles mediante la autogestión. Cada miembro aporta con cuotas, realizamos rifas, organizamos y participamos en ferias, compartimos talleres y vendemos mercancía de nuestro artivismo.',
  pilarArtes:
    'El segundo pilar de RESISTE MARIKA es el uso de las ARTES para hacer activismo. El 8 de Marzo del 2024, gracias a un apoyo económico, pudimos comprar nuestros tambores y salir por primera vez a marchar como una BATUCADA LGTBIQ.',
  disciplinasArtisticas:
    'Además de hacer música y performar en las calles del Cusco haciendo activismo, nuestros miembros somos escritores, ilustradores, actores, escultores, músicos, tejedores, danzantes y arte terapeutas.',
  talleresMultidisciplinarios:
    'Por esa razón, solemos compartir talleres artísticos multidisciplinarios en los que enseñamos a conectar con las artes como forma de activismo LGBTIQ, antipatriarcal, descolonial y antirracista.',
}

export const DISCIPLINAS = [
  { nombre: 'Música & Batucada', descripcion: 'Compramos nuestros tambores para salir a marchar y performar en las calles del Cusco.' },
  { nombre: 'Ilustración & Artes Visuales', descripcion: 'Creamos gráfica disidente, zines y afiches para comunicar nuestras luchas.' },
  { nombre: 'Escritura & Poesía', descripcion: 'Escribimos textos, manifiestos y relatos desde nuestras vivencias marikas racializadas.' },
  { nombre: 'Tejido & Arte Textil', descripcion: 'Tejemos con técnicas tradicionales como memoria y resistencia viva.' },
  { nombre: 'Actuación, Escultura & Danza', descripcion: 'Usamos el cuerpo, el movimiento y la escena pública para cuestionar el racismo y el patriarcado.' },
  { nombre: 'Arte Terapia', descripcion: 'Facilitamos espacios de cuidado, expresión y sanación colectiva entre nosotres.' },
]

export const MISION_VISION = {
  titulo: 'Nuestra Misión y Visión',
  descripcion:
    'Nuestra misión y visión se expresan directamente en los objetivos fundamentales que nos unen como colectiva en Cusco.',
  objetivosPrincipales: [
    'Buscamos la satisfacción de los derechos fundamentales de nuestros integrantes y de la comunidad como salud, empleo, desarrollo económico y productivo, educación y recreación, junto con otras organizaciones afines.',
    'Fortalecemos las capacidades de nuestros miembros para aportar en la formulación de políticas públicas en favor de la comunidad.',
    'Participamos en los procesos, espacios e instancias de vigilancia ciudadana, concertación y gestión participativa distritales existentes, y en aquéllos que se instituyan en adelante.',
    'Promovemos e impulsamos proyectos y programas de desarrollo integral con el fin de fortalecer las capacidades de las y los integrantes y de la comunidad en general.',
    'Reconocemos y valoramos el rol y los derechos de la población LGBTIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
    'Impulsamos la creación, el fortalecimiento y coordinación permanente con organizaciones afines y superiores estatales y privadas de ámbito nacional e internacional.',
  ],
}

export const OBJETIVOS_ESTRATEGICOS = [
  {
    id: 'derechos',
    numero: '01',
    titulo: 'Derechos Fundamentales',
    descripcion:
      'Buscamos la satisfacción de los derechos fundamentales de nuestros integrantes y de la comunidad como salud, empleo, desarrollo económico y productivo, educación y recreación, junto con otras organizaciones afines.',
    icono: 'Heart',
    enfoque: 'Salud, Trabajo y Educación',
  },
  {
    id: 'politicas',
    numero: '02',
    titulo: 'Políticas Públicas',
    descripcion:
      'Fortalecemos las capacidades de nuestros miembros para aportar en la formulación de políticas públicas en favor de la comunidad.',
    icono: 'FileText',
    enfoque: 'Incidencia y Propuesta',
  },
  {
    id: 'vigilancia',
    numero: '03',
    titulo: 'Vigilancia Ciudadana',
    descripcion:
      'Participamos en los procesos, espacios e instancias de vigilancia ciudadana, concertación y gestión participativa distritales existentes, y en aquéllos que se instituyan en adelante.',
    icono: 'Eye',
    enfoque: 'Gestión Participativa',
  },
  {
    id: 'desarrollo',
    numero: '04',
    titulo: 'Desarrollo Integral',
    descripcion:
      'Promovemos e impulsamos proyectos y programas de desarrollo integral con el fin de fortalecer las capacidades de las y los integrantes y de la comunidad en general.',
    icono: 'Sparkles',
    enfoque: 'Capacidades Colectivas',
  },
  {
    id: 'mujeres-lgbtiq',
    numero: '05',
    titulo: 'Reconocimiento y Derechos',
    descripcion:
      'Reconocemos y valoramos el rol y los derechos de la población LGBTIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
    icono: 'Users',
    enfoque: 'Comunidad y Mujeres',
  },
  {
    id: 'articulacion',
    numero: '06',
    titulo: 'Coordinación y Alianzas',
    descripcion:
      'Impulsamos la creación, el fortalecimiento y coordinación permanente con organizaciones afines y superiores estatales y privadas de ámbito nacional e internacional.',
    icono: 'Network',
    enfoque: 'Organizaciones Afines',
  },
]

export const FORMAS_AUTOGESTION = [
  {
    id: 'cuotas',
    titulo: 'Cuotas de miembros',
    descripcion: 'Cada miembro aporta con cuotas periódicas para sostener nuestras actividades y necesidades comunes.',
  },
  {
    id: 'rifas',
    titulo: 'Rifas solidarias',
    descripcion: 'Organizamos rifas con premios donados por nosotres para comprar materiales de trabajo y herramientas.',
  },
  {
    id: 'ferias',
    titulo: 'Ferias de emprendimiento',
    descripcion: 'Organizamos y participamos en ferias donde vendemos nuestras creaciones, artes y productos.',
  },
  {
    id: 'talleres',
    titulo: 'Talleres compartidos',
    descripcion: 'Compartimos talleres artísticos y formativos para conectar con las artes y enseñar a la comunidad.',
  },
  {
    id: 'mercancia',
    titulo: 'Venta de artivismo',
    descripcion: 'Vendemos mercancía fruto de nuestro artivismo: zines, impresiones, afiches y piezas autogestionadas.',
  },
]

export const DONDE_TRABAJAMOS = {
  region: 'Cusco, Perú',
  descripcion:
    'Nuestro trabajo nace y se desarrolla en el Cusco. Activamos en las calles, plazas, ferias e instancias de participación ciudadana.',
  espacios: [
    {
      titulo: 'En las calles y plazas del Cusco',
      descripcion:
        'Hacemos activismo en el espacio público cusqueño con nuestra batucada LGTBIQ+, música, performance y marchas.',
    },
    {
      titulo: 'En ferias y espacios autogestionados',
      descripcion:
        'Creamos y habitamos ferias para que nuestra comunidad venda su arte y construya sus emprendimientos.',
    },
    {
      titulo: 'En talleres artísticos comunitarios',
      descripcion:
        'Compartimos talleres multidisciplinarios conectando con el arte como activismo antipatriarcal, descolonial y antirracista.',
    },
    {
      titulo: 'En instancias de vigilancia ciudadana',
      descripcion:
        'Participamos en espacios de concertación, vigilancia ciudadana y gestión participativa distritales en Cusco.',
    },
  ],
}

export const CON_QUIENES_TRABAJAMOS = {
  principios:
    'Nos articulamos desde la solidaridad, la interdependencia y el respeto mutuo, priorizando siempre la autonomía comunitaria.',
  redes: [
    {
      categoria: 'Colectivos LGTBIQ+ y disidencias',
      descripcion: 'Articulamos con agrupaciones de la diversidad sexual y de género en Cusco.',
    },
    {
      categoria: 'Organizaciones de mujeres',
      descripcion: 'Trabajamos junto a colectivas en la defensa de derechos y contra la violencia de género.',
    },
    {
      categoria: 'Espacios de vigilancia ciudadana',
      descripcion: 'Participamos en instancias distritales y mesas de concertación en la región Cusco.',
    },
    {
      categoria: 'Artistas, artesanes y creadores',
      descripcion: 'Colaboramos con escritoras, ilustradores, escultores, músicas y danzantes independientes.',
    },
  ],
}

export const VALORES: ValorInstitucional[] = [
  {
    id: 'autogestion',
    titulo: 'Autogestión',
    descripcion: 'Sostenemos lo que hacemos con cuotas, rifas, ferias, talleres y venta de mercancía.',
    icono: 'Sparkles',
  },
  {
    id: 'solidaridad',
    titulo: 'Solidaridad e Interdependencia',
    descripcion: 'Nuestra fortaleza más grande es reconocernos, cuidarnos y apoyarnos mutuamente.',
    icono: 'HeartHandshake',
  },
  {
    id: 'artivismo',
    titulo: 'Arte como Activismo',
    descripcion: 'Las artes nos han devuelto el poder para existir como marikas racializadas y resistir en Cusco.',
    icono: 'Palette',
  },
  {
    id: 'derechos',
    titulo: 'Defensa de Derechos',
    descripcion: 'Buscamos la satisfacción de derechos fundamentales y aportamos en políticas públicas.',
    icono: 'ShieldCheck',
  },
]

export const EQUIPO: TeamMember[] = [
  {
    id: '1',
    nombre: 'Coordinación Comunitaria',
    rol: 'Resiste Marika Cusco',
    bio: 'Articulación de actividades, batucada y talleres multidisciplinarios desde la autogestión en Cusco.',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '2',
    nombre: 'Ferias y Emprendimiento',
    rol: 'Economía Solidaria',
    bio: 'Organización de ferias donde la comunidad vende sus artes y productos desde el apoyo mutuo.',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '3',
    nombre: 'Batucada y Talleres',
    rol: 'Música y Artivismo',
    bio: 'Nuestros tambores en las calles del Cusco y talleres de activismo antipatriarcal, descolonial y antirracista.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '4',
    nombre: 'Incidencia y Vigilancia',
    rol: 'Políticas Públicas',
    bio: 'Participación en vigilancia ciudadana y formulación de políticas públicas en favor de la comunidad.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
]

export const ALIANZAS: Alianza[] = [
  { id: '1', nombre: 'Colectivos LGTBIQ+ de Cusco', tipo: 'Articulación Local', logoText: 'CUSCO' },
  { id: '2', nombre: 'Red de Emprendimientos Disidentes', tipo: 'Apoyo Mutuo', logoText: 'RED' },
  { id: '3', nombre: 'Organizaciones de Mujeres', tipo: 'Defensa de Derechos', logoText: 'MUJERES' },
  { id: '4', nombre: 'Creadores y Artivistas', tipo: 'Artes Independientes', logoText: 'ARTE' },
  { id: '5', nombre: 'Instancias de Vigilancia Ciudadana', tipo: 'Gestión Participativa', logoText: 'VIGILA' },
]
