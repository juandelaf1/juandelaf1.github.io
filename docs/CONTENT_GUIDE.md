# Content Guide

## How Everything Is Written

The portfolio is documentation. Not marketing copy. Not a personal blog. Engineering documentation for a data platform, where the platform is your career.

---

## The Golden Rule

> Never sound like you are explaining to a beginner. Sound like you are documenting for a peer.

---

## Good vs. Bad Writing

### Bad (student/tutorial tone)

> "In this project, I used Python and Pandas to analyze the data. I learned a lot about data cleaning and visualization. This was a great learning experience for me."

### Good (engineering documentation tone)

> "Built an ETL pipeline processing 50K records per minute from 5 API sources. Implemented data quality checks at each transformation stage. Deployed as a Docker container with CI/CD pipeline running 180 tests."

### Bad (marketing/freelancer tone)

> "I'm passionate about leveraging data to drive actionable insights and empower businesses to make better decisions."

### Good (professional tone)

> "Designed a cost prediction model achieving R² = 0.987 on logistics data. The model reduced forecasting error by 40% compared to the previous manual method."

---

## Sentence Style

- Start with the action, not the context
  - ✓ "Built a real-time pipeline processing..."
  - ✗ "I had the opportunity to build a real-time pipeline that..."
- Use specific numbers before qualitative descriptions
  - ✓ "Reduced query time by 85%, from 12s to 1.8s, by implementing DuckDB incremental materialization."
  - ✗ "Significantly improved query performance."
- One idea per sentence
  - ✓ "The system ingests 10K events/second via a FastAPI endpoint. Data is validated against a Pydantic schema before entering PostgreSQL. A Streamlit dashboard refreshes every 30 seconds."
  - ✗ "The system ingests 10K events per second via a FastAPI endpoint where data is validated against a Pydantic schema before entering PostgreSQL and then a Streamlit dashboard refreshes every 30 seconds."

---

## Preferred Terminology

| Use | Avoid |
|---|---|
| Built | Created, developed, made |
| Designed | Architected, crafted |
| Shipped | Pushed, deployed |
| Measured | Tracked, monitored |
| Improved | Optimized, enhanced |
| Business problem | Challenge, pain point |
| Production | Live, real-world |
| Data product | Dashboard, tool, solution |
| Pipeline | Workflow, process |
| System | Application, platform |
| Metric | KPI, insight |
| Domain expertise | Business knowledge |
| Tradeoff | Decision |
| End to end | Full stack |
| Architecture | Design (of systems) |

---

## Emotional Language

Never use:
- passionate
- excited
- love (as in "I love data")
- journey
- empowering
- driving value
- impactful
- game-changer
- bleeding edge

---

## Professional Tone

### Be Specific, Not Generic

- ✓ "Reduced manual reporting time from 8 hours to 20 minutes per week."
- ✗ "Improved efficiency and saved time."

### Be Honest About Constraints

- ✓ "The model was trained on 6 months of data. With 2+ years, accuracy would improve."
- ✗ "The model is perfectly accurate and production-ready."

### Take Ownership

- ✓ "Built the pipeline from data extraction to dashboard deployment."
- ✗ "Was part of a team that built..."

(Note: always be honest about collaboration. If it was a team, say "Co-built" or "Led the development of")

---

## Engineering Notes Tone

Engineering notes are technical documentation. They assume the reader:
- Knows Python and SQL
- Understands data engineering concepts
- Is looking for patterns, not instructions

Structure:
1. Problem statement (1 paragraph)
2. Approach (architecture or decision tree)
3. Implementation details (with code blocks)
4. Results / Benchmarks
5. Key takeaway (1 sentence)

No "Introduction to X." No beginner context. Just the engineering decision and its outcome.

---

## Headline Patterns

### Homepage Tagline (evergreen)
> "I build data products. End to end. From raw data to production API."

### Project Titles
- "Predicting Hotel Revenue with ML-Driven Dynamic Pricing"
- "Enterprise Climate Intelligence Platform for Multi-Source Environmental Data"
- "Cost Prediction Engine for Multi-Market Logistics Operations"

### Section Headers
- Selected Work
- Case Studies
- Engineering Notes
- Currently Building
- Experiments
