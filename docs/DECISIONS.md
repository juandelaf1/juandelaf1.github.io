# Architectural Decisions

## Why Astro

**Context:** Need a static site generator that produces zero-JS output, supports MDX content, and scales to 50+ content pages without framework overhead.

**Decision:** Use Astro.

**Rationale:**
- Generates static HTML by default → perfect for GitHub Pages
- MDX support → case studies and engineering notes as content files
- Island architecture → only ship JS where truly needed (zero on this site)
- Content collections → type-safe frontmatter schema for case studies
- Image optimization built-in → architecture diagrams served efficiently
- Smallest possible output → fastest load times for recruiters
- Component model similar to React/Vue → maintainable over time

**Rejected alternatives:**
- Next.js (static export): heavier build, more complexity, overkill for a content site. Good for apps, not for this use case.
- Hugo: Go-based, powerful but less ergonomic for content-driven design with custom layouts
- Jekyll: Ruby-based, native to GitHub Pages, but limited flexibility for modern design systems and component reuse
- Plain HTML/CSS: no templating, no content collections, every page manually maintained
- 11ty: great but smaller ecosystem, fewer integrations

---

## Why Markdown/MDX for Content

**Context:** Content must be decoupled from presentation. Adding a new project should take < 5 minutes.

**Decision:** Store all content as Markdown/MDX files in `src/content/` organized by collection (projects, engineering, experiments, building).

**Rationale:**
- Frontmatter supports structured metadata (metrics, tech stack, links)
- MDX allows inline components (architecture diagrams, metric callouts, tech grids) where needed
- Content collections provide type-safe schemas with validation
- Git-tracked → version history for all content changes
- No database, no CMS, no external service
- Easy diff review in pull requests

---

## Why Static Generation

**Context:** The site is a portfolio. It does not need per-request rendering, user authentication, or real-time data.

**Decision:** Fully static. Build once, deploy to CDN.

**Rationale:**
- Fastest possible load times (no server round-trip)
- Free hosting on GitHub Pages
- No server costs, no maintenance
- Perfect SEO (HTML is pre-rendered)
- Resilient (no runtime failures)
- CDN distribution by default

---

## Why GitHub API Integration at Build Time

**Context:** Need to display recent GitHub activity without client-side API calls.

**Decision:** Fetch GitHub API during `astro build` using `fetch()`, cache results, and render as static HTML.

**Rationale:**
- No client-side JavaScript needed
- No API tokens exposed to the browser
- Content updates when the site is rebuilt (git push)
- GitHub API has generous rate limits for unauthenticated GET requests
- Cache layer prevents build failures if API is temporarily unavailable

---

## Why Architecture Diagrams

**Context:** Data products are fundamentally about data flow. Text descriptions of architecture are slow to parse.

**Decision:** Every case study must include an architecture diagram.

**Rationale:**
- A diagram communicates in 3 seconds what text communicates in 30 seconds
- Shows engineering thinking visually
- Forces clarity about how data moves through the system
- Raises the bar above text-only case studies
- Recruiters scanning the page see system thinking immediately

**Implementation:** SVG inline (via MDX component) or Mermaid diagrams. SVGs preferred for pixel-perfect control. Mermaid for faster iteration.

---

## Why Reusable Components

**Context:** The site has repeating patterns (metrics, tech stacks, architecture blocks, badges) that appear across multiple case studies.

**Decision:** Extract all repeating patterns into reusable Astro components.

**Rationale:**
- Single source of truth for design patterns
- Consistent rendering across all case studies
- Changes propagate automatically
- DRY principle applies to design as much as code
- New case studies are composed from existing components

---

## Why No Animations

**Context:** Most portfolios use animations to impress. This portfolio impresses through content.

**Decision:** Zero decorative animations. Functional transitions only (150ms hover states).

**Rationale:**
- Animations distract from content
- Animations increase cognitive load
- Animations suggest "design portfolio" not "engineering portfolio"
- Engineers and CTOs value clarity over flash
- Faster page load without animation frameworks

---

## Why Dark Mode Only

**Context:** Dark mode is strongly associated with developer tools and technical products (VSCode, terminal, Linear, Vercel, GitHub).

**Decision:** Ship dark mode only. No light mode toggle.

**Rationale:**
- Reinforces the technical/developer positioning
- Eliminates design surface area (maintaining two color schemes)
- Avoids the "default portfolio template" look (most templates offer light/dark toggles)
- Consistent with the brand inspiration (Linear, Vercel, Stripe docs dark theme)

---

## Why 4 Projects on Homepage

**Context:** The homepage must communicate capability in under 60 seconds.

**Decision:** Show exactly 4 selected projects. No more.

**Rationale:**
- 4 is the maximum number a visitor can process in one glance
- Forcing selection raises quality standards
- Prevents homepage bloat
- Creates curiosity to explore the full case studies section

---

## Why No "About Me" Section

**Context:** Personal biographies are the default in portfolios. They rarely add value for technical hiring.

**Decision:** The homepage does not have an "About Me" section.

**Rationale:**
- The work speaks louder than a biography
- Professional context emerges naturally through case studies
- Redundant with LinkedIn
- Removes temptation to write generic value statements

---

## Technology Stack Summary

| Category | Choice | Why |
|---|---|---|
| Framework | Astro 5 | Static-first, MDX, content collections |
| Language | TypeScript | Type safety for content schemas |
| Content | MDX | Frontmatter + inline components |
| Styling | CSS custom properties | No runtime, no framework lock-in |
| Typography | Inter + JetBrains Mono | Professional, technical aesthetic |
| Diagrams | SVG/Mermaid | Visual clarity for architecture |
| Deployment | GitHub Pages | Free, static, CDN-backed |
| Source Control | Git | Version history for identity |
