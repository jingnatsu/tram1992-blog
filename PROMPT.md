# PROMPT: Build Personal Portfolio Website

> Cách dùng: đặt file này cùng `CLAUDE.md` ở thư mục gốc dự án, mở Claude Code và gõ:
> `Đọc PROMPT.md và CLAUDE.md, rồi bắt đầu xây dựng theo từng bước.`
> Thay các phần trong `[...]` bằng thông tin thật của bạn.

---

Build a personal portfolio website for me using Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion.

## Design direction

Clean, minimal, developer-focused. Sidebar layout (shadcn Sidebar component) on the left, main content on the right. Support dark/light mode (next-themes), default dark. Neutral palette with one accent color. Font: Geist Sans + Geist Mono. Fully responsive: on mobile the sidebar becomes a slide-in drawer.

## Sidebar

- Top: avatar/initials logo, my name "[Simon]", email "[your@email.com]"
- "Platform" group: Home, Articles
- "Latest Articles" group: 3 most recent blog posts + "See All" link
- "Socials" group: GitHub, LinkedIn, [Upwork], [Fiverr] with icons
- Collapsible via a Toggle Sidebar button
- Optional: a "Hire me" CTA button linking to my Upwork/Fiverr profile

## Home page

1. **Intro section**: greeting "Hi 👋 I'm a frontend developer with [X]+ years of experience based in Vietnam...", 2-3 short paragraphs, with inline links to companies/projects. Add a small "Open to new gigs" badge.
2. **"Timeline Of My Journey" section**: vertical timeline, newest first, grouped by quarter/year. Each item has:
    - Quarter/year label and a status badge (done / ongoing / paused)
    - Project title and short description (2-3 sentences)
    - Tech stack icons in an infinite horizontal marquee
    - GitHub / Live demo link buttons
    - Image gallery (3-4 screenshots, webp) with a "Zoom in" lightbox (use a Dialog with next/image)
    - Scroll-reveal animation with Framer Motion (fade + slide up)
3. **Footer**: "© 2026 [Name], all rights reserved."

## Blog

- `/blogs`: list of articles with title, excerpt, date, tags
- `/blogs/[slug]`: article page. Content in MDX (next-mdx-remote) with syntax highlighting (shiki) and an auto-generated table of contents
- Posts live in `/content/blogs/*.mdx` with frontmatter (title, date, excerpt, tags)

## Data & structure

- Keep timeline data in `/data/timeline.ts` as a typed array (id, period, title, status, description, techStack[], links, images[]) so I can add projects without touching components
- Tech icons from a small map of slug -> SVG component
- Components: Sidebar, Intro, Timeline, TimelineItem, TechMarquee, ImageGallery, ThemeToggle, BlogCard

## Quality

- SEO: metadata API, Open Graph, sitemap.xml, robots.txt
- Lighthouse 95+, use next/image, lazy-load gallery images
- Accessible: semantic HTML, keyboard navigable, aria labels
- Clean folder structure, no unnecessary dependencies

## Workflow

First give me a short plan and the folder structure, then build step by step:

1. Project setup + layout + sidebar
2. Home sections (Intro, Timeline, Footer)
3. Blog (list + detail + MDX)
4. SEO, performance and accessibility pass

Use placeholder data I can replace later. After each step, run lint and type check, and confirm it works before moving on.

---

## Phụ lục: dữ liệu thật của tôi (điền trước khi chạy)

**Giới thiệu bản thân:**
- Tên: Simon
- Số năm kinh nghiệm: [X]
- Vị trí: Frontend developer (React, Next.js, TypeScript; phụ: NestJS, Java Spring Boot)
- Đang làm freelance trên Upwork / Fiverr

**Danh sách dự án (mỗi dự án một khối):**
```
- Tên dự án:
  Thời gian (quý/năm):
  Trạng thái: done | ongoing | paused
  Mô tả:
  Tech stack:
  Link GitHub / Demo:
  Ảnh: (đặt ở public/assets/timeline/<ten-du-an>/1.webp, 2.webp, ...)
```

**Mạng xã hội:** GitHub: [...] | LinkedIn: [...] | Upwork: [...] | Fiverr: [...]