import { ExternalLink } from "lucide-react";

import { ImageGallery } from "@/components/home/image-gallery";
import { Reveal } from "@/components/home/reveal";
import { StatusBadge } from "@/components/home/status-badge";
import { TechMarquee } from "@/components/home/tech-marquee";
import { socialIcons } from "@/components/icons/social-icons";
import type { TimelineItem as TimelineItemData } from "@/data/timeline";
import { cn } from "@/lib/utils";

const GitHubIcon = socialIcons.github;

function formatPeriod({ quarter, year }: TimelineItemData["period"]) {
  return `Q${quarter} ${year}`;
}

export function TimelineItem({ item }: { item: TimelineItemData }) {
  const { period, title, status, description, highlights, techStack, links, images } = item;
  const headingId = `project-${item.id}`;

  return (
    <li className="relative pb-12 pl-8 last:pb-0">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-2 left-0 size-4 -translate-x-1/2 rotate-12 border-2 border-border",
          status === "ongoing" ? "bg-highlight" : status === "paused" ? "bg-highlight-alt" : "bg-background"
        )}
      />
      <Reveal>
        <article aria-labelledby={headingId} className="space-y-3">
          <header className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <time dateTime={String(period.year)} className="font-mono text-sm text-muted-foreground">
                {formatPeriod(period)}
              </time>
              <StatusBadge status={status} />
            </div>
            <h4 id={headingId} className="text-3xl leading-tight">
              {title}
            </h4>
            <p>{description}</p>
          </header>

          {highlights && highlights.length > 0 && (
            <ul className="list-disc space-y-1 pl-6 marker:text-brand">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}

          <TechMarquee items={techStack} />

          {(links.github || links.demo) && (
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hl-link plain inline-flex items-center gap-1.5"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                  <span className="sr-only">repository for {title} (opens in a new tab)</span>
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hl-link alt plain inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Live demo
                  <span className="sr-only">of {title} (opens in a new tab)</span>
                </a>
              )}
            </div>
          )}

          <ImageGallery images={images} />
        </article>
      </Reveal>
    </li>
  );
}
