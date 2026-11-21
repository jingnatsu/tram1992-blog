import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 flex flex-col gap-2 border-t-2 border-dotted border-border py-8 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}, all rights reserved.
      </p>
      <nav aria-label="Footer" className="flex flex-wrap gap-3">
        <Link href="/blogs" className="hl-link plain">
          Blog
        </Link>
        <a href={`mailto:${siteConfig.email}`} className="hl-link alt plain">
          Email
        </a>
        <a href={siteConfig.hireMeUrl} target="_blank" rel="noopener noreferrer" className="hl-link plain">
          Hire me
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
    </footer>
  );
}
