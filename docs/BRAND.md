# Brand

## Visual Identity

### Design Philosophy

Minimalist. Premium. Technical. Dark.

The website should feel closer to Stripe's documentation or Vercel's marketing site than a personal portfolio. Every pixel must serve a purpose. If something does not help the recruiter understand capability faster, remove it.

### Color System

```
--bg-primary:    #0A0A0B     (main background — Vercel/Linear dark)
--bg-secondary:  #121212     (section backgrounds)
--bg-tertiary:   #1A1A1A     (cards, code blocks)
--border:        #232323     (subtle borders)
--text-primary:  #EDEDEF     (headings, body)
--text-secondary:#9CA3AF     (captions, metadata)
--accent:        #0077B5     (LinkedIn blue — personal brand)
--accent-hover:  #0099E0     (hover states)
--metric:        #22C55E     (positive metrics, results)
--code-bg:       #111111     (inline code background)
```

The accent blue is taken from the LinkedIn brand because that is where professional recognition happens. It ties the personal brand to the professional network without being aggressive.

### Typography

```
Headings:  Inter (sans-serif) — ExtraBold 800 / SemiBold 600
Body:      Inter — Regular 400
Code:      JetBrains Mono — Regular 400
```

Inter is the font of choice at Vercel, Stripe, Linear, GitHub, and Supabase. It communicates modernity, clarity, and engineering culture.

JetBrains Mono is used exclusively for code blocks, terminal commands, and data schemas. It signals technical depth without being decorative.

### Size Scale

```
Hero title:   64px / 4rem     Inter ExtraBold
H1:           40px / 2.5rem   Inter Bold
H2:           28px / 1.75rem  Inter SemiBold
H3:           20px / 1.25rem  Inter SemiBold
Body:         16px / 1rem     Inter Regular
Small:        14px / 0.875rem Inter Regular
Caption:      13px / 0.8125rem Inter Regular
Code:         14px / 0.875rem JetBrains Mono
```

### Spacing

4px base grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160

Max content width: 1200px with 24px padding on each side.

### Iconography

Minimal. Line-based. Consistent stroke width (1.5px or 2px). No filled icons. Color only when functional (e.g., green for metrics, blue for links).

### Imagery

- Architecture diagrams (SVG, Mermaid, or hand-designed)
- Screenshots of production systems (dashboards, APIs, pipelines)
- NO photos of people (including selfies)
- NO stock photography
- NO gradients as decoration

---

## Writing Style

### Tone

Professional. Precise. Direct. Technical.

Write as if documenting a production system for another engineer. Every sentence should carry information. Nothing exists to fill space.

### Voice Principles

1. **Active voice.** "Built an ETL pipeline that processes 50K records/min" not "An ETL pipeline was built..."
2. **Specific numbers.** Never "significant improvement" — always "+30% revenue" or "R² = 0.987"
3. **Business-first.** Start with the problem, not the technology
4. **No superlatives.** Never "amazing", "incredible", "revolutionary"
5. **No buzzwords.** Never "synergy", "leverage", "drill down", "circle back"
6. **No self-deprecation.** Never "just a data analyst", "still learning", "my little project"
7. **No academic padding.** Never "utilize" instead of "use", "leveraged" instead of "used"

### Vocabulary

| Say | Never Say |
|---|---|
| Built | Created, developed |
| Designed | Architected |
| Shipped | Deployed |
| Measured | Tracked |
| Improved | Optimized |
| Business problem | Challenge |
| Production | Live |
| System | Solution, tool |
| Pipeline | Flow, process |
| Metric, KPI | Insight (as a noun) |
| Data product | Dashboard, report |

### Case Study Titles (Pattern)

- `[Verb] [Noun] for [Business Context]`
- Examples:
  - "Predicting Hotel Revenue with Random Forest"
  - "Reducing Logistics Costs with ML-Based Forecasting"
  - "Measuring Digital Attention Across 7 Platforms"
  - "Building an Enterprise Climate Intelligence Platform"

---

## UX Philosophy

### Navigation

- Minimal. Three links max in header: Projects, Engineering, Building
- No hamburger menu on desktop
- Every page is one click from home
- No dropdowns, no mega-menus, no breadcrumbs

### Content Density

- Generous whitespace
- Short paragraphs (max 3-4 lines)
- Metric callouts break up text blocks
- Architecture diagrams replace long descriptions

### Interaction

- Links change color on hover (accent-hover)
- Cards have subtle border highlight on hover (1px → 1.5px, color shift)
- No hover animations that move content
- No parallax, no scroll-triggered animations
- Transitions: 150ms ease for everything

### Mobile

- Same content, reflowed
- Full-width on small screens
- Sidebar navigation becomes top table of contents
- Touch targets minimum 44px

---

## Inspirations

| Site | Why |
|---|---|
| stripe.com/docs | Technical documentation clarity |
| vercel.com | Product-first marketing, typography |
| linear.app | Clean dark mode, minimal navigation |
| supabase.com/docs | Developer documentation style |
| anthropic.com | Premium minimalism, restrained design |
| datadoghq.com | Data platform positioning |
| github.com | Developer identity, README culture |
