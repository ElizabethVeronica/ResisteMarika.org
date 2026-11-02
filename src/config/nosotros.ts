import type { TeamMember, ValorInstitucional, Alianza } from '@/types'

export const HISTORIA_RESUMEN = {
  fundacion: '7 de agosto de 2023',
  ciudad: 'Cusco, Perú',
  organizacion: 'Resiste Marika Cusco',
  lema: 'Las artes nos han devuelto el poder para existir como marikas racializadas y resistir contra la discriminación en Cusco.',
  sublema: 'Autogestión y Artivismo',
  declaracionInicial:
    'Las artes nos han devuelto el poder para existir como marikas racializadas y para resistir contra la discriminación de género, sexo y el racismo en Cusco.',
  parrafo1:
    'Resiste Marika nació el 7 de agosto de 2023 con el sueño de organizar espacios de autogestión donde la comunidad LGTBIQ+ pueda organizarse y construir espacios de forma colectiva.',
  parrafo2:
    'Nos dimos cuenta de que muchas actividades del activismo dependían del financiamiento de las ONG para existir. Esto nos motivó a tomar la autogestión como forma de sostenernos y no perder de vista nuestros objetivos: la colectividad y la ternura.',
  parrafo3:
    'Nos sostenemos de manera autónoma con rifas, ferias, artivismo y talleres.',
  pilarArtes:
    'Uno de los pilares de Resiste Marika es el uso de las artes para hacer activismo. El 8 de marzo de 2024, gracias a un apoyo económico, pudimos comprar nuestros tambores y salir por primera vez a marchar con nuestra batucada.',
  disciplinasArtisticas:
    'Además de hacer música y performar en las calles del Cusco como parte de nuestro activismo, quienes integramos la colectiva practicamos la escritura, la ilustración, la actuación, la escultura, la psicología, la música, el tejido, la danza y la arteterapia.',
  talleresMultidisciplinarios:
    'Por esa razón, solemos compartir talleres artísticos multidisciplinarios en los que conectamos con las artes como forma de acompañarnos y hacer activismo LGTBIQ+, antipatriarcal, decolonial y antirracista.',
}

export const DISCIPLINAS = [
  { nombre: 'Música & Batucada', descripcion: 'Compramos nuestros tambores para salir a marchar y performar en las calles del Cusco.' },
  { nombre: 'Ilustración & Artes Visuales', descripcion: 'Creamos gráfica disidente, zines y afiches para comunicar nuestras luchas.' },
  { nombre: 'Escritura & Poesía', descripcion: 'Escribimos textos, manifiestos y relatos desde nuestras vivencias marikas racializadas.' },
  { nombre: 'Arteterapia', descripcion: 'Facilitamos espacios de cuidado, expresión y sanación colectiva entre nosotres.' },
]

export const MISION_VISION = {
  titulo: 'Nuestra Misión y Visión',
  descripcion:
    'Nuestra misión y visión se expresan directamente en los objetivos fundamentales que nos unen como colectiva en Cusco.',
  objetivosPrincipales: [
    'Buscamos la satisfacción de los derechos fundamentales de quienes integran la colectiva y de la comunidad, como la salud, el empleo, la educación y la recreación, junto con otras organizaciones afines.',
    'Fortalecemos las capacidades de quienes son parte de la colectiva y de la comunidad LGTBIQ+ para aportar en la formulación de políticas públicas.',
    'Participamos en los procesos, espacios e instancias de vigilancia ciudadana, concertación y gestión participativa distritales existentes y en aquellos que se instituyan en adelante.',
    'Promovemos e impulsamos proyectos y programas de desarrollo integral con el fin de fortalecer las capacidades de quienes integran la colectiva y de la comunidad en general.',
    'Reconocemos y valoramos el rol y los derechos de la población LGTBIQ+ en las diferentes etapas de su vida, en la organización, en la comunidad y en la sociedad.',
    'Impulsamos la creación, el fortalecimiento y coordinación permanente con organizaciones afines de ámbito nacional e internacional.',
  ],
}

export const OBJETIVOS_ESTRATEGICOS = [
  {
    id: 'derechos',
    numero: '01',
    titulo: 'Derechos Fundamentales',
    descripcion: MISION_VISION.objetivosPrincipales[0],
    icono: 'Heart',
    enfoque: 'Salud, Trabajo y Educación',
  },
  {
    id: 'politicas',
    numero: '02',
    titulo: 'Políticas Públicas',
    descripcion: MISION_VISION.objetivosPrincipales[1],
    icono: 'FileText',
    enfoque: 'Incidencia y Propuesta',
  },
  {
    id: 'vigilancia',
    numero: '03',
    titulo: 'Vigilancia Ciudadana',
    descripcion: MISION_VISION.objetivosPrincipales[2],
    icono: 'Eye',
    enfoque: 'Gestión Participativa',
  },
  {
    id: 'desarrollo',
    numero: '04',
    titulo: 'Desarrollo Integral',
    descripcion: MISION_VISION.objetivosPrincipales[3],
    icono: 'Sparkles',
    enfoque: 'Capacidades Colectivas',
  },
  {
    id: 'mujeres-lgbtiq',
    numero: '05',
    titulo: 'Reconocimiento y Derechos',
    descripcion: MISION_VISION.objetivosPrincipales[4],
    icono: 'Users',
    enfoque: 'Comunidad',
  },
  {
    id: 'articulacion',
    numero: '06',
    titulo: 'Coordinación y Alianzas',
    descripcion: MISION_VISION.objetivosPrincipales[5],
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
    descripcion: 'Organizamos y participamos en ferias colectivas donde compartimos y vendemos nuestras creaciones.',
  },
  {
    id: 'artivismo',
    titulo: 'Artivismo',
    descripcion: 'El arte como expresión política y de cuidado: creación de fanzines, pañuelos, máscaras y música.',
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
        'Creamos y habitamos ferias para compartir nuestro arte y construir iniciativas desde la autogestión.',
    },
    {
      titulo: 'En talleres artísticos colectivos',
      descripcion:
        'Compartimos talleres multidisciplinarios conectando con el arte como activismo antipatriarcal, decolonial y antirracista.',
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
    'Nos articulamos desde la autogestión priorizando siempre la autonomía colectiva.',
  redes: [
    {
      categoria: 'Colectivos LGTBIQ+ y disidencias',
      descripcion: 'Articulamos con agrupaciones de la diversidad sexual y de género en Cusco.',
    },
    {
      categoria: 'Organizaciones comunitarias',
      descripcion: 'Articulamos con organizaciones locales que fortalecen la defensa de los derechos de la comunidad LGTBIQ+.',
    },
    {
      categoria: 'Espacios de vigilancia ciudadana',
      descripcion: 'Participamos en instancias distritales y mesas de concertación en la región Cusco.',
    },
    {
      categoria: 'Artistas, artesanes y creadores',
      descripcion: 'Colaboramos con personas dedicadas a la escritura, la ilustración, la escultura, la música y la danza.',
    },
  ],
}

export const VALORES: ValorInstitucional[] = [
  {
    id: 'autogestion',
    titulo: 'Autogestión',
    descripcion: 'Nos sostenemos de manera autónoma con rifas, ferias, artivismo y talleres.',
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
    bio: 'Organización de ferias donde compartimos nuestras artes y creaciones desde la autogestión.',
    foto: '/images/Marika Fest 2024 - Feria de autogestión LGTBIQ.jpg',
    redes: { instagram: 'https://www.instagram.com/resiste.marika.cusco' },
  },
  {
    id: '3',
    nombre: 'Batucada y Talleres',
    rol: 'Música y Artivismo',
    bio: 'Nuestros tambores en las calles del Cusco y talleres de activismo antipatriarcal, decolonial y antirracista.',
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
  { id: '1', nombre: 'Colectivos LGTBIQ+ de Cusco', tipo: 'Articulación Local' },
  { id: '2', nombre: 'Redes Colectivas', tipo: 'Autogestión' },
  { id: '3', nombre: 'Comunidad', tipo: 'Defensa de Derechos' },
  { id: '4', nombre: 'Creadores y Artivistas', tipo: 'Artistas Independientes' },
  { id: '5', nombre: 'Instancias de Vigilancia Ciudadana', tipo: 'Gestión Participativa' },
]
