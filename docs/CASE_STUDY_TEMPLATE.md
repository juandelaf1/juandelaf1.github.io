# Case Study Template

Every project follows this exact structure. The template is enforced through the MDX content collection schema and the case study layout component.

---

## Frontmatter

```yaml
---
title: "Project Name"
description: "One-line description. Max 15 words."
slug: "project-slug"
featured: true
order: 1
category: "Climate | Logistics | AI/ML | Analytics"
date: "2026-01-15"
status: "production | development | archived"

metrics:
  - value: "+30%"
    label: "net revenue improvement"
  - value: "R² = 0.987"
    label: "cost prediction accuracy"

tech:
  - name: "Python"
    icon: "python"
  - name: "FastAPI"
    icon: "fastapi"
  - name: "PostgreSQL"
    icon: "postgresql"

links:
  github: "https://github.com/juandelaf1/project"
  demo: "https://project.vercel.app"
  docs: "https://project-docs.vercel.app"

image: "./images/project-architecture.png"
---
```

---

## Content Sections

### 1. Context

What business problem exists? Who experiences it? What is the cost of not solving it?

Format: 2-3 paragraphs. Start with the business domain, end with the specific problem addressed.

### 2. Challenges

What made this problem difficult? Be specific. Data quality? Scale? Integration complexity? Stakeholder alignment? Regulatory constraints?

Format: Bullet points or short paragraphs. Max 5 challenges.

### 3. Solution

How does the system work? Start with the architecture diagram, then explain the flow.

#### Architecture

Include an architecture diagram. SVG or Mermaid preferred. Show data sources, processing steps, storage, and outputs.

#### Pipeline

Describe the data flow step by step. What enters the system? How is it transformed? What leaves it?

#### Tech Stack

Visual grid of technologies used, grouped by layer:
- Data Sources
- Processing
- Storage
- API / Interface
- Infrastructure

### 4. Implementation

Key implementation decisions. Why was each technology chosen? What tradeoffs were made?

Format: 1-2 paragraphs per major component. No code snippets unless they demonstrate an architectural pattern.

### 5. Results

Specific, measured outcomes. Use the Metric component for visual emphasis.

Examples:
- Revenue: +30% net revenue improvement
- Accuracy: R² = 0.987 on cost prediction
- Scale: 16,402 posts analyzed across 7 platforms
- Impact: 3.5T CO₂ emissions reduction
- Performance: 50K records processed per minute

### 6. Lessons Learned

What would be done differently today? What surprised the team? What patterns should be repeated?

Format: 3-5 specific lessons. Honest and specific. No generic "communication is important."

### 7. Future Work

What comes next? What improvements are planned? What would be done with more resources?

### 8. Links

- GitHub repository
- Live demo (if applicable)
- Documentation (if applicable)

---

## Example Metric Block

```
Revenue Impact
+30%
Net revenue improvement vs. OTA at 30% commission
```

## Example Architecture Block

[Architecture diagram showing:]
User Input → FastAPI → Feature Engineering → Random Forest Model → Pricing Output → Streamlit Dashboard

## Tech Stack Visual

Positioned as a clean grid, not badges. Grouped by layer. Each shows the technology name and a subtle icon.
