import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in /projects.
// Files starting with "_" (like _template.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    date: z.coerce.date(), // used for sorting only, newest first
    timeframe: z.string(), // shown to readers, e.g. "Fall 2026 to Spring 2027"
    status: z.enum(['in-progress', 'complete']),
    context: z.string().optional(), // e.g. "Senior design capstone, MAE 451 / 494"
    role: z.string().optional(),
    team: z.string().optional(),
    tools: z.array(z.string()).default([]),
    // up to four headline numbers shown at the top of the project page
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).max(4).default([]),
    cover: z.string().optional(), // e.g. "/images/projects/<slug>/cover.jpg"
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false), // true hides the project from the site
  }),
});

export const collections = { projects };
