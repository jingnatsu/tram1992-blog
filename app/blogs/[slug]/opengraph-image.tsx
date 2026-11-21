import { formatDate } from "@/lib/format-date";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const alt = "Article cover";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export const revalidate = 60;

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);

  return renderOgImage({
    eyebrow: post ? `Article · ${formatDate(post.date)}` : "Article",
    title: post?.title ?? "Article",
    description: post?.excerpt,
  });
}
