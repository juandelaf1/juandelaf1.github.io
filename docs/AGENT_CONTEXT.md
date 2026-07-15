# Agent Context

## Permanent Instructions for AI Agents

This file must be read by any AI agent before making changes to this repository. It defines the project's identity, constraints, and decision framework.

---

## Identity

This repository is **not a portfolio website**. It is the public representation of a professional identity. Every line of code, every word of content, every design decision must reinforce the following positioning:

> *"I build data products. End to end. From raw data to production APIs and interactive systems."*

The target audience is:
- Technical recruiters at product/tech companies
- Engineering managers (data platforms, analytics engineering)
- CTOs / VPs of Engineering

They must think within 60 seconds of visiting:
> *"This person knows how to build production-ready data products that solve real business problems."*

---

## Always Read This File First

Before making any change—code, content, design, or structure—read this file. Your changes must comply with everything below.

---

## Core Rules (Immutable)

1. **Every page must have a clear purpose.** If a page does not help a recruiter understand capability, remove it.

2. **Every project is a case study.** Context → Challenges → Architecture → Results → Lessons. No exceptions.

3. **No decorative elements.** Zero animations unless functional (hover states). Zero particles. Zero gradients as decoration.

4. **No placeholder content.** Every word must be final. No "Lorem ipsum." No "Coming soon."

5. **No fake metrics.** Every number must be real and verifiable.

6. **No tutorial content.** Write for peers, not beginners. Explain decisions, not steps.

7. **Dark mode only.** No light mode toggle.

8. **Content is decoupled from presentation.** Projects live as MDX files in content collections. Adding a project means creating one file.

9. **Architecture diagrams are required.** Every case study must include a visual data flow diagram.

10. **The homepage shows exactly 4 projects.** No more.

---

## Design Constraints

- **Colors:** `#0A0A0B` background, `#EDEDEF` text, `#0077B5` accent, `#22C55E` metrics
- **Fonts:** Inter (headings/body), JetBrains Mono (code)
- **Spacing:** 4px grid, max-width 1200px, 24px padding
- **Navigation:** Header with Projects, Engineering, Building links only
- **Components:** Must be reusable. Metric, TechStack, Architecture, Badge, Button, Tag
- **Interactions:** 150ms ease transitions. Border highlight on card hover. No scroll animations.

## Content Constraints

- **Tone:** Professional, precise, direct. Engineering documentation, not marketing.
- **Titles:** [Verb] [Noun] for [Business Context]. Example: "Predicting Hotel Revenue with ML-Driven Dynamic Pricing."
- **Metrics:** Always specific numbers. Never "significant improvement."
- **Vocabulary bypass:** Never use: passionate, journey, empowering, impact (as verb), leverage, utilize, amazing, incredible.
- **Self-description:** "Data Product Engineer" or "built data products." Not "data analyst who also codes."

---

## Decision Framework

When faced with a choice, ask:

1. Does this help a recruiter understand capability faster?
2. Does this make the site more or less professional?
3. Does this reinforce the "engineering documentation" feel?
4. Would Stripe/Vercel/Linear do this on their site?
5. Is this adding signal or noise?

If the answer to any of 1-3 is "no" or 4-5 is "noise", don't do it.

---

## Priority Order

1. **Clarity** over cleverness
2. **Content** over design
3. **Simplicity** over trends
4. **Engineering thinking** over visual effects
5. **Measurable outcomes** over described effort
6. **Business problems** over technology features

---

## Technology Stack

| Component | Choice | Constraint |
|---|---|---|
| Framework | Astro 5 | Static generation only |
| Language | TypeScript | Strict mode |
| Content | MDX | Per-content-collection schema |
| Styling | CSS Custom Properties | No Tailwind, no CSS-in-JS |
| Diagrams | SVG inline or Mermaid | Must be self-contained |
| GitHub API | Build-time fetch only | No runtime client calls |
| Deployment | GitHub Pages | Static output to `gh-pages` branch |
| SEO | `@astrojs/sitemap` + manual meta | Every page gets unique OG |

## Common Mistakes to Avoid

- Adding a "Blog" section (it's "Engineering Notes")
- Using hero icons or Font Awesome (use minimal inline SVGs)
- Adding a contact form (email link is sufficient)
- Making the resume an HTML page (it's a PDF download)
- Adding a photo of yourself (no personal photos)
- Adding social media links beyond LinkedIn/GitHub
- Using "I" excessively (active voice, but vary sentence starts)
- Adding a "View all projects" link on homepage
- Creating a "Skills" section with progress bars

---

## Verification Checklist

Before any pull request or commit, verify:

- [ ] Does this change comply with all 10 Core Rules?
- [ ] Does this change make the site feel more like Stripe docs or less?
- [ ] Are there any placeholder texts, fake metrics, or filler sections?
- [ ] Is the tone engineering-documentation, not marketing or tutorial?
- [ ] Are design tokens used consistently (colors, spacing, typography)?
- [ ] Does the change work without JavaScript?
- [ ] Is the page under 100KB total transfer?
- [ ] Does the new content add specific, measurable information?
- [ ] Is the navigation still minimal (no new top-level links)?

---

## How to Add a New Project

1. Create `src/content/projects/[slug].mdx`
2. Add frontmatter per the schema (title, description, date, category, metrics, tech, links)
3. Write the case study using the template sections
4. If featured (top 4), set `featured: true` and adjust `order`
5. Add an architecture diagram (SVG or Mermaid)
6. Done. The project auto-appears in the collection and its page auto-generates.

No other files need to be modified.

---

## Final Instruction

> **Protect the identity.**
>
> This repository exists to communicate one thing: that its owner builds production-ready data products that solve real business problems.
>
> Every change either serves this mission or undermines it.
>
> There is no neutral change.
