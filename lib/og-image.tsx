import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

interface OgImageOptions {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Shared Open Graph card used by the home page and every blog post. */
export function renderOgImage({ eyebrow, title, description }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#34d399",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 600 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 22, color: "#a3a3a3" }}>{siteConfig.role}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, color: "#34d399" }}>{eyebrow}</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }}>
            {title}
          </div>
          {description && (
            <div style={{ fontSize: 28, color: "#a3a3a3", lineHeight: 1.4 }}>{description}</div>
          )}
        </div>
      </div>
    ),
    ogImageSize
  );
}
