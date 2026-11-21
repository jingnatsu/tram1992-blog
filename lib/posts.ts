import "server-only";

import { cache } from "react";

/**
 * Posts are written in the tram-1992-bo back office ("Dev blog") and served by
 * its public API. Pages revalidate every REVALIDATE_SECONDS, so new or edited
 * posts show up without a redeploy.
 */
export const REVALIDATE_SECONDS = 60;

export interface PostMeta {
  slug: string;
  title: string;
  /** ISO date string, YYYY-MM-DD */
  date: string;
  excerpt: string;
  tags: string[];
  readingTimeMinutes: number;
}

export interface Post extends PostMeta {
  /** Raw Markdown body */
  content: string;
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function apiUrl(path: string) {
  const base = process.env.BLOG_API_URL?.replace(/\/$/, "");
  if (!base) return null;
  return `${base}/api/dev-posts${path}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Validates one item from the API; returns null (and logs) for malformed data. */
function toPostMeta(value: unknown): PostMeta | null {
  if (!isRecord(value)) return null;
  const { slug, title, date, excerpt, tags, readingTimeMinutes } = value;

  if (
    typeof slug !== "string" ||
    !SLUG_RE.test(slug) ||
    typeof title !== "string" ||
    typeof date !== "string" ||
    !DATE_RE.test(date)
  ) {
    console.warn("[posts] skipping malformed post from API:", slug);
    return null;
  }

  return {
    slug,
    title,
    date,
    excerpt: typeof excerpt === "string" ? excerpt : "",
    tags: Array.isArray(tags) ? tags.filter((t): t is string => typeof t === "string") : [],
    readingTimeMinutes:
      typeof readingTimeMinutes === "number" && readingTimeMinutes > 0 ? readingTimeMinutes : 1,
  };
}

async function fetchJson(path: string): Promise<unknown> {
  const url = apiUrl(path);
  if (!url) {
    console.warn("[posts] BLOG_API_URL is not set; the blog will be empty.");
    return null;
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["posts"] },
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    // Keep the site up if the back office is unreachable.
    console.error(`[posts] failed to fetch ${url}:`, error);
    return null;
  }
}

/** All published posts (without content), newest first. */
export const getAllPosts = cache(async (): Promise<PostMeta[]> => {
  const data = await fetchJson("");
  if (!Array.isArray(data)) return [];

  return data
    .map(toPostMeta)
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
});

export async function getLatestPosts(count = 3): Promise<PostMeta[]> {
  return (await getAllPosts()).slice(0, count);
}

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  if (!SLUG_RE.test(slug)) return null;

  const data = await fetchJson(`/${slug}`);
  const meta = toPostMeta(data);
  if (!meta || !isRecord(data) || typeof data.content !== "string") return null;

  return { ...meta, content: data.content };
});
