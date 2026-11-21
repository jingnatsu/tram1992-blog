import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MdxContent } from "@/components/blog/mdx-content";
import { PostTags } from "@/components/blog/post-tags";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site";
import { formatDate } from "@/lib/format-date";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { extractToc } from "@/lib/toc";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Posts published after the build are rendered on first request, then cached (ISR).
export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  if (!post) return {};

  const url = `/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  const headings = extractToc(post.content);
  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `${siteConfig.url}/blogs/${post.slug}`,
    image: `${siteConfig.url}/blogs/${post.slug}/opengraph-image`,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <div className="py-8 sm:py-12 lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10">
      <JsonLd data={postJsonLd} />
      <article className="min-w-0">
        <header className="space-y-3 border-b-2 border-dotted border-border pb-6">
          <Link
            href="/blogs"
            className="hl-link plain inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All articles
          </Link>
          <h1 className="text-4xl leading-tight text-balance sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
          <PostTags tags={post.tags} />
        </header>

        <TableOfContents headings={headings} variant="inline" className="mt-8 lg:hidden" />

        <div className="prose mt-8 max-w-none prose-headings:scroll-mt-8 prose-headings:font-display prose-headings:font-normal prose-h2:text-4xl prose-h3:text-3xl prose-a:decoration-wavy prose-a:decoration-brand/60 prose-a:underline-offset-6 prose-a:hover:bg-highlight prose-strong:bg-highlight-alt/70 prose-strong:px-1 prose-code:rounded-sm prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:border-2 prose-pre:border-dotted prose-pre:border-border prose-pre:text-sm prose-pre:leading-6 [&_pre_code]:bg-transparent [&_pre_code]:p-0">
          <MdxContent source={post.content} />
        </div>
      </article>

      <aside className="hidden lg:block">
        <TableOfContents headings={headings} variant="sidebar" />
      </aside>
    </div>
  );
}
