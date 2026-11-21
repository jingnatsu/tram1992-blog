import Link from "next/link";

import { PostTags } from "@/components/blog/post-tags";
import { formatDate } from "@/lib/format-date";
import type { PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: PostMeta;
  /** Tighter layout for grids (e.g. the home page). */
  compact?: boolean;
}

export function BlogCard({ post, compact = false }: BlogCardProps) {
  return (
    <article className={cn("sketch sketch-hover group flex w-full flex-col gap-2", compact ? "p-4" : "p-5")}>
      <div className="flex items-center gap-2 text-base text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTimeMinutes} min read</span>
      </div>
      <h2 className={cn("leading-tight", compact ? "text-2xl" : "text-3xl")}>
        {/* The ::after overlay makes the whole card clickable while keeping one link per card. */}
        <Link
          href={`/blogs/${post.slug}`}
          className="outline-none after:absolute after:inset-0 group-hover:underline group-hover:decoration-wavy group-hover:decoration-brand/60 group-hover:underline-offset-6 focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
        >
          {post.title}
        </Link>
      </h2>
      <p className={cn("text-muted-foreground", compact && "line-clamp-3")}>{post.excerpt}</p>
      <div className="mt-auto">
        <PostTags tags={post.tags} />
      </div>
    </article>
  );
}
