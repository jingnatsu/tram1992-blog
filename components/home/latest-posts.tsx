import Link from "next/link";

import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/home/section-heading";
import type { PostMeta } from "@/lib/posts";

export function LatestPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="latest-posts-heading" className="flex flex-col gap-4">
      <SectionHeading id="latest-posts-heading" emoji="✍️">
        Latest posts
      </SectionHeading>
      <ul className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug} className="flex">
            <BlogCard post={post} compact />
          </li>
        ))}
      </ul>
      <Link href="/blogs" className="hl-link alt w-fit">
        See all posts →
      </Link>
    </section>
  );
}
