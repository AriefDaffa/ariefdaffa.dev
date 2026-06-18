# ariefdaffa.dev

## Stack

- **[Astro 6](https://astro.build)** — static site generator
- **Vanilla CSS** — custom design system with CSS custom properties
- **[GSAP 3](https://gsap.com)** — scroll-driven and entrance animations
- **TypeScript** — strict mode
- **[Zod](https://zod.dev)** — content collection schema validation
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — auto-generated sitemap

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, skills, timeline preview, portfolio grid, blog preview |
| `/projects/` | Full projects archive |
| `/projects/[slug]/` | Project detail |
| `/blog/` | Blog listing |
| `/blog/[slug]/` | Blog post |
| `/experience/` | Career timeline |
| `/404` | Custom not-found page |

## Project structure

```
src/
  components/
    BaseHead.astro       # <head> meta, OG, Twitter cards, JSON-LD
    Marquee.astro        # Infinite scrolling ticker
    SiteNav.astro        # Fixed frosted-glass navbar
    SiteFooter.astro     # Footer with socials and columns
  layouts/
    HomeLayout.astro     # Homepage shell
    PageLayout.astro     # Inner pages shell
  pages/
    index.astro
    experience.astro
    blog/
    projects/
  content/
    blog/                # Markdown blog posts
    projects/            # Markdown project entries
  styles/
    base.css             # Shared reset, nav, footer, marquee, timeline
    home.css             # Homepage-specific styles
    pages.css            # Inner pages styles
  utils/
    format.ts            # formatDate, readingTime helpers
public/
  images/
  scripts/
    home.js              # GSAP animations for homepage
    pages.js             # GSAP animations for inner pages
```

## Content

Blog posts and projects are managed as Markdown files in `src/content/`. Adding a new file automatically updates all listings — no code changes needed.

**Blog** (`src/content/blog/*.md`) frontmatter:
```yaml
title: string
description: string
pubDate: date
heroImage: string (optional)
tags: string[]
category: string
draft: boolean
featured: boolean
```

**Projects** (`src/content/projects/*.md`) frontmatter:
```yaml
title: string
description: string
longDescription: string
image: string
technologies: string[]
githubUrl: string
liveUrl: string
featured: boolean
category: string
year: number
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## License

All rights reserved. Code is open for reference but not for reuse.
