# TransferVista Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation site for [TransferVista](https://transfervista.com), built with Astro + Starlight. Deploys to GitHub Pages at the `/docs` base path.

## Project Structure

```
.
├── public/                 # Static assets (e.g. screencasts)
├── src/
│   ├── assets/            # Images, screenshots (reference in Markdown)
│   ├── content/
│   │   └── docs/
│   │       └── en/        # English docs (one folder per sidebar section)
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── PLAN.md                # Master plan: sections, pages, content requirements
└── tsconfig.json
```

Content lives in `src/content/docs/en/`. Each section (e.g. `getting-started`, `bookings`) is a folder; pages use numeric prefixes for order (`01-overview.mdx`, `02-quick-start.md`). Use `.mdx` when you need Starlight components (e.g. `Card`, `LinkButton`); otherwise `.md` is fine.

Screenshots go in `src/assets/` (e.g. `screenshots/`); static media like videos go in `public/` (e.g. `public/screencasts/`).

## Commands

Run from the project root:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at **http://localhost:4321** (site at `/docs`) |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Serve `./dist/` locally before deploying    |
| `npm run astro -- --help` | Astro CLI help                      |

## Improving the docs

1. **Use [PLAN.md](PLAN.md) as your source of truth.** It lists sections, pages, file paths, and content requirements (checklists per page). Pick a page or section and tick off requirements as you complete them.

2. **Edit in the right place.** English docs are under `src/content/docs/en/`. Match the section and numeric-prefix filenames from PLAN (e.g. Introduction is `getting-started/01-introduction.mdx`). Add `title` and `description` in each file's frontmatter.

3. **Follow content guidelines.** See the end of PLAN.md: clear language, step-by-step instructions, screenshots where helpful, cross-links to related pages.

4. **Preview and build.** Run `npm run dev` while editing. Before committing, run `npm run build` (and optionally `npm run preview`) to catch build errors.

5. **Deploy.** Push to `main`; GitHub Actions builds and deploys to GitHub Pages. No manual deploy step.

## Want to learn more?

- [Starlight docs](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
