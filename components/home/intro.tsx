import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/data/site";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hl-link">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className="hl-link">
      {children}
    </Link>
  );
}

function Portrait() {
  const { avatar, name, initials } = siteConfig;

  return (
    <div className="w-48 shrink-0 rotate-[-2deg] border-2 border-dotted border-highlight-alt bg-card p-2 shadow-md sm:w-56">
      {avatar ? (
        <Image
          src={avatar}
          alt={`Photo of ${name}`}
          width={448}
          height={448}
          priority
          className="aspect-square w-full object-cover"
        />
      ) : (
        // TODO: set siteConfig.avatar to a real photo (e.g. /public/me.webp).
        <div
          aria-hidden="true"
          className="flex aspect-square w-full items-center justify-center bg-highlight/40 font-display text-8xl"
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function OpenToWorkBadge() {
  return (
    <a
      href={siteConfig.hireMeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sketch sketch-hover inline-flex w-fit items-center gap-2 px-3 text-base outline-none [--sketch-bg:var(--highlight-alt)] hover:[--sketch-bg:var(--highlight)] focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-600 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-green-600" />
      </span>
      Open to new gigs
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

// TODO: rewrite the copy and replace the placeholder company/project links.
export function Intro() {
  const { name, yearsOfExperience, location, socials } = siteConfig;
  const upwork = socials.find((s) => s.platform === "upwork")?.href ?? siteConfig.hireMeUrl;
  const fiverr = socials.find((s) => s.platform === "fiverr")?.href ?? siteConfig.hireMeUrl;

  return (
    <section aria-labelledby="intro-heading" className="flex flex-col items-center gap-10 md:flex-row md:items-start">
      <Portrait />
      <div className="flex flex-col gap-4">
        {siteConfig.openToWork && <OpenToWorkBadge />}
        <h1 id="intro-heading" className="text-5xl leading-tight sm:text-6xl">
          Hello, I&apos;m <span className="text-outlined text-highlight">{name}</span>{" "}
          <span aria-hidden="true" className="inline-block origin-[70%_70%] motion-safe:animate-[wave_2s_ease-in-out_infinite]">
            👋
          </span>
        </h1>
        <p>
          <u className="decoration-wavy decoration-brand/60 underline-offset-6">A frontend developer</u> with{" "}
          {yearsOfExperience}+ years of experience, based in <mark className="alt">{location}</mark>. I build
          fast, accessible web apps with React, Next.js and TypeScript, and I care a lot about the small
          details that make an interface <mark>feel right</mark>.
        </p>
        <p>
          Previously at <InlineLink href="https://example.com">Company A</InlineLink> and{" "}
          <InlineLink href="https://example.com">Company B</InlineLink>. These days I freelance on{" "}
          <InlineLink href={upwork}>Upwork</InlineLink> and <InlineLink href={fiverr}>Fiverr</InlineLink>, and
          occasionally write about what I learn on <InlineLink href="/blogs">my blog</InlineLink>.
        </p>
      </div>
    </section>
  );
}
