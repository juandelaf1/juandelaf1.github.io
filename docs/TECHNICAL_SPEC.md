# Technical Specification

## 1. Information Architecture

### Complete Sitemap

```
/
├── /                                # Home
│   ├── Hero                         # Name, positioning, CTAs
│   └── Selected Work                # 4 featured case studies
│
├── /projects/[slug]                 # Individual case study
│   ├── Context
│   ├── Challenges
│   ├── Solution (Architecture + Pipeline + Tech Stack)
│   ├── Implementation
│   ├── Results (Metrics)
│   ├── Lessons Learned
│   └── Links (GitHub, Demo, Docs)
│
├── /engineering                     # Engineering notes index
│   └── List of notes with metadata
├── /engineering/[slug]              # Technical article
│
├── /experiments/[slug]              # Experiment detail
│
└── /building                        # Currently building
    └── Project cards with status, roadmap, next milestones
```

### Navigation Hierarchy

```
Header (3 links):
  Projects     → /projects/[slug]
  Engineering  → /engineering
  Building     → /building

Footer:
  LinkedIn · GitHub · Email · Resume (PDF)
```

### User Flows

**Recruiter (primary):**
1. Lands on `/` → reads Hero positioning (5s)
2. Scans Selected Work (4 projects) (10s)
3. Clicks a project → reads Case Study (60-120s)
4. Checks GitHub repo / Demo link
5. Clicks LinkedIn or Resume PDF

**Engineering Manager (secondary):**
1. Lands on `/` → reads Hero
2. Goes to `/engineering` → reads 1-2 technical notes
3. Clicks into a project → reviews Architecture diagram + Results
4. Forms opinion on engineering maturity

## 2. Domain Model

### Content Collections Schema

#### Project

```typescript
interface Project {
  title: string;
  description: string;        // Max 15 words
  slug: string;
  featured: boolean;           // Shows on homepage if true
  order: number;               // Sort order for featured projects
  category: 'Climate' | 'Logistics' | 'AI/ML' | 'Analytics';
  date: Date;
  status: 'production' | 'development' | 'archived';

  metrics: Array<{
    value: string;             // e.g. "+30%", "R² = 0.987"
    label: string;             // e.g. "net revenue improvement"
  }>;

  tech: Array<{
    name: string;              // e.g. "Python"
    icon?: string;             // Icon identifier
  }>;

  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };

  image?: string;              // Architecture diagram path
}
```

#### Engineering Note

```typescript
interface EngineeringNote {
  title: string;
  description: string;
  slug: string;
  date: Date;
  tags: string[];
}
```

#### Experiment

```typescript
interface Experiment {
  title: string;
  description: string;
  slug: string;
  date: Date;
  tech: string[];
  status: 'exploratory' | 'completed' | 'archived';
}
```

#### Building Project

```typescript
interface BuildingProject {
  title: string;
  description: string;
  slug: string;
  status: 'planning' | 'building' | 'testing' | 'live';
  milestones: Array<{
    title: string;
    completed: boolean;
  }>;
  nextMilestone: string;
  started: Date;
  estimatedCompletion?: Date;
  repo?: string;
}
```

## 3. Component Inventory

### UI Primitives (`src/components/ui/`)

| Component | Purpose | Props | Variants |
|---|---|---|---|
| `Container.astro` | Max-width content wrapper | `width?` | default (1200px), wide |
| `Section.astro` | Page section with padding | `id?`, `title?`, `class?` | -- |
| `Button.astro` | Call-to-action link/button | `href`, `variant`, `size` | primary, ghost, icon |
| `Badge.astro` | Status/label indicator | `variant` | default, success, warning, accent |
| `Tag.astro` | Tech tag or category | `text` | -- |
| `Metric.astro` | Large number + label | `value`, `label` | -- |
| `Divider.astro` | Subtle horizontal rule | -- | -- |

### Feature Components

| Component | Location | Purpose |
|---|---|---|
| `Header.astro` | `shared/` | Top navigation (3 links) |
| `Footer.astro` | `shared/` | Social links + copyright |
| `SEO.astro` | `shared/` | Head meta tags, OG, JSON-LD |
| `Hero.astro` | `home/` | Name + positioning + CTAs |
| `SelectedWork.astro` | `home/` | 2x2 grid of featured projects |
| `CaseStudy.astro` | `projects/` | Full case study rendering |
| `Architecture.astro` | `projects/` | SVG/Mermaid data flow diagram |
| `TechStack.astro` | `projects/` | Visual tech grid by layer |
| `MetricsRow.astro` | `projects/` | Horizontal metric callouts |
| `EngineeringNote.astro` | `engineering/` | Single note layout |
| `TableOfContents.astro` | `engineering/` | Sticky sidebar TOC |
| `BuildingCard.astro` | `building/` | Project card with status |
| `StatusBadge.astro` | `building/` | Planning/Building/Testing/Live |

### Layouts

| Layout | Path | Content Slot | Features |
|---|---|---|---|
| `BaseLayout.astro` | `layouts/` | `<slot />` | Header, Footer, SEO, global styles |
| `CaseStudyLayout.astro` | `layouts/` | `<slot />` | Sidebar nav, sticky TOC, project metadata |
| `EngineeringLayout.astro` | `layouts/` | `<slot />` | Left TOC sidebar, right content |

## 4. Design System

### Spacing Scale (4px grid)

```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160
```

### Typography Scale

```css
/* Headings */
--text-hero:   64px/4rem   Inter ExtraBold 800
--text-h1:     40px/2.5rem Inter Bold 700
--text-h2:     28px/1.75rem Inter SemiBold 600
--text-h3:     20px/1.25rem Inter SemiBold 600

/* Body */
--text-body:   16px/1rem   Inter Regular 400
--text-small:  14px/0.875rem Inter Regular 400
--text-caption:13px/0.8125rem Inter Regular 400

/* Code */
--text-code:   14px/0.875rem JetBrains Mono 400
```

### Breakpoints

```
Mobile:  0 - 768px
Tablet:  769px - 1024px
Desktop: 1025px+
```

### Semantic Colors

```css
--bg-primary:   #0A0A0B    /* Main background */
--bg-secondary: #121212    /* Section backgrounds */
--bg-tertiary:  #1A1A1A    /* Cards, code blocks */
--border:       #232323    /* Subtle borders, separators */
--text-primary: #EDEDEF    /* Headings, body text */
--text-secondary:#9CA3AF   /* Captions, metadata */
--accent:       #0077B5    /* Links, interactive elements */
--accent-hover: #0099E0    /* Hover states */
--metric:       #22C55E    /* Positive metrics, results */
--code-bg:      #111111    /* Inline code background */
```

### Accessibility

- All interactive elements must be keyboard-focusable
- Focus-visible outlines: 2px solid var(--accent) with 2px offset
- Contrast ratio ≥ 4.5:1 for all text
- Semantic HTML (nav, main, article, section, aside)
- ARIA labels on icon-only links
- Reduced motion: no animations to respect prefers-reduced-motion

## 5. GitHub Integration

### Strategy

- Build-time fetch via `fetch()` in Astro page load functions
- Cache responses to `node_modules/.cache/github.json` for development
- Display: repo list with metadata + recent activity feed
- Graceful degradation: if API fails, show nothing (no broken UI)

### Endpoints

```
GET /users/juandelaf1/repos?sort=pushed&per_page=10&type=source
GET /users/juandelaf1/events?per_page=10
```

### Data Shape

```typescript
interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  pushed_at: string;
  topics: string[];
}

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: { action?: string; ref?: string };
}
```

## 6. Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Total page weight | < 150 KB |
| JavaScript per page | < 5 KB (only if absolutely needed) |
| Time to Interactive | < 2s |
| Cumulative Layout Shift | 0 |

### Strategy

- Zero client-side JavaScript for content pages
- No framework hydration
- Fonts: Inter + JetBrains Mono from Google Fonts (preloaded)
- Images: SVG for diagrams, optimized PNG for screenshots
- No external tracking scripts at launch
- CSS inlined in `<head>` for critical path

## 7. SEO Strategy

### Per-Page Metadata
- Unique `<title>` (format: "Page Name — Juan de la Fuente")
- Unique `<meta name="description">`
- Open Graph: title, description, image, type, url
- Twitter Cards: summary_large_image
- Canonical URL

### Structured Data
- Homepage: `Person` with sameAs (LinkedIn, GitHub)
- Projects: `CreativeWork` with author, description, url, date

### Technical
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` allowing all
- RSS feed for engineering notes (future)

## 8. File Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── images/
│   │   ├── projects/
│   │   └── og/
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Tag.astro
│   │   │   ├── Metric.astro
│   │   │   ├── Container.astro
│   │   │   ├── Section.astro
│   │   │   └── Divider.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   └── SelectedWork.astro
│   │   ├── projects/
│   │   │   ├── CaseStudy.astro
│   │   │   ├── Architecture.astro
│   │   │   ├── TechStack.astro
│   │   │   └── MetricsRow.astro
│   │   ├── engineering/
│   │   │   ├── NoteList.astro
│   │   │   └── TableOfContents.astro
│   │   ├── building/
│   │   │   ├── BuildingCard.astro
│   │   │   └── StatusBadge.astro
│   │   └── shared/
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       └── SEO.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── CaseStudyLayout.astro
│   │   └── EngineeringLayout.astro
│   │
│   ├── content/
│   │   ├── config.ts           # Content collection schemas
│   │   ├── projects/
│   │   │   ├── sky-cast.mdx
│   │   │   ├── optimus-price.mdx
│   │   │   ├── dash-logistics.mdx
│   │   │   ├── net-tension.mdx
│   │   │   ├── attention-observatory.mdx
│   │   │   ├── devera-ds.mdx
│   │   │   ├── en-ruta.mdx
│   │   │   └── raspal-scraper.mdx
│   │   ├── engineering/
│   │   │   ├── duckdb-in-production.mdx
│   │   │   └── testing-data-pipelines.mdx
│   │   ├── experiments/
│   │   │   └── spanish-wine-eda.mdx
│   │   └── building/
│   │       └── golden-forecast.mdx
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   └── [slug].astro
│   │   ├── engineering/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── experiments/
│   │   │   └── [slug].astro
│   │   └── building.astro
│   │
│   ├── lib/
│   │   ├── github.ts
│   │   └── utils.ts
│   │
│   ├── config/
│   │   └── site.ts
│   │
│   └── styles/
│       └── global.css
│
├── docs/
│   ├── VISION.md
│   ├── BRAND.md
│   ├── PORTFOLIO_RULES.md
│   ├── CASE_STUDY_TEMPLATE.md
│   ├── CONTENT_GUIDE.md
│   ├── ROADMAP.md
│   ├── DECISIONS.md
│   ├── AGENT_CONTEXT.md
│   └── TECHNICAL_SPEC.md
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```
