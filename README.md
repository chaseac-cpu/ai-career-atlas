# AI Career Atlas

A VitePress research site about emerging AI careers: Forward Deployed Engineer, Applied AI Engineer, architecture, evaluation, ML, security, product, and agent engineering.

**Website: [AI Career Atlas on GitHub Pages](https://chaseac-cpu.github.io/ai-career-atlas/)**

[GitHub repository](https://github.com/chaseac-cpu/ai-career-atlas)

## Inside

- [Internships & entry-level hub](https://chaseac-cpu.github.io/ai-career-atlas/opportunities/getting-started.html).
- [22 real U.S. job examples](https://chaseac-cpu.github.io/ai-career-atlas/opportunities/): seven internships/co-ops, seven entry/early-career roles, four mid-level and four senior/staff examples across 18 employers.
- Search/filter directory, dated primary links, eligibility, level evidence, and pay-unit caveats.
- Eight role guides and a comparison table.
- Learning plan, portfolio ideas, and job research worksheet.
- Dated employer sources and explicit research limitations.
- Full-text local search, dark mode, automatic Pages deployment.

Research reviewed November 5, 2026. Independent editorial guidance, not a live vacancy feed.

## Local development

Node.js 22 or newer and npm required.

```sh
npm ci
npm run docs:dev
```

Build and preview:

```sh
npm run docs:build
npm run docs:preview
```

## Deployment

Pushes to main run `.github/workflows/deploy.yml`, build the site, and deploy `docs/.vitepress/dist` to GitHub Pages. Settings → Pages must use **GitHub Actions** as the source. The base path is `/ai-career-atlas/` in `docs/.vitepress/config.mts`; update it and the links if renaming the repository.

## Contribute

Edit Markdown in `docs/`. Include original employer links and dates for research changes. Distinguish observed titles from editorial suggestions. Run `npm run docs:build` before submitting a pull request.

Job directory metadata is in `docs/data/jobs.json`. Update the matching Markdown cards in `docs/opportunities/` as well. Preserve employer wording on level and eligibility; clearly label editorial interpretations. An application page being visible is not confirmation that hiring remains open.

## Tooling status

The stable VitePress 1.6.4 dependency tree currently reports three npm advisories in development/build tooling (two moderate, one high), with no automatic fix available in this stable release. Keep development servers on localhost. GitHub Pages serves only the generated static files, without a Vite development server. Recheck `npm audit` when upgrading VitePress.
