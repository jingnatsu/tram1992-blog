"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  /** Only match the exact path (otherwise nested routes like /blogs/* count too). */
  exact?: boolean;
}

/** Header link that keeps its marker highlight while on the matching route. */
export function NavLink({ href, children, exact = false }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} aria-current={isCurrent ? "page" : undefined} className="hl-link plain">
      {children}
    </Link>
  );
}
