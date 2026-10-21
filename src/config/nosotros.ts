import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  fundacion: '7 de agosto del 2023',
  ciudad: 'Cusco, Perú',
  organizacion: 'Resiste Marika Cusco',
  lema: 'Las artes nos han devuelto el poder para existir como marikas racializadas y resistir contra la discriminación en Cusco.',
  sublema: 'Red de autogestión, arte y ternura',
  declaracionInicial:
    'Las artes nos han devuelto el poder para existir como marikas racializadas y para resistir contra la discriminación de género, sexo y el racismo en Cusco.',
  parrafo1:
    'Resiste Marika nació el 7 de agosto del 2023 con el sueño de organizar espacios de autogestión donde la comunidad LGTBIQ+ pueda compartir y vender sus artes y construir emprendimientos de forma colectiva.',
  parrafo2:
    'Nos dimos cuenta de que muchas actividades del activismo dependían del financiamiento de ONGs para existir. Estos grandes montos de dinero han generado un fuerte deterioro en las relaciones entre activistas y que se pierda de vista nuestra fortaleza más grande: la colectividad y la ternura.',
  parrafo3:
    'Nos sostenemos de manera autónoma con rifas, ferias, artivismo, talleres.',
  pilarArtes:
    'El segundo pilar de Resiste Marika es el uso de las artes para hacer activismo. El 8 de marzo del 2024, gracias a un apoyo económico, pudimos comprar nuestros tambores y salir por primera vez a marchar con nuestra batucada LGTBIQ+.',
  disciplinasArtisticas:
    'Además de hacer música y performar en las calles del Cusco haciendo activismo, nuestros miembros somos escritores, ilustradores, actores, escultores, músicos, tejedores, danzantes y arte terapeutas.',
  talleresMultidisciplinarios:
    'Por esa razón, solemos compartir talleres artísticos multidisciplinarios en los que conectamos con las artes como forma de activismo LGTBIQ+, antipatriarcal, descolonial y antirracista.',
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
    'Reconocemos y valoramos el rol y los derechos de la población LGTBIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
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
      'Reconocemos y valoramos el rol y los derechos de la población LGTBIQ+ y mujeres en las diferentes etapas del desarrollo de vida, en la organización, en la comunidad y en la sociedad.',
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
    id: 'rifas',
    titulo: 'Rifas',
    descripcion: 'Organizamos rifas colectivas para adquirir materiales y sostener nuestras actividades autogestionadas.',
  },
  {
    id: 'ferias',
    titulo: 'Ferias',
    descripcion: 'Organizamos y participamos en ferias colectivas donde compartimos y comercializamos nuestras creaciones.',
  },
  {
    id: 'artivismo',
    titulo: 'Artivismo',
    descripcion: 'El arte como trinchera y expresión política: fanzines, gráfica, música y performance en las calles.',
  },
  {
    id: 'talleres',
    titulo: 'Talleres',
    descripcion: 'Compartimos talleres artísticos y formativos multidisciplinarios abiertos a la comunidad.',
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
        'Creamos y habitamos ferias para compartir nuestro arte y construir iniciativas desde la auto-organización.',
    },
    {
      titulo: 'En talleres artísticos colectivos',
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
    'Nos articulamos desde la auto-organización, la ternura y el respeto, priorizando siempre la autonomía colectiva.',
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
    descripcion: 'Nos sostenemos de manera autónoma con rifas, ferias, artivismo, talleres.',
    icono: 'Sparkles',
  },
  {
    id: 'solidaridad',
    titulo: 'Autonomía y Ternura',
    descripcion: 'Nuestra fortaleza radica en reconocernos, cuidarnos y sostenernos colectivamente.',
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
    nombre: 'Coordinación Colectiva',
    rol: 'Resiste Marika Cusco',
    bio: 'Articulación de actividades, batucada y talleres multidisciplinarios desde la autogestión en Cusco.',
    foto: '/images/marcha 8M 2025.png',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '2',
    nombre: 'Ferias Colectivas',
    rol: 'Autogestión Colectiva',
    bio: 'Organización de ferias donde compartimos nuestras artes y creaciones desde la auto-organización.',
    foto: '/images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '3',
    nombre: 'Batucada y Talleres',
    rol: 'Música y Artivismo',
    bio: 'Nuestros tambores en las calles del Cusco y talleres de activismo antipatriarcal, descolonial y antirracista.',
    foto: '/images/taller de batucada.jpg',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '4',
    nombre: 'Incidencia y Vigilancia',
    rol: 'Políticas Públicas',
    bio: 'Participación en vigilancia ciudadana y formulación de políticas públicas en favor de la comunidad.',
    foto: '/images/planton 25N.jpg',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
]

export const ALIANZAS: Alianza[] = [
  { id: '1', nombre: 'Colectivos LGTBIQ+ de Cusco', tipo: 'Articulación Local', logoText: 'CUSCO' },
  { id: '2', nombre: 'Redes Colectivas', tipo: 'Auto-organización', logoText: 'RED' },
  { id: '3', nombre: 'Organizaciones de Mujeres', tipo: 'Defensa de Derechos', logoText: 'MUJERES' },
  { id: '4', nombre: 'Creadores y Artivistas', tipo: 'Artes Independientes', logoText: 'ARTE' },
  { id: '5', nombre: 'Instancias de Vigilancia Ciudadana', tipo: 'Gestión Participativa', logoText: 'VIGILA' },
]
