# AI Career Atlas

A VitePress research site about emerging AI careers: Forward Deployed Engineer, Applied AI Engineer, architecture, evaluation, ML, security, product, and agent engineering.

**Website: [AI Career Atlas on GitHub Pages](https://chaseac-cpu.github.io/ai-career-atlas/)**

[GitHub repository](https://github.com/chaseac-cpu/ai-career-atlas)

## Inside

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
