# ariefdaffa.dev

A world-class personal developer portfolio platform built with **AstroJS**, **Three.js**, **TailwindCSS**, and **React**. Features an interactive 3D hero section, glassmorphism UI, animated skill visualizations, and a full blog system.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Astro](https://astro.build) (SSG, Islands Architecture) |
| Language | TypeScript (strict mode) |
| Styling | TailwindCSS v4 |
| 3D / WebGL | Three.js |
| Animations | Framer Motion |
| Icons | Lucide React |
| Content | Astro Content Collections (Markdown) |
| Testing | Vitest + Playwright |

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+

### Installation

```bash
git clone https://github.com/ariefdaffa/ariefdaffa.dev.git
cd ariefdaffa.dev
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run end-to-end tests (Playwright) |

## Project Structure

```
src/
├── components/
│   ├── hero/            # 3D hero section (Three.js)
│   ├── projects/        # Project cards & GitHub repos
│   ├── blog/            # Blog cards
│   ├── skills/          # Skills grid visualization
│   ├── timeline/        # Career timeline
│   ├── contact/         # Contact form
│   ├── navigation/      # Site navigation
│   ├── footer/          # Site footer
│   ├── seo/             # SEO meta component
│   └── ui/              # Shared UI components
├── content/
│   └── blog/            # Markdown blog posts
├── data/
│   ├── linkedin.json    # LinkedIn profile data
│   └── projects.json    # Personal projects data
├── layouts/
│   └── BaseLayout.astro # Main layout
├── lib/
│   ├── config.ts        # Site configuration
│   └── utils.ts         # Utility functions
├── pages/
│   ├── index.astro      # Homepage
│   ├── about.astro      # About page
│   ├── contact.astro    # Contact page
│   ├── rss.xml.ts       # RSS feed
│   ├── blog/            # Blog pages
│   └── projects/        # Project pages
├── services/
│   ├── github.ts        # GitHub API integration
│   └── linkedin.ts      # LinkedIn data adapter
├── styles/
│   └── global.css       # Global styles & design system
└── tests/
    ├── setup.ts         # Test setup
    ├── unit/            # Unit tests
    └── e2e/             # E2E tests (Playwright)
```

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post."
pubDate: 2026-03-10
tags: ["tag1", "tag2"]
category: "Web Development"
featured: false
draft: false
---

Your content here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `description` | string | Yes | Brief description (SEO) |
| `pubDate` | date | Yes | Publication date |
| `tags` | string[] | No | Array of tags |
| `category` | string | No | Post category |
| `featured` | boolean | No | Show as featured |
| `draft` | boolean | No | Hide from listings |
| `heroImage` | string | No | Header image path |

## Customization

### Site Configuration

Edit `src/lib/config.ts` to update:
- Site name, title, description
- Social links (GitHub, LinkedIn, Twitter)
- Navigation items
- Contact email

### LinkedIn Data

Update `src/data/linkedin.json` with your professional information:
- Profile summary
- Work experience
- Education
- Skills & technologies
- Certifications

### Projects

Edit `src/data/projects.json` to add/modify portfolio projects.

### Design System

The design system is defined in `src/styles/global.css` using TailwindCSS `@theme` directives. Key customization points:

- **Colors**: Midnight palette, violet accents, neon highlights
- **Animations**: Float, glow, slide, fade
- **Glass effects**: `.glass`, `.glass-strong`
- **Gradients**: `.gradient-text`, `.gradient-border`

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --build
```

### Cloudflare Pages

Connect your GitHub repository in the Cloudflare dashboard:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 20

## Testing

### Unit Tests

```bash
npm run test          # Run once
npm run test:watch    # Watch mode
```

Tests cover utilities, services, React components, and site configuration.

### E2E Tests

```bash
npm run build
npx playwright install
npm run test:e2e
```

## License

MIT
