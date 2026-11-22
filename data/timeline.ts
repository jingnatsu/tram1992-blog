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
  /** Optional bullet points (responsibilities, achievements). */
  highlights?: string[];
  techStack: TechSlug[];
  links: TimelineLinks;
  images: TimelineImage[];
}

// Career journey, kept in sync with the CV at https://cv.tram1992.com.
// Order does not matter: the timeline sorts items newest first.
export const timeline: TimelineItem[] = [
  {
    id: "tram-1992",
    period: { quarter: 1, year: 2026 },
    title: "Trạm 1992 (tram1992.com)",
    status: "ongoing",
    description:
      "My personal side project: a website that mixes a blog, a place to keep memories and a collection of life quotes, plus the back office that powers it (and this dev blog).",
    highlights: [
      "Public website built with Next.js App Router, Framer Motion animations and Three.js 3D touches.",
      "Custom CMS back office for posts, categories, tags, quotes and background music.",
      "Admin security with JWT sessions in HTTP-only cookies and two-factor authentication (TOTP).",
      "Data stored in SQLite / Turso through Drizzle ORM.",
    ],
    techStack: ["nextjs", "react", "typescript", "tailwind", "framer", "threejs", "drizzle", "turso", "docker"],
    links: { demo: "https://www.tram1992.com" },
    images: [],
  },
  {
    id: "freelance",
    period: { quarter: 1, year: 2026 },
    title: "Freelance projects",
    status: "ongoing",
    description:
      "Alongside my full-time role, I take on freelance work: building responsive, fast web apps and turning designs into production-ready interfaces for clients.",
    techStack: ["nextjs", "react", "typescript", "tailwind", "nestjs", "postgresql", "figma"],
    links: {},
    images: [],
  },
  {
    id: "mgm-discovery",
    period: { quarter: 3, year: 2022 },
    title: "Senior Software Engineer @ mgm technology partners Vietnam",
    status: "ongoing",
    description:
      "Project Discovery (08/2022 – present): a scalable single-page web app for restaurant and hotel management, optimised for both desktop and mobile.",
    highlights: [
      "Built the single-page app for restaurant and hotel management across desktop and mobile.",
      "Contributed to backend development together with the backend teams.",
      "Integrated internal tools into the application.",
      "Supported Jenkins scripts and CI/CD pipelines.",
      "Worked directly with German clients on requirements and ran sprint reviews.",
    ],
    techStack: [
      "react",
      "typescript",
      "styledComponents",
      "reactQuery",
      "nextjs",
      "angular",
      "vite",
      "java",
      "spring",
      "gradle",
      "htmlCss",
      "postgresql",
    ],
    links: {},
    images: [],
  },
  {
    id: "code88-virtual-gaming",
    period: { quarter: 2, year: 2018 },
    title: "Senior Software Engineer @ Code88 Vietnam",
    status: "done",
    description:
      "Project Virtual Gaming (05/2018 – 05/2022): responsive gaming websites for desktop and mobile, plus B2B iframe components for partners.",
    highlights: [
      "Built responsive gaming websites for desktop and mobile.",
      "Built B2B iframe components and integrated third-party features.",
      "Led bug fixing, performance optimisation and feature enhancements.",
      "Ran code reviews and mentored junior developers.",
      "Built reusable ReactJS component libraries with Redux and MobX, cutting development time across gaming products.",
    ],
    techStack: ["react", "redux", "mobx", "java", "htmlCss", "javascript", "mysql"],
    links: {},
    images: [],
  },
  {
    id: "dai-ichi-newgen",
    period: { quarter: 3, year: 2017 },
    title: "Software Engineer @ Dai-ichi Life Vietnam",
    status: "done",
    description:
      "Project Newgen Life Insurance Management (07/2017 – 05/2018): maintaining and enhancing the Newgen Workflow system for life insurance processes.",
    highlights: [
      "Maintained and enhanced the Newgen Workflow system.",
      "Built web services connecting the Workflow system with other internal tools.",
      "Worked with Newgen's team in India on upgrades and optimisation.",
      "Supported sysadmins on deployments and cross-team issues.",
      "Worked with users and BAs on requirements and acceptance testing.",
    ],
    techStack: ["java", "springMvc", "htmlCss", "javascript", "mysql"],
    links: {},
    images: [],
  },
  {
    id: "dxc-integral",
    period: { quarter: 2, year: 2014 },
    title: "Software Engineer @ DXC Vietnam",
    status: "done",
    description:
      "Project Integral (04/2014 – 07/2017): enhancing an insurance product for SOMPO with teams across Southeast and South Asia.",
    highlights: [
      "Wrote technical specifications from SOMPO's business requirements.",
      "Developed, unit-tested and deployed product enhancements.",
      "Coordinated with teams in Malaysia, India and Singapore on bug fixes and feature updates.",
      "Worked on-site in Malaysia for three months.",
    ],
    techStack: ["java", "springMvc", "htmlCss", "javascript", "oracle", "mssql"],
    links: {},
    images: [],
  },
  {
    id: "tdtu",
    period: { quarter: 1, year: 2014 },
    title: "Graduated @ Ton Duc Thang University",
    status: "done",
    description:
      "Faculty of Information Technology, Ton Duc Thang University, Ho Chi Minh City (2010 – 2014).",
    techStack: ["java", "javascript", "htmlCss"],
    links: {},
    images: [],
  },
];
