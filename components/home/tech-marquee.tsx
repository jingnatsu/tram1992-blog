import type { CSSProperties } from "react";

import { techIcons, type TechSlug } from "@/data/tech-icons";
import { cn } from "@/lib/utils";

interface TechMarqueeProps {
  items: TechSlug[];
  className?: string;
}

function TechList({ items, duplicate = false }: { items: TechSlug[]; duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={cn(
        "flex shrink-0 gap-2 pr-2 motion-reduce:flex-wrap",
        duplicate && "motion-reduce:hidden"
      )}
    >
      {items.map((slug) => {
        const { name, Icon } = techIcons[slug];
        return (
          <li key={slug} className="sketch flex items-center gap-1.5 px-2.5 text-base whitespace-nowrap">
            <Icon className="size-4" />
            {name}
          </li>
        );
      })}
    </ul>
  );
}

/** Infinite horizontal tech-stack ticker. Pauses on hover; static for reduced motion. */
export function TechMarquee({ items, className }: TechMarqueeProps) {
  const style = { "--marquee-duration": `${Math.max(items.length * 4, 16)}s` } as CSSProperties;

  return (
    <div
      role="group"
      aria-label="Tech stack"
      className={cn(
        "group/marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]",
        className
      )}
    >
      <div
        style={style}
        className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none"
      >
        <TechList items={items} />
        <TechList items={items} duplicate />
      </div>
    </div>
  );
}
