# Data Reporting & Automation Toolkit

A production-style monorepo that demonstrates data ingestion, automation workflows, report generation, API design, and animated frontend experiences for portfolio and recruiter review.

## What this project includes

- **Operational web app (`apps/web`)**
  - Next.js 15 + TypeScript foundation
  - Motion-based UI sections and dashboard-oriented structure
- **Backend API (`apps/api`)**
  - Express + TypeScript
  - Security middleware (Helmet, CORS, rate limiting)
  - Zod-backed request validation patterns
  - Swagger documentation endpoint
- **Automation service (`services/automation`)**
  - Python ETL and report utility stubs
  - Pandas/NumPy/OpenPyXL-ready dependencies
- **Data model (`prisma`)**
  - PostgreSQL Prisma schema for users, reports, workflows, ETL jobs, uploads, logs, notifications, and schedules
- **Animated GitHub Pages demo (`demo`)**
  - Vite + React + Framer Motion static app
  - Includes branded footer and source-code link
- **DevOps assets**
  - Dockerfiles and Docker Compose
  - CI workflow and deployment docs

## Repository structure

```text
dataops-toolkit
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-demo-pages.yml
├── .env.example
├── .gitkeep
├── LICENSE
├── README.md
├── apps/
│   ├── api/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── server.ts
│   │   └── tsconfig.json
│   └── web/
│       ├── Dockerfile
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package.json
│       ├── src/
│       │   └── app/
│       │       ├── layout.tsx
│       │       └── page.tsx
│       └── tsconfig.json
├── demo/
│   ├── index.html
│   ├── package.json
│   ├── src/
│   │   ├── main.jsx
│   │   └── styles.css
│   └── vite.config.js
├── docker-compose.yml
├── docs/
│   └── DEPLOYMENT.md
├── images/
│   └── app-image.png
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── services/
    └── automation/
        ├── etl/
        │   └── runner.py
        ├── reports/
        │   └── generate_report.py
        └── requirements.txt
```

## Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose (for container workflow)
- Python 3.11+ (for automation service local execution)

## Local development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment files

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
cp services/automation/.env.example services/automation/.env
```

### 3) Run all services in containers

```bash
docker compose up --build
```

## Running apps individually

### API

```bash
npm run dev --workspace @dataops/api
```

### Web app

```bash
npm run dev --workspace @dataops/web
```

### Demo site

```bash
npm run dev --workspace @dataops/demo
```

### Automation scripts (example)

```bash
python services/automation/etl/runner.py
python services/automation/reports/generate_report.py
```

## Build commands

```bash
npm run build
```

For demo-only production output:

```bash
npm run build --workspace @dataops/demo
```

## GitHub Pages deployment (demo)

A dedicated GitHub Actions workflow is included at:

- `.github/workflows/deploy-demo-pages.yml`

### Setup steps

1. Push this repository to GitHub.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Ensure your default branch is `main` (or adjust the workflow trigger branch).
4. Push changes under `demo/**` to trigger deployment.

The workflow will:
- install dependencies in `demo`
- build static assets with Vite
- upload `demo/dist` as Pages artifact
- deploy to GitHub Pages

## API and platform capabilities

- Data ingestion entry points for CSV/Excel/JSON/API payloads
- ETL workflow and job modeling
- Queue/process-oriented architecture skeleton
- Report orchestration and export model placeholders
- Audit/API logs and notification modeling
- KPI and dashboard endpoint scaffolding

## Security baseline

- Helmet for secure headers
- CORS configuration
- Rate limiting middleware
- Validation and central error handling architecture

## Deployment references

- `docs/DEPLOYMENT.md` for platform deployment guidance
- `docker-compose.yml` for local environment bootstrapping

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
