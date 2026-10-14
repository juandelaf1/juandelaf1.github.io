# Session State

Continuity document. Updated after each RUN. Read this first to resume without repeating diagnostics.

---

## Last RUN: RASPAL_SCRAPER Publication — Completed 2026-10-14

### What was published

| Channel | Artifact | Status | Evidence |
|---|---|---|---|
| Portfolio web | Case study `/projects/raspal-scraper/` | ✅ Live | HTTP 200, GitHub Actions deploy success on `dd64fc3` |
| Portfolio repo | MDX commit | ✅ Pushed | `dd64fc3` "docs(portfolio): add RASPAL Scraper case study" (129 lines, `main`) |
| Source repo README | Link to case study | ✅ Pushed | `95ef201` "docs: add portfolio case study link to README" (2 lines, `master`) |
| Cross-links | Portfolio ↔ repo | ✅ Verified | Both directions return HTTP 200, URLs correct |
| Docker Hub | `juandelaf/raspal` | ✅ Reused | v0.6.1 image, 2110 pulls, no code changes since publish |
| PyPI | `raspal` 0.6.1 | ✅ Reused | 6 releases, no code changes since publish |

### What was prepared but NOT published

- **LinkedIn draft**: ready below. Requires explicit authorization to post.
- **GitHub pinned repos**: RASPAL_SCRAPER (0 stars) does not displace current pins (SkyCast, OptimusPrice, DashLogistics, Attention_Observatory, DataScope, NetTension). No change made. Recommendation: keep as-is; revisit when the tool gains traction.

### What was evaluated as not applicable

- **Kaggle**: 0 `.ipynb`, 0 datasets in RASPAL_SCRAPER. Not applicable.
- **Hugging Face**: 0 models/datasets/Spaces. RASPAL uses user-downloaded Ollama models; does not distribute its own. Not applicable.

### Repositories touched

| Repo | Branch | Commits | Working tree |
|---|---|---|---|
| `juandelaf1/juandelaf1.github.io` | `main` | `7560461` → `dd64fc3` | Clean |
| `juandelaf1/RASPAL_SCRAPER` | `master` | `a238ccf` → `95ef201` | 1 untracked dir `src/raspal/web/templates/` (empty, pre-existing, untouched) |

### Portfolio inventory (case studies)

- Published: SkyCast, OptimusPrice, DashLogistics, NetTension, CASE, **RASPAL_SCRAPER** (6 total)
- Featured on homepage: 5 (case, sky-cast, optimus-price, dash-logistics, net-tension) — RASPAL is `featured: false`, Rule 11 intact
- Pending: Attention Observatory (blocked on 6 modified + 5 untracked files — needs decision first), Devera_DS, EnRuta

---

## LinkedIn Draft (NOT published — awaiting authorization)

**Language decision**: Draft in English (matches portfolio language and international reach). Adapt to Spanish if preferred for local network.

---

Just shipped a full case study for **RASPAL Scraper** — a web scraping framework where extraction runs on your own machine via local AI (Ollama). No API keys, no data leaving your laptop.

What it does:
- 3 extraction engines (scrapling / playwright / stealth) with automatic fallback
- YAML-defined pipelines, rate limiting, caching, and queue management
- CLI with 16 commands, Docker image, and a FastAPI dashboard
- Published on PyPI (`pip install raspal`) and Docker Hub (2,100+ pulls)

Engineering highlights:
- 81 passing tests (14s suite), CI on Python 3.11 + 3.12 with Ruff
- Compliance checker that actually parses robots.txt
- Multi-arch Docker builds (amd64 + arm64)
- Trusted publishing to PyPI via GitHub Actions

This project taught me a lot about building developer tools that feel like products: clear CLI ergonomics, honest documentation, and treating local-first privacy as a feature, not a limitation.

Case study with architecture and trade-offs: https://juandelaf1.github.io/projects/raspal-scraper
Source code: https://github.com/juandelaf1/RASPAL_SCRAPER

#AnalyticsEngineering #WebScraping #LocalAI #Python #OpenSource

---

## Next Steps (master plan backlog)

1. **Attention Observatory case study** — resolve 6 modified + 5 untracked files first, then write MDX
2. **EnRuta or Devera_DS case study** — user choice
3. **README of portfolio** — evaluate GitHub profile README (`juandelaf1/juandelaf1`) if not already done
4. **G2–G6 security hits** — each requires separate authorization; do not start without it
