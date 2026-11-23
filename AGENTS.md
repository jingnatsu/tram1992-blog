<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules for Next.js work

- Prefer static rendering and Server-Side Rendering. Use Server Components by default; add `"use client"` only when hydration is required for state, browser APIs, event handlers, or client-only libraries.
- When a client boundary is needed, keep it small and move interactive behavior into a dedicated child component. Do not turn an entire page or layout into a Client Component unnecessarily.
- Every initial render must have meaningful default or initial data. Do not render an empty shell and then fetch the first useful data in the client when the data can be loaded on the server.
- Prefer server-side data fetching, static generation, ISR, and streaming where appropriate. Define clear loading, empty, error, and not-found states for dynamic routes.
- Avoid duplicate code. Move reusable components, hooks, types, constants, and helpers into an appropriate shared folder before copying or slightly modifying an implementation.
- Avoid hard-coded magic values. Use descriptive constants, typed configuration, and named variables so the intent is clear from the name.
- Keep component markup shallow and semantic. Avoid deeply nested `div` trees; use meaningful HTML elements and extract complex sections into focused components.
- Keep code easy to maintain: one responsibility per component/function, explicit types, clear naming, small diffs, and minimal dependencies.
- Consider performance and SEO for every change: minimize client JavaScript, optimize images and fonts, provide metadata and canonical URLs, use semantic headings and links, and preserve crawlable server-rendered content.
- Preserve accessibility: keyboard support, visible focus states, semantic HTML, labels for controls, useful alt text, and correct ARIA only when native HTML is insufficient.
- Use stable keys for lists, avoid unnecessary re-renders, and do not add memoization unless it addresses a measured or clear cost.
- Before writing code, read the relevant Next.js guide from `node_modules/next/dist/docs/` and follow the APIs and conventions for the installed version.
- Verify changes with the narrowest relevant checks, then run `npm run check` and a production build for changes affecting routes, rendering, data fetching, or configuration.

## Project context

- This is Simon's personal portfolio and blog, built with Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and next-themes.
- Blog content is managed in `tram-1992-bo` and read from `<BLOG_API_URL>/api/dev-posts`. Blog data uses ISR with a 60-second revalidation period.
- Markdown uses `next-mdx-remote` and `@shikijs/rehype` for syntax highlighting.
- Use `next/image` for images and keep timeline data in `data/timeline.ts`.
- Shared styles live in `app/globals.css`, including `mark`, `.hl-link`, `.sketch`, and `.text-outlined`.

## Project structure

```text
app/                    # App Router pages, layouts, metadata, sitemap, and robots
components/             # Shared site, home, blog, and UI components
data/                   # Typed content and icon definitions
lib/                    # Shared data-fetching and utility helpers
public/                 # Static assets
```

## Working conventions

- Use strict TypeScript and avoid `any`; define explicit types for external and shared data.
- Keep data separate from presentation so content changes do not require component changes.
- Use kebab-case filenames and PascalCase component names.
- Use Tailwind classes consistently and `cn()` for conditional class names.
- Do not add large dependencies without explaining the need first.
- Prefer semantic HTML, keyboard support, visible focus states, useful alt text, and ARIA only when native HTML is insufficient.
- Keep SEO complete with the Metadata API, Open Graph, sitemap, robots, canonical URLs, and structured data where appropriate.
- Target Lighthouse 95+ and verify responsive behavior across mobile and desktop.

## Common commands

```bash
npm run dev       # start the development server
npm run build     # create a production build
npm run lint      # run ESLint
npm run knip      # detect dead code
npm run check     # run ESLint and Knip
npx tsc --noEmit  # run the TypeScript check
```

## Collaboration

- For large changes, give a short plan and wait for confirmation when there are multiple materially different approaches.
- Work in small, verifiable steps and fix lint/type errors before moving on.
- Use clear, replaceable placeholder data when real data is unavailable.
- Reply in Vietnamese; write code, variable names, and commit messages in English.
