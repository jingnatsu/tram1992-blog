import Link from "next/link";

import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 py-4">
      <Link
        href="/"
        aria-label={`${siteConfig.name} – home`}
        className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full border-2 border-dotted border-border bg-highlight-alt font-display text-xl leading-none"
        >
          {siteConfig.initials}
        </span>
        <span className="hidden font-display text-3xl leading-none sm:inline">{siteConfig.name}</span>
      </Link>

      <nav aria-label="Main" className="flex items-center gap-2 font-display text-xl sm:gap-4">
        <NavLink href="/" exact>
          Home
        </NavLink>
        <NavLink href="/blogs">Blog</NavLink>
        <a href={`mailto:${siteConfig.email}`} className="hl-link alt plain">
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
