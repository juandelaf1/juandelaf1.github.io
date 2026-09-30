# CASE Portfolio — Juan de la Fuente Larrocca

## English

Personal portfolio website built with [Astro](https://astro.build).

### Tech Stack

- [Astro](https://astro.build) — static site generator
- [TypeScript](https://www.typescriptlang.org/) — content schema validation
- Markdown/MDX — project documentation

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

Portfolio personal construido con [Astro](https://astro.build).

### Stack Tecnológico

- [Astro](https://astro.build) — generador de sitios estáticos
- [TypeScript](https://www.typescriptlang.org/) — validación de schemas
- Markdown/MDX — documentación de proyectos

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