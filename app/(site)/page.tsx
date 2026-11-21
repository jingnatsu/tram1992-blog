import { Interests } from "@/components/home/interests";
import { Intro } from "@/components/home/intro";
import { LatestPosts } from "@/components/home/latest-posts";
import { Skills } from "@/components/home/skills";
import { Socials } from "@/components/home/socials";
import { Timeline } from "@/components/home/timeline";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site";
import { timeline } from "@/data/timeline";
import { getLatestPosts } from "@/lib/posts";

// Re-fetch the latest posts from the back office at most once a minute.
export const revalidate = 60;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  address: { "@type": "PostalAddress", addressCountry: "VN" },
  sameAs: siteConfig.socials.map((social) => social.href),
};

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <div className="flex flex-col gap-16 py-8 sm:py-12">
      <JsonLd data={personJsonLd} />
      <Intro />
      <Interests />
      <Skills />
      <Timeline items={timeline} />
      <LatestPosts posts={latestPosts} />
      <Socials />
    </div>
  );
}
