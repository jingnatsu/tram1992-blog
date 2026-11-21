// Site-wide personal info. Replace the placeholder values (marked TODO) with real data.

import type { TechSlug } from "@/data/tech-icons";

export type SocialPlatform = "github" | "linkedin" | "upwork" | "fiverr";

export interface SocialLink {
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
  hireMeUrl: string;
  /** Shown in the "Things I work with" section on the home page. */
  skills: TechSlug[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Simon",
  initials: "S",
  role: "Frontend Developer",
  // TODO: set your real years of experience
  yearsOfExperience: 5,
  location: "Vietnam",
  openToWork: true,
  email: "nnguyen92.tdtit@gmail.com",
  description:
    "Frontend developer based in Vietnam, building fast and accessible web apps with React, Next.js and TypeScript.",
  // TODO: set NEXT_PUBLIC_SITE_URL (e.g. in .env.production) to the production domain
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, ""),
  // TODO: replace with your Upwork or Fiverr profile
  hireMeUrl: "https://www.upwork.com/freelancers/~your-profile",
  skills: [
    "typescript",
    "javascript",
    "react",
    "nextjs",
    "tailwind",
    "shadcn",
    "framer",
    "redux",
    "nodejs",
    "nestjs",
    "java",
    "spring",
    "postgresql",
    "prisma",
  ],
  socials: [
    // TODO: replace the placeholder profile URLs
    { platform: "github", label: "GitHub", href: "https://github.com/your-username" },
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
    { platform: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/~your-profile" },
    { platform: "fiverr", label: "Fiverr", href: "https://www.fiverr.com/your-username" },
  ],
};
