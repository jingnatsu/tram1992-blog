import { siteConfig } from "@/data/site";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = `${siteConfig.name} – ${siteConfig.role}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: `Hi, I'm ${siteConfig.name}`,
    description: siteConfig.description,
  });
}
