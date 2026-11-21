# CLAUDE.md

Hướng dẫn cố định cho Claude Code khi làm việc trong dự án này. Prompt xây dựng chi tiết nằm trong `PROMPT.md`.

## Tổng quan dự án

Trang portfolio cá nhân của Simon (frontend developer, Việt Nam), giao diện kiểu sổ tay (giấy kẻ dòng, font viết tay, highlight bút dạ, top nav một cột) + timeline hành trình. Gồm trang Home (giới thiệu + timeline dự án) và Blog (MDX).

## Tech stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 6 (strict; TS 7 chưa được typescript-eslint hỗ trợ)
- Tailwind CSS v4, shadcn/ui
- Framer Motion (animation), next-themes (dark/light)
- Markdown: next-mdx-remote (format "md"), shiki (syntax highlighting); nội dung lấy từ API của tram-1992-bo
- Font: Patrick Hand (body), Caveat Brush (heading), Fira Code (code)

## Cấu trúc thư mục

```
/app
  /(site)/page.tsx          # Home
  /blogs/page.tsx           # Danh sách bài viết
  /blogs/[slug]/page.tsx    # Chi tiết bài viết
  layout.tsx
  sitemap.ts
  robots.ts
/components
  site-header.tsx, nav-link.tsx, site-footer.tsx
  home/                     # Intro, Interests, Skills, Timeline, LatestPosts, Socials, ...
  blog/                     # BlogCard, TableOfContents
  ui/                       # shadcn/ui
  theme-toggle.tsx
/data
  timeline.ts               # Dữ liệu timeline (typed array)
  tech-icons.tsx            # Map slug -> SVG component
# Bài viết: soạn ở back-office tram-1992-bo (mục "Dev blog"), blog đọc qua <BLOG_API_URL>/api/dev-posts (ISR 60s)
/lib                        # Helper (đọc MDX, format ngày, ...)
/public/assets/timeline/<project>/*.webp
```

## Quy ước code

- TypeScript strict, không dùng `any`. Khai báo type rõ ràng cho dữ liệu (đặc biệt `TimelineItem`).
- Ưu tiên Server Components; chỉ thêm `"use client"` khi cần (state, animation, lightbox, theme).
- Dữ liệu tách khỏi component: thêm dự án mới chỉ cần sửa `data/timeline.ts`.
- Dùng `next/image` cho mọi ảnh, định dạng webp, lazy-load gallery.
- Class Tailwind sắp xếp gọn, dùng `cn()` để gộp class có điều kiện.
- Không thêm dependency nếu không cần thiết; hỏi trước khi thêm thư viện lớn.
- Component nhỏ, một trách nhiệm, đặt tên PascalCase; file đặt tên kebab-case.

## Yêu cầu chất lượng

- Responsive: một cột, top nav gọn trên mobile.
- Style dùng chung trong `app/globals.css`: `mark`/`mark.alt`, `.hl-link`, `.sketch` (khung vẽ tay), `.text-outlined`.
- Accessibility: HTML ngữ nghĩa, điều hướng bằng bàn phím, `aria-label` cho nút icon.
- SEO: Metadata API, Open Graph, sitemap.xml, robots.txt.
- Hiệu năng: mục tiêu Lighthouse 95+.

## Lệnh thường dùng

```bash
npm run dev       # chạy dev server
npm run build     # build production
npm run lint      # kiểm tra lint
npx tsc --noEmit  # kiểm tra type
```

## Cách làm việc

- Trước khi code một phần lớn, đưa kế hoạch ngắn và chờ xác nhận nếu có nhiều hướng đi.
- Làm từng bước: layout + sidebar, rồi Home, rồi Blog. Mỗi bước phải chạy được trước khi sang bước tiếp.
- Sau mỗi bước chạy `npm run lint` và `npx tsc --noEmit`, sửa lỗi trước khi báo xong.
- Dùng dữ liệu mẫu (placeholder) rõ ràng, dễ thay bằng dữ liệu thật.
- Trả lời bằng tiếng Việt; code, tên biến, commit message bằng tiếng Anh.