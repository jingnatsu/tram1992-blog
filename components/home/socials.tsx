import { SectionHeading } from "@/components/home/section-heading";
import { socialIcons } from "@/components/icons/social-icons";
import { siteConfig } from "@/data/site";

const socialIconMap = new Map(Object.entries(socialIcons));

export function Socials() {
  return (
    <section aria-labelledby="socials-heading" className="flex flex-col gap-4">
      <SectionHeading id="socials-heading" emoji="📮">
        Find me online
      </SectionHeading>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {siteConfig.socials.map(({ platform, label, href }) => {
          const Icon = socialIconMap.get(platform);
          if (!Icon) return null;
          return (
            <li key={platform}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hl-link plain inline-flex items-center gap-2"
              >
                <Icon className="size-4" />
                {label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
