import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/blog-card";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Articles",
  description: "Notes on frontend development, React, Next.js and TypeScript.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: "/blogs",
    title: "Articles",
    description: "Notes on frontend development, React, Next.js and TypeScript.",
  },
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8 py-8 sm:py-12">
      <header className="space-y-2">
        <h1 className="text-5xl">
          Articles <span aria-hidden="true">✍️</span>
        </h1>
        <p>
          Notes on <mark>frontend development</mark>, React, Next.js and <mark className="alt">TypeScript</mark>.
        </p>
      </header>

      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No articles yet. Check back soon.</p>
      )}
    </div>
  );
}
