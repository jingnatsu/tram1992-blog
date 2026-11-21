"use client";

import { useEffect, useState } from "react";

import type { TocHeading } from "@/lib/toc";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: TocHeading[];
  /** "inline": collapsible block above the article; "sidebar": sticky list beside it. */
  variant: "inline" | "sidebar";
  className?: string;
}

/** Tracks which heading is currently in view. */
function useActiveHeading(idsKey: string) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = idsKey
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Treat the top ~third of the viewport (below the sticky header) as the "reading" zone.
      { rootMargin: "-64px 0px -66% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}

function TocList({ headings, activeId }: { headings: TocHeading[]; activeId: string | null }) {
  return (
    <ol className="space-y-0.5 text-base">
      {headings.map((heading) => (
        <li key={heading.id} className={cn(heading.level === 3 && "pl-3")}>
          <a
            href={`#${heading.id}`}
            aria-current={activeId === heading.id ? "location" : undefined}
            className={cn(
              "hl-link plain block w-fit text-muted-foreground transition-colors hover:text-foreground",
              activeId === heading.id && "text-foreground [background-size:100%_85%]"
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ headings, variant, className }: TableOfContentsProps) {
  const activeId = useActiveHeading(headings.map((h) => h.id).join(" "));

  if (headings.length === 0) return null;

  if (variant === "inline") {
    return (
      <details className={cn("sketch p-4", className)}>
        <summary className="cursor-pointer font-display text-xl">On this page</summary>
        <nav aria-label="Table of contents" className="mt-3">
          <TocList headings={headings} activeId={activeId} />
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className={cn("sticky top-8", className)}>
      <p className="mb-2 font-display text-xl">On this page</p>
      <TocList headings={headings} activeId={activeId} />
    </nav>
  );
}
