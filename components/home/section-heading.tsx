import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
  /** Decorative emoji shown after the title (hidden from screen readers). */
  emoji?: string;
}

/** Brush-lettered section title with a hand-drawn underline. */
export function SectionHeading({ id, children, emoji }: SectionHeadingProps) {
  return (
    <h2 id={id} className="w-fit text-4xl leading-tight">
      {children}
      {emoji && (
        <span aria-hidden="true" className="ml-2 text-3xl">
          {emoji}
        </span>
      )}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        className="-mt-1 block h-2 w-full text-highlight"
      >
        <path
          d="M2 5.5C40 2 80 6.5 120 3.5S180 5 198 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </h2>
  );
}
