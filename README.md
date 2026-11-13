# Kyle Zeman portfolio

Static portfolio site built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

- Projects: one Markdown file each in `projects/`, images in `public/images/projects/<slug>/`.
- Everything else (contact, experience, skills, About text): `src/data/site.ts`.
- Full instructions for editing and adding projects: `CLAUDE.md`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose Add New > Project and import the repository.
3. Vercel detects Astro. Keep the defaults (build `npm run build`, output `dist`) and deploy.

Every later push to the main branch redeploys the site.
