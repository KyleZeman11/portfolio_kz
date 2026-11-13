# CLAUDE.md

Guide for any AI model (or person) maintaining Kyle Zeman's engineering portfolio.
Read this whole file before changing anything.

## What this is

A static portfolio site for Kyle Zeman, a mechanical engineering student at the
University at Buffalo (graduating May 2027) applying to aerospace and defense
employers such as Moog. Readers are recruiters and engineers who spend 30 to 60
seconds per project, so every page must be scannable and technically specific.

- Framework: Astro 7 (static output, no client-side JavaScript, no adapter)
- Hosting: Vercel, auto-detected Astro preset, deploys on push to the main branch
- Live site: https://kylezeman.vercel.app (repo: KyleZeman11/portfolio_kz)
- Node 22+

## Commands

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:4321
npm run build    # must pass before committing; also validates project frontmatter
npm run preview  # serve the built site from dist/
```

## File map

```
projects/                         one Markdown file per project  <-- most edits happen here
  _template.md                    copy this to start a new project (ignored by the site)
  scissor-jack-fea.md             finished example; use it as the model for new write-ups
  adjustable-deadrise-keel.md     in progress, partial write-up
  corvette-c5-cfd.md              in progress, partial write-up
public/
  images/projects/<slug>/         images for each project, folder name = Markdown filename
  images/site/                    hero, headshot, About and contact photos
  Kyle_Zeman_Resume.pdf           the downloadable résumé (generated, see below)
resume/
  resume.html                     résumé source
  build.cjs                       renders resume.html to the PDF with Playwright
src/
  content.config.ts               frontmatter schema for projects
  data/site.ts                    contact info, title block, experience, skills, About text
  layouts/Base.astro              <head>, header nav, footer
  pages/index.astro               home page (hero, projects, experience, skills, about, contact)
  pages/projects/[slug].astro     project page template
  styles/global.css               all styling and design tokens
```

## Adding a new project

1. **Pick a slug.** Lowercase words joined by hyphens, e.g. `scissor-jack-fea`.
   It becomes the URL: `/projects/scissor-jack-fea/`.
2. **Copy the template.**
   ```bash
   cp projects/_template.md projects/scissor-jack-fea.md
   ```
3. **Create the image folder** with the same name as the slug.
   ```bash
   mkdir -p public/images/projects/scissor-jack-fea
   ```
4. **Add images** to that folder (see "Images" below). Name the main one `cover.jpg`.
5. **Fill in the frontmatter** in the new Markdown file and delete the template's `#` comment lines.
   Field rules are in the next section.
6. **Write the body** using the four headings from the template:
   `## Problem`, `## Approach`, `## Results`, `## What I learned`.
   Keep the headings the same on every project so the portfolio reads consistently.
7. **Build and check.**
   ```bash
   npm run build
   npm run dev
   ```
   Open the home page and the new project page. Confirm the cover shows on the home
   page card, every image loads, and the layout holds at a phone width (about 390 px).
8. **Commit and push.** Vercel redeploys automatically.

No other file needs editing. The home page and "Next project" links pick up new
files automatically. Finished projects (`status: complete`) are listed first, then by `date`,
newest first.

### Finishing an in-progress project

The keel and Corvette projects are partial write-ups: they stay `in-progress` and use
`## Next steps` in place of `## Results` / `## What I learned` until the work is done (keel:
Spring 2027; Corvette: when Kyle sends the finished CAD and CFD results). A project
with an empty body shows a "still in progress" notice. To finish one:

1. Add images to its folder under `public/images/projects/`.
2. Add `cover:` and `coverAlt:` to the frontmatter.
3. Write the body with the four template headings.
4. Change `status: in-progress` to `status: complete` and fix `timeframe` if it says "ongoing".
5. Tighten `summary` so it includes the headline result.

### Hiding or removing a project

Set `draft: true` to hide it without deleting, or delete the Markdown file and its image folder.

## Frontmatter reference

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Sentence case, short. |
| `summary` | yes | One sentence, max 220 characters. Shown on the home card and as the project page lede. |
| `date` | yes | `YYYY-MM-DD`, the project start. Sorting only (after status); never displayed. |
| `timeframe` | yes | Display text, e.g. `Fall 2025`. |
| `status` | yes | `in-progress` or `complete`. Anything else fails the build. |
| `context` | no | Course, sponsor type, or `Personal project`. |
| `role` | no | What Kyle personally did. |
| `team` | no | e.g. `Six people`. Omit for solo work. |
| `tools` | no | List of 2 to 6 tools or methods. |
| `highlights` | no | Up to 4 `{ value, label }` pairs: the headline numbers a reviewer should see in the first five seconds. Real numbers only. |
| `cover` | no | Path starting with `/images/projects/<slug>/`. Without it the card shows a hatch placeholder. |
| `coverAlt` | with cover | Plain description of the cover image. |
| `draft` | no | `true` hides the project. Default `false`. |

The schema lives in `src/content.config.ts`. If you add a field, add it there, render it in
`src/pages/projects/[slug].astro`, and document it in this table and in `projects/_template.md`.

## Images

- Location: `public/images/projects/<slug>/`. Reference them with an absolute path:
  `![FEA stress plot of the lower arm](/images/projects/scissor-jack-fea/stress.jpg)`.
  Paths are case-sensitive on Vercel.
- Format: JPG for photos and renders, PNG for screenshots with text or sharp lines.
- Size: resize to 1600 px wide or less and keep each file under about 400 KB, e.g.
  `convert input.png -resize 1600x -strip -quality 80 output.jpg`.
- Cover: landscape, 16:10 (e.g. 1600x1000). The home page card crops to 16:10 and the project
  page shows it whole, so pad a drawing with white to 16:10 instead of letting it be cropped.
- Captions: put an italic line directly under an image and it is styled as a caption.
  ```markdown
  ![Von Mises stress at rated load](/images/projects/scissor-jack-fea/stress.jpg)
  *Peak stress sits at the pin hole of the lower arm.*
  ```
- Always write real alt text describing what the figure shows.
- Figures run wider than the text column so drawings stay legible. Crop SolidWorks screenshots
  to the model viewport (no toolbars, feature tree or pop-ups). Keep the SolidWorks educational
  watermark; do not crop or edit it out.
- Show only Kyle's own work. Do not publish third-party reference images (e.g. the car
  blueprints used to model the Corvette); mention them in text instead.
- Never publish a report file itself or anything showing Kyle's student ID number.
- Aim for visuals to cover about a third of each project page: CAD renders, FEA/CFD plots,
  photos of hardware, drawings.

## Writing rules for project pages

- Lead with the result. Use numbers with units (factor of safety, deflection, drag coefficient).
- Problem, approach, result. Explain why a method or assumption was chosen, not only what was done.
- First person. "I" for Kyle's own work, "we" for team work, and be clear which is which.
- 250 to 500 words per project. Plain verbs, sentence case headings, no filler or buzzwords.
- **Do not invent anything.** No made-up numbers, results, images or employers. If a fact is
  missing, ask Kyle. Keep the project `in-progress` rather than guessing.
- **Keel capstone rules (from Kyle, Nov 2026).** Never name the sponsor company anywhere,
  including inside images: crop drawing title blocks, which carry the name. Do not publish
  sponsor-supplied material data, vendor or product names, or internal memos; describe the hinge
  material generically. Do not name teammates or the sponsor's staff (some model names in
  screenshots include a first name; crop it out). Write as "we" / "our team" with no individual
  credit. Everything else from the team's reports is cleared.
- **Sensitive work.** The keel capstone is industry sponsored for a military / Coast Guard
  craft. Before publishing drawings, dimensions, test data or the sponsor's name, confirm
  with Kyle that the sponsor and faculty advisor allow it. The same applies to anything
  from an employer (e.g. Vishay process details). When unsure, leave it out.

## Editing the rest of the site

All non-project content is in `src/data/site.ts`:

- `site`: name, intro sentence, email, phone, LinkedIn, résumé path
- `titleBlock`: the six cells under the hero
- `experience`, `education`, `skills`: the matching home page sections
- `about`: three panels, each `{ heading, text }`. Keep it engineering-first; the hiking and
  skiing mention stays to one short panel.

To update the résumé, edit `resume/resume.html`, run `node resume/build.cjs` (writes
`public/Kyle_Zeman_Resume.pdf`, must stay one page), and keep the filename. Résumé style: plain
wording, no en or em dashes (write date ranges with "to").

Site photos are in `public/images/site/`: `summit.jpg` (full-width hero background), `kyle-zeman.jpg` (hero headshot),
`moonlake.jpg` (Experience band, mirrored so the moon sits right of the text),
`shore.jpg` (About background) and `ski.jpg` (About inset), `dusk.jpg` (contact). Replace a file with the same name to swap a photo.

## Design system (keep it consistent)

**Do not change the home page hero** (the top of the home page: summit photo, transparent tabs,
round headshot, name, intro, buttons, title block). Kyle has said it is perfect and must never
be changed. Only edit it if he explicitly asks, in that conversation, for a specific hero change.

The look is "engineering drawing meets Adirondack trail": calm, earth-toned, comforting,
engineering first. Outdoor photos are background texture, never the main subject.

- **Colors** (CSS variables at the top of `global.css`): spruce `#1e2b25` (dark panels),
  lichen `#e4e6dc` (page), paper `#eef0e7` (panels), ink `#1b231f` (text), bark `#5c4631`
  (secondary text), tamarack `#a8731f` / `#dcaa4e` (accent), lake `#3b5b68` (links).
  Do not add new colors, gradients as decoration, or drop shadows.
- **Type:** Barlow Condensed 600 for headings, Barlow Semi Condensed for labels and UI,
  Source Serif 4 for body text. Fonts are self-hosted through `@fontsource` packages.
- **Signature element:** the drawing-style title block (`.title-block`) under the hero and on
  each project page. Project cards without a cover use a section-lining hatch (`.hatch`).
- **Hero:** full-width summit photo with the mountains clearly visible, a transparent header
  over it (home page only, `overlayHeader` prop on `Base.astro`), and a round headshot above the
  name. Dark scrims sit only behind the text, nav and title block. The contact photo fades into
  a dark spruce panel with a CSS mask (`.contact-photo`).
- **Spelling:** on the site, write "resume" without accents (Kyle's preference).
- **Copy style:** sentence case everywhere, no all-caps labels, no arrows or emoji in links,
  link text says where it goes.
- **Section bands:** each home section has its own atmosphere. Projects: plain lichen with no
  photo background (Kyle's instruction; keep it that way unless he says otherwise). Experience: dark spruce with the moonlit-lake photo fading in from the right
  (`.experience`, `.band-photo`). Skills: lake-blue drafting grid (`.blueprint`). About: lake-shore photo
  behind outlined, stacked panels (`.about-band`, `.about-panels`). Contact: dusk lake. Dark bands use the `.on-dark` class, which swaps the
  `--fg`, `--muted`, `--rule` and `--accent` variables.
- **Soft seams:** no hard lines between home sections. Each `.section` fades in from the color
  of the section above it (set `--from` on the section; add `.seam-tall` when it switches
  between light and dark). Band photos and the Skills grid fade out at their edges with masks.
- **Parallax:** background photos marked `data-parallax` drift slower than the page (script in
  `Base.astro`; desktop only, off with reduced motion). The hero photo is not part of it.
- **Motion and interaction:** the hero photo fades in on load; the home header turns solid after
  scrolling and underlines the section in view (small inline script in `Base.astro`); project
  covers scale slightly on hover. Do not add scroll-reveal animations.
- **Hero fit:** hero sizes use `vh` as well as `vw` so the whole hero, title block included,
  fits a short laptop window (checked at 1366x650 and 1536x730). Keep that when editing.
- Keep it responsive to 320 px, keep visible focus outlines, and respect `prefers-reduced-motion`.

## Deployment

Vercel builds with `npm run build` and serves `dist/`. There is no `vercel.json` and none is
needed. First-time setup is in `README.md`. A failed build usually means invalid frontmatter;
run `npm run build` locally and read the error, which names the file and field.

## Checklist before committing

- [ ] `npm run build` passes
- [ ] New project appears on the home page and its page loads
- [ ] All images load, have alt text, and are under about 400 KB
- [ ] No invented facts; sensitive material cleared with Kyle
- [ ] Checked at desktop and phone widths
