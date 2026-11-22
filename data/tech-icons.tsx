import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export interface TechMeta {
  name: string;
  Icon: ComponentType<IconProps>;
}

/** Rounded-square monogram for brands without a simple standalone glyph. */
function monogram(text: string, bg: string, fg = "#ffffff") {
  function MonogramIcon(props: IconProps) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <rect width="24" height="24" rx="5" fill={bg} />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize={text.length > 2 ? 8.5 : 11}
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
          fill={fg}
        >
          {text}
        </text>
      </svg>
    );
  }
  MonogramIcon.displayName = `MonogramIcon(${text})`;
  return MonogramIcon;
}

function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="-12 -12 24 24" fill="none" stroke="#61DAFB" strokeWidth="1" aria-hidden="true" {...props}>
      <circle r="2.05" fill="#61DAFB" stroke="none" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}

function NextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="12" className="fill-foreground" />
      <path d="M8 7.5v9M8 7.5l8.5 11" className="stroke-background" strokeWidth="1.8" fill="none" />
      <path d="M16 7.5v6" className="stroke-background" strokeWidth="1.8" />
    </svg>
  );
}

function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function FramerMotionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#BB4BFF" />
    </svg>
  );
}

export const techIcons = {
  react: { name: "React", Icon: ReactIcon },
  nextjs: { name: "Next.js", Icon: NextIcon },
  typescript: { name: "TypeScript", Icon: monogram("TS", "#3178C6") },
  javascript: { name: "JavaScript", Icon: monogram("JS", "#F7DF1E", "#111111") },
  tailwind: { name: "Tailwind CSS", Icon: TailwindIcon },
  framer: { name: "Framer Motion", Icon: FramerMotionIcon },
  shadcn: { name: "shadcn/ui", Icon: monogram("/ui", "#111111") },
  nodejs: { name: "Node.js", Icon: monogram("JS", "#5FA04E") },
  nestjs: { name: "NestJS", Icon: monogram("N", "#E0234E") },
  java: { name: "Java", Icon: monogram("J", "#E76F00") },
  spring: { name: "Spring Boot", Icon: monogram("SB", "#6DB33F") },
  postgresql: { name: "PostgreSQL", Icon: monogram("PG", "#4169E1") },
  prisma: { name: "Prisma", Icon: monogram("P", "#2D3748") },
  redux: { name: "Redux", Icon: monogram("RX", "#764ABC") },
  stripe: { name: "Stripe", Icon: monogram("S", "#635BFF") },
  angular: { name: "Angular", Icon: monogram("A", "#DD0031") },
  vite: { name: "Vite", Icon: monogram("V", "#646CFF") },
  astro: { name: "Astro", Icon: monogram("A", "#BC52EE") },
  mobx: { name: "MobX", Icon: monogram("MX", "#FF9955", "#111111") },
  styledComponents: { name: "styled-components", Icon: monogram("SC", "#DB7093") },
  reactQuery: { name: "React Query", Icon: monogram("RQ", "#FF4154") },
  htmlCss: { name: "HTML/CSS", Icon: monogram("</>", "#E34F26") },
  springMvc: { name: "Spring MVC", Icon: monogram("S", "#6DB33F") },
  gradle: { name: "Gradle", Icon: monogram("G", "#02303A") },
  mysql: { name: "MySQL", Icon: monogram("MY", "#4479A1") },
  mssql: { name: "MS SQL", Icon: monogram("MS", "#CC2927") },
  oracle: { name: "Oracle", Icon: monogram("O", "#F80000") },
  git: { name: "Git/SVN", Icon: monogram("G", "#F05032") },
  jenkins: { name: "Jenkins", Icon: monogram("JK", "#D24939") },
  cicd: { name: "CI/CD Pipelines", Icon: monogram("CI", "#2088FF") },
  docker: { name: "Docker", Icon: monogram("D", "#2496ED") },
  figma: { name: "Figma", Icon: monogram("F", "#A259FF") },
  threejs: { name: "Three.js", Icon: monogram("3D", "#111111") },
  drizzle: { name: "Drizzle ORM", Icon: monogram("DZ", "#C5F74F", "#111111") },
  turso: { name: "Turso (SQLite)", Icon: monogram("T", "#4FF8D2", "#111111") },
} satisfies Record<string, TechMeta>;

export type TechSlug = keyof typeof techIcons;
