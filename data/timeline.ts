import type { TechSlug } from "@/data/tech-icons";

export type ProjectStatus = "done" | "ongoing" | "paused";

export interface TimelinePeriod {
  quarter: 1 | 2 | 3 | 4;
  year: number;
}

export interface TimelineImage {
  /** Path under /public, e.g. /assets/timeline/<project>/1.webp */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TimelineLinks {
  github?: string;
  demo?: string;
}

export interface TimelineItem {
  id: string;
  period: TimelinePeriod;
  title: string;
  status: ProjectStatus;
  description: string;
  techStack: TechSlug[];
  links: TimelineLinks;
  images: TimelineImage[];
}

function screenshots(project: string, title: string, count: number): TimelineImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/assets/timeline/${project}/${i + 1}.webp`,
    alt: `${title} – screenshot ${i + 1}`,
    width: 1280,
    height: 800,
  }));
}

// TODO: replace the placeholder projects below with real ones.
// Order does not matter: the timeline sorts items newest first.
export const timeline: TimelineItem[] = [
  {
    id: "portfolio",
    period: { quarter: 4, year: 2026 },
    title: "Personal Portfolio & Blog",
    status: "ongoing",
    description:
      "This website: a sidebar-driven portfolio with a project timeline and an MDX blog. Built with the App Router, server components first, and tuned for a 95+ Lighthouse score.",
    techStack: ["nextjs", "react", "typescript", "tailwind", "shadcn", "framer"],
    links: { github: "https://github.com/your-username/portfolio" },
    images: screenshots("portfolio", "Personal Portfolio & Blog", 4),
  },
  {
    id: "saas-dashboard",
    period: { quarter: 2, year: 2026 },
    title: "SaaS Analytics Dashboard (placeholder)",
    status: "done",
    description:
      "A freelance project for an Upwork client: a multi-tenant analytics dashboard with role-based access, real-time charts and CSV exports. Replace this text with a real project summary.",
    techStack: ["react", "typescript", "tailwind", "redux", "nestjs", "postgresql", "prisma"],
    links: {
      github: "https://github.com/your-username/saas-dashboard",
      demo: "https://example.com/saas-dashboard",
    },
    images: screenshots("saas-dashboard", "SaaS Analytics Dashboard", 4),
  },
  {
    id: "ecommerce-storefront",
    period: { quarter: 4, year: 2025 },
    title: "E-commerce Storefront (placeholder)",
    status: "done",
    description:
      "A headless storefront with server-rendered product pages, cart and Stripe checkout. Focused on Core Web Vitals and image optimisation.",
    techStack: ["nextjs", "typescript", "tailwind", "stripe", "nodejs"],
    links: { demo: "https://example.com/storefront" },
    images: screenshots("ecommerce-storefront", "E-commerce Storefront", 3),
  },
  {
    id: "hr-tool",
    period: { quarter: 2, year: 2025 },
    title: "Internal HR Tool (placeholder)",
    status: "paused",
    description:
      "An internal tool for leave requests and employee onboarding, with a React front end and a Spring Boot API. Paused while the client re-scopes the next phase.",
    techStack: ["react", "javascript", "java", "spring", "postgresql"],
    links: {},
    images: screenshots("hr-tool", "Internal HR Tool", 3),
  },
];
