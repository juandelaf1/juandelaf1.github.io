# Agent Instructions

## Identity

This repository is NOT a portfolio website. It is the public representation of a professional identity. Read `docs/AGENT_CONTEXT.md` before making any changes.

## Development

```bash
npm run dev          # Start dev server
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## Project Structure

```
src/
  content.config.ts  # Content collection schemas
  content/           # MDX content (projects, engineering, experiments, building)
  components/        # Reusable Astro components
  layouts/           # Page layouts
  pages/             # Routes (index, [slug], etc.)
  styles/            # Global CSS with design tokens
  lib/               # Utilities (github.ts, utils.ts)
  config/site.ts     # Site configuration

docs/                # Project constitution (read before making changes)
```

## Adding a New Project

1. Create a file in `src/content/projects/[slug].mdx`
2. Add frontmatter (title, description, category, date, metrics, tech, links)
3. Write case study sections (Context, Challenges, Solution, Results, Lessons)
4. If `featured: true` and order is set, it appears on the homepage
5. Build to verify: `npm run build`

## Key Rules

- No animations, no placeholder content, no fake metrics
- Content-driven: adding a project = one MDX file
- Dark mode only, no light mode toggle
- Architecture diagrams required for every case study
- Professional tone: engineering documentation, not marketing
