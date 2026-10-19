# 🏳️‍🌈 Resiste Marika (.org)

Sitio web oficial de la organización **Resiste Marika**, asociación civil sin fines de lucro enfocada en la defensa de derechos, dignidad, bienestar integral y visibilidad de la comunidad LGBTIQ+.

---

## 🛠️ Stack Tecnológico

- **React 19** + **TypeScript** — Base moderna de componentes y tipado estático
- **Vite** — Entorno de desarrollo rápido y bundler
- **Tailwind CSS** — Estilos y diseño responsivo con paleta de identidad personalizada
- **Framer Motion** — Animaciones fluidas e interacciones dinámicas
- **React Router DOM v7** — Navegación tipo SPA (Single Page Application)
- **FormSubmit** — Gestión de envíos del formulario de contacto sin backend propio

---

## 📁 Estructura del Proyecto

```
resiste-marika/
├── public/                 # Archivos estáticos e iconos
├── src/
│   ├── components/
│   │   ├── layout/         # AppLayout, Navbar, Footer, MobileMenu
│   │   └── ui/             # Botones, contenedores, animaciones (Reveal, Container, etc.)
│   ├── config/             # Configuración y datos de navegación, impacto y programas
│   ├── hooks/              # Custom hooks (animación de contadores, etc.)
│   ├── pages/              # Home, Nosotros, Programas, Noticias, Colabora, Contacto
│   ├── router/             # Definición de rutas y redirecciones
│   ├── types/              # Interfaces y contratos de tipos globales
│   ├── utils/              # Funciones utilitarias (cn, ScrollToTop)
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales y tipografías
```

---

## 🚀 Inicio Rápido en Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor local de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

---

## 🎯 Fases de Desarrollo

- [x] **Fase 1: Esqueleto Base** — Configuración del stack, routing, layouts, utilidades y prototipo funcional.
- [ ] **Fase 2: Identidad Visual y Home** — Pulido visual de la portada, secciones, hero e interactividad.
- [ ] **Fase 3: Páginas Internas** — Nosotros, Programas y Colabora con contenido detallado.
- [ ] **Fase 4: Noticias y Contacto** — Sección de novedades/blog y activación final del formulario.
- [ ] **Fase 5: Despliegue y Optimización** — SEO, accesibilidad, performance y deploy a producción.
