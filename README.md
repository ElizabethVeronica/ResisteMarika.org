# Resiste Marika

Sitio web oficial de Resiste Marika, colectiva autoorganizada en Cusco que impulsa espacios de autogestión, arte, activismo y defensa de derechos para la comunidad LGTBIQ+.

## Stack tecnológico

- React 19 y TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM v7
- FormSubmit para el formulario de contacto

## Estructura del proyecto

```
resiste-marika/
├── public/
│   ├── images/             # Fotografías e identidad visual
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── components/
    │   ├── layout/         # Navegación, encabezado y pie de página
    │   ├── sections/       # Secciones reutilizables de Inicio
    │   └── ui/             # Componentes visuales compartidos
    ├── config/             # Contenido de la organización y navegación
    ├── pages/              # Inicio, Quiénes somos, Proyectos, Multimedia,
    │                       # Noticias y Contacto
    ├── router/             # Rutas de la aplicación
    ├── services/           # Integraciones opcionales
    ├── types/              # Tipos compartidos
    ├── utils/              # Utilidades
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

## Desarrollo local

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Formularios, privacidad y publicación

Los formularios de contacto usan FormSubmit mediante AJAX; el correo de destino se configura con
`VITE_FORMSUBMIT_EMAIL` (el valor por defecto es `resistemarik@gmail.com`). La dirección y el
endpoint son públicos porque el envío ocurre desde el navegador: no guardes credenciales ni claves
secretas en variables `VITE_*`.

Antes de publicar:

1. Configura el correo de destino en el entorno de despliegue. Después del primer envío real,
   confirma la dirección siguiendo el mensaje de activación que envía FormSubmit.
2. Prueba los formularios principal y del pie de página y confirma la recepción. No uses datos
   personales reales para pruebas.
3. La protección incluida mantiene reCAPTCHA de FormSubmit activo y añade su campo honeypot y
   límites de longitud en el navegador. Esto reduce spam, pero no ofrece rate limiting propio del
   sitio; si el volumen de abuso lo requiere, habrá que incorporar un endpoint de servidor con
   limitación de solicitudes.
4. Revisa `/privacidad`. La página informa del envío a FormSubmit y de su archivo de 30 días según
   la documentación del proveedor; antes de publicar, la organización aún debe confirmar quién
   responde por los datos, cuánto tiempo conserva los correos y cómo atender solicitudes sobre ellos.
5. Configura `VITE_SITE_URL` con la URL HTTPS definitiva del sitio. Sin ella no se generan URL
   canonical ni `og:url`; no se ha inventado un dominio ni un sitemap.

El envío de formularios no se ha activado con un envío de prueba. FormSubmit puede solicitar la
confirmación del destinatario al recibir el primer mensaje.

## Publicación temporal en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila y publica la rama
`diseno/referencias-ongs-comunitarias` en GitHub Pages al recibir cambios. En el repositorio,
selecciona **Settings → Pages → Build and deployment → GitHub Actions**. La URL temporal será
`https://elizabethveronica.github.io/ResisteMarika.org/`. El workflow configura esa URL para
canonical y metadatos sociales durante la compilación, y genera una página de respaldo para que
las rutas funcionen al recargarlas.

## Fases del proyecto

- [x] **Fase 1: Esqueleto base** — Stack, rutas, layouts, utilidades y prototipo funcional.
- [x] **Fase 2: Identidad visual e Inicio** — Sistema visual, portada, diseño adaptable e interacciones.
- [x] **Fase 3: Páginas internas** — Quiénes somos, proyectos y multimedia.
- [x] **Fase 4: Noticias y contacto** — Noticias, canales de contacto y formulario.
- [ ] **Fase 5: Revisión para publicación** — Revisión final de accesibilidad, SEO, rendimiento y despliegue.
