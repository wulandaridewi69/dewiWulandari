# Dewi Wulandari — Portfolio

Frontend engineer portfolio rebuilt from static HTML files into a **Next.js** app.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router, Server Components by default
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) — via `@tailwindcss/postcss`
- [Geist](https://vercel.com/font) — `next/font/google`
- No TypeScript: plain JavaScript throughout

## Scripts

```bash
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

The scripts invoke `node` directly instead of relying on npm's `.bin`
shims, so they also work from folders whose path contains `&` or
spaces (such as this one).

## Project structure

```
├── public/assets/          # Images: photos, course logos, social glyphs
├── src/
│   ├── app/                # Routes (App Router)
│   │   ├── layout.js       # Root layout: fonts, metadata, header + footer
│   │   ├── page.js         # Home (/)
│   │   ├── projects/       # /projects
│   │   ├── courses/        # /courses
│   │   ├── academic/       # /academic
│   │   ├── not-found.js    # 404
│   │   ├── globals.css     # Design tokens, base styles, custom utilities
│   │   └── icon.png        # Favicon (auto-detected by Next.js)
│   ├── components/
│   │   ├── ui/             # Reusable primitives: Button, Card, Badge,
│   │   │                   #   Section, Container, Icon, SmartImage,
│   │   │                   #   SkillMeter, LogoMark, SocialLinks
│   │   ├── layout/         # SiteHeader, SiteFooter, PageHeader, Navigation
│   │   ├── home/           # Home page sections
│   │   ├── projects/       # ProjectCard
│   │   └── courses/        # CourseCard
│   ├── data/               # Mockup data (single source of truth)
│   │   ├── site.js         # Site metadata, nav items, copyright
│   │   ├── profile.js      # Name, hero copy, about, contact, socials
│   │   ├── skills.js       # Tech stack + proficiency
│   │   ├── stats.js        # Counters
│   │   ├── projects.js     # Project cards
│   │   ├── courses.js      # Course curricula
│   │   ├── academic.js     # Education + certifications
│   │   └── experience.js   # Timeline
│   └── lib/
│       └── utils.js        # cn() class-merge helper
├── jsconfig.json           # Path alias `@/*` → `src/*`
├── next.config.mjs
├── postcss.config.mjs
└── eslint.config.mjs
```

## Conventions

- **All copy lives in `src/data/`.** Components never hard-code strings, so a
  text change is a one-line edit in one file.
- **Components are server components by default.** Only `Navigation` and
  `SmartImage` are `"use client"`, because they need hooks.
- **`SmartImage` never shows a broken image.** If a project has no cover, or
  the file fails to load, it renders a generated gradient with a monogram.
- **Class names go through `cn()`**, so conditional classes and conflicting
  Tailwind utilities are de-duplicated.
- **Responsive from 320px up.** Only the `sm` and `md` breakpoints are used,
  and the header collapses to an accessible mobile menu below `md`.

## Design tokens

Neutral (zinc) base with a rose accent. Defined in `src/app/globals.css`:

| Token | Use |
| --- | --- |
| `neutral-950` / `white` | Text / surfaces |
| `rose-500` → `rose-600` | Accent |
| `--font-geist-sans` | Body type |
| `--font-geist-mono` | Dates, numbers, tech chips |

Custom utilities (`@utility`): `grid-bg`, `grid-bg-dark`, `mask-fade-b`,
`mask-fade-x`, and the `animate-marquee` keyframes.

## Accessibility

- Skip-to-content link, `aria-current="page"` on the active nav item
- Mobile menu: `aria-expanded` / `aria-controls`, closes on `Escape`, on
  route change, and on outside click; locks body scroll while open
- Every image has meaningful `alt` text (or `alt=""` when purely decorative)
- `role="progressbar"` with `aria-valuenow` on the skill meters
- Focus rings on all interactive elements, `prefers-reduced-motion` respected
