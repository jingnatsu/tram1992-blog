import GithubSlugger from "github-slugger";

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Strips inline markdown (links, code, emphasis) so the text matches the rendered heading. */
function toPlainText(markdown: string) {
  return markdown
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/(\*\*|__|\*|_|~~)(.*?)\1/g, "$2")
    .trim();
}

/**
 * Extracts h2/h3 headings from MDX source. IDs are generated with github-slugger,
 * the same algorithm rehype-slug uses, so links match the rendered heading IDs.
 */
export function extractToc(source: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  let inCodeFence = false;

  for (const line of source.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const text = toPlainText(match[2]);
    // Every heading advances the slugger, keeping duplicate suffixes (-1, -2) in sync.
    const id = slugger.slug(text);
    const level = match[1].length;
    if (level === 2 || level === 3) headings.push({ id, text, level });
  }

  return headings;
}
