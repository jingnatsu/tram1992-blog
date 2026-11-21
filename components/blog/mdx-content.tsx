import rehypeShiki from "@shikijs/rehype";
import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { ComponentProps } from "react";
import rehypeSlug from "rehype-slug";

function MdxLink({ href = "", children, ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const components: MDXComponents = {
  a: MdxLink,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          // Posts come from the back office as plain Markdown: parse as "md" so
          // characters like "<" or "{" in prose can't break the page like MDX would.
          format: "md",
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeShiki,
              { themes: { light: "github-light", dark: "github-dark" } },
            ],
          ],
        },
      }}
    />
  );
}
