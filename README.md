# Portfolio (Astro + Starlight)

A personal portfolio site for showing off projects. It's built on [Starlight](https://starlight.astro.build), so every page comes with dark mode, a sidebar, and a table of contents.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output goes to ./dist
```

## Make it yours

1. **Site info:** in `astro.config.mjs`, set `site`, `title`, and the `social` links.
2. **Homepage:** edit `src/content/docs/index.mdx`, and swap `src/assets/profile.png` for your own image.
3. **About page:** edit `src/content/docs/about.mdx`.
4. **Colors:** change `--sl-hue-accent` in `src/styles/custom.css`.

## Adding a project

Create `src/content/docs/projects/<slug>.md` (or `.mdx` if you want Starlight components such as Tabs, Steps, or Asides):

```yaml
---
title: My Project
description: One-line summary shown on the card.
date: 2026-01-01
status: active        # active | completed | wip | archived
featured: true        # also show it on the homepage
stack: [Astro, TypeScript]
repo: https://github.com/you/project
demo: https://project.example.com
---
```

It appears automatically on the projects grid, on the homepage if it's featured, and in the sidebar.

## Project structure

```
src/
├── components/          # Hero, AboutTeaser, ProjectCard/Grid, Role, Skills, ContactButtons
├── content/docs/
│   ├── index.mdx        # homepage
│   ├── about.mdx
│   └── projects/        # one file per project
├── content.config.ts    # frontmatter schema (status, stack, repo, …)
├── lib.ts               # collection helpers
└── styles/custom.css    # theme colors
```
