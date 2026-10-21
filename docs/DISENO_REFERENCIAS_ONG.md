# Referencias de diseño — ONG y redes comunitarias

Rama: `diseno/referencias-ongs-comunitarias`

## Organizaciones consultadas (estructura y estética)

| Referencia | Qué tomamos |
|------------|-------------|
| **Médecins Sans Frontières (MSF)** | Hero editorial con historia concreta; franja de cifras de impacto; tipografía sobria sobre fondo blanco |
| **Amnesty International** | Rutas claras de acción (conocer → participar → contactar); etiquetas superiores en mayúsculas; CTA visibles |
| **Frida \| Young Feminist Fund** | Tono comunitario y feminista; bloques de “cómo involucrarte” sin lenguaje corporativo frío |
| **ILGA World / colectivos LGTBIQ+** | Identidad disidente en acentos de color (banderas trans y NB), sin perder legibilidad institucional |
| **Doctors Without Borders / reportes anuales** | Datos verificables y concretos en lugar de slogans abstractos |

## Componentes nuevos en esta rama

- `TopBar` — contexto institucional (sin fines de lucro, ubicación)
- `ImpactStrip` — cifras desde `config/impacto.ts`
- `EngagementPaths` — tres caminos de participación (`config/engagement.ts`)
- `SectionHeader` — prop `eyebrow` para títulos tipo portal de derechos humanos

## Paleta

Se mantiene la paleta trans + no binaria de `tailwind.config.js`, combinada con grises neutros `#FAF9F6` / blanco como en sitios de ONG internacionales.
