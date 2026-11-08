# CASE Portfolio — Juan de la Fuente Larrocca

![Badge](https://img.shields.io/badge/built%20with%20Astro-ff5a36?style=for-the-badge)
![Badge](https://img.shields.io/badge/license-MIT-ffffff?style=for-the-badge&logo=opensource)

## English

Personal portfolio website built with [Astro](https://astro.build). Showcases 12+ data engineering projects with case studies, architecture diagrams, and verified results.

### Tech Stack

- [Astro](https://astro.build) — static site generator
- [TypeScript](https://www.typescriptlang.org/) — content schema validation
- Markdown/MDX — project documentation

### Highlighted Projects

| Project | Status | Category |
|---------|--------|----------|
| [DashLogistics](https://juandelaf1.github.io/projects/dash-logistics) | Production | Logistics |
| [SkyCast](https://juandelaf1.github.io/projects/sky-cast) | Development | Weather |
| [RASPAL](https://juandelaf1.github.io/projects/raspal-scraper) | Production | Data scraping |
| [Attention Observatory](https://juandelaf1.github.io/es/attention-observatory) | Development | Research |
| [Optimus Price](https://juandelaf1.github.io/projects/optimus-price) | Production | Pricing |

### Badges

[![Astro](https://img.shields.io/badge/framework-Astro-ff5a36?style=for-the-badge)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?style=for-the-badge)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/content-MDX-000000?style=for-the-badge)](https://astro.build)
[![GitHub](https://img.shields.io/badge/repo-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/juandelaf1/juandelaf1.github.io)

### Getting Started

```sh
npm install
npm run dev       # Local dev server
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

### Project Structure

```
src/
├── components/    # Reusable UI components
│   ├── home/      # Homepage sections
│   ├── projects/  # Architecture diagrams, metrics
│   ├── shared/    # Header, Footer
│   └── ui/        # Buttons, badges, metrics
├── content/       # Content collections (projects, engineering, etc.)
│   ├── projects/  # Project case studies (MDX)
│   ├── engineering/
│   ├── building/
│   └── experiments/
├── pages/         # Routes
├── layouts/       # Page layouts
├── styles/        # Global CSS
└── config/        # Site configuration
```

### Content Collections

Content is defined in `src/content.config.ts` with Zod schemas. Each project is an MDX file in `src/content/projects/`.

---

## Español

Portfolio personal construido con [Astro](https://astro.build). Muestra 12+ proyectos de ingeniería de datos con casos de estudio, diagramas de arquitectura y resultados verificados.

### Stack Tecnológico

- [Astro](https://astro.build) — generador de sitios estáticos
- [TypeScript](https://www.typescriptlang.org/) — validación de schemas
- Markdown/MDX — documentación de proyectos

### Proyectos Destacados

| Proyecto | Estado | Categoría |
|----------|--------|-----------|
| [DashLogistics](https://juandelaf1.github.io/es/projects/dash-logistics) | Producción | Logística |
| [SkyCast](https://juandelaf1.github.io/projects/sky-cast) | Desarrollo | Meteorología |
| [RASPAL](https://juandelaf1.github.io/projects/raspal-scraper) | Producción | Raspado de datos |
| [Attention Observatory](https://juandelaf1.github.io/es/attention-observatory) | Desarrollo | Investigación |
| [Optimus Price](https://juandelaf1.github.io/projects/optimus-price) | Producción | Precios |

### Badges

![Astro](https://img.shields.io/badge/framework-Astro-ff5a36?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?style=for-the-badge)
![MDX](https://img.shields.io/badge/contenido-MDX-000000?style=for-the-badge)
![GitHub](https://img.shields.io/badge/repositorio-GitHub-181717?style=for-the-badge&logo=github)

### Puesta en Marcha

```sh
npm install
npm run dev       # Servidor de desarrollo local
npm run build     # Build de producción en dist/
npm run preview   # Vista previa del build
```

### Estructura

```
src/
├── components/    # Componentes reutilizables
│   ├── home/      # Secciones de la homepage
│   ├── projects/  # Diagramas de arquitectura, métricas
│   ├── shared/    # Header, Footer
│   └── ui/        # Botones, badges, métricas
├── content/       # Colecciones de contenido
│   ├── projects/  # Estudios de caso (MDX)
│   ├── engineering/
│   ├── building/
│   └── experiments/
├── pages/         # Rutas
├── layouts/       # Layouts
├── styles/        # CSS global
└── config/        # Configuración del sitio
```

### Colecciones de Contenido

El contenido se define en `src/content.config.ts` con schemas Zod. Cada proyecto es un archivo MDX en `src/content/projects/`.

---

© 2026 Juan de la Fuente Larrocca
