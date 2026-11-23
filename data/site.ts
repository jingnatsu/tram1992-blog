// Site-wide personal info, kept in sync with the CV at https://cv.tram1992.com.

import type { TechSlug } from "@/data/tech-icons";

export type SocialPlatform = "github" | "linkedin" | "upwork" | "fiverr";

interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  /** Optional photo under /public (e.g. "/me.webp"). Falls back to initials when unset. */
  avatar?: string;
  role: string;
  yearsOfExperience: number;
  location: string;
  openToWork: boolean;
  email: string;
  description: string;
  url: string;
  /** Full online CV. */
  cvUrl: string;
  /** Personal side project, Trạm 1992. */
  tramUrl: string;
  hireMeUrl: string;
  /** Shown in the "Things I work with" section on the home page. */
  skills: TechSlug[];
  socials: SocialLink[];
}

/** First professional role (DXC Vietnam, 04/2014). */
const CAREER_START_YEAR = 2014;

export const siteConfig: SiteConfig = {
  name: "Simon",
  initials: "S",
  avatar: "/avatar.webp",
  role: "Senior Software Engineer",
  yearsOfExperience: new Date().getFullYear() - CAREER_START_YEAR,
  location: "Ho Chi Minh City, Vietnam",
  openToWork: true,
  email: "nnguyen92.tdtit@gmail.com",
  description:
    "Senior software engineer in Ho Chi Minh City, Vietnam. Frontend specialist (React, Next.js, TypeScript) with solid backend experience (Java, Spring Boot), building scalable web apps with global teams.",
  // TODO: set NEXT_PUBLIC_SITE_URL (e.g. in .env.production) to this blog's production domain
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, ""),
  cvUrl: "https://cv.tram1992.com",
  tramUrl: "https://www.tram1992.com",
  hireMeUrl: "https://linkedin.com/in/nguyen-nam-150989130",
  skills: [
    // Frontend
    "nextjs",
    "react",
    "vite",
    "astro",
    "angular",
    "tailwind",
    "redux",
    "mobx",
    "javascript",
    "typescript",
    "htmlCss",
    "styledComponents",
    // Backend
    "java",
    "spring",
    "nestjs",
    "postgresql",
    "mssql",
    "oracle",
    "gradle",
    // Tools
    "git",
    "jenkins",
    "cicd",
    "figma",
    "docker",
  ],
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/jingnatsu" },
    { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/nguyen-nam-150989130" },
  ],
};
