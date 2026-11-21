import { SectionHeading } from "@/components/home/section-heading";
import { siteConfig } from "@/data/site";
import { techIcons } from "@/data/tech-icons";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-4">
      <SectionHeading id="skills-heading" emoji="😎">
        Things I work with
      </SectionHeading>
      <ul className="flex flex-wrap gap-3">
        {siteConfig.skills.map((slug) => {
          const { name, Icon } = techIcons[slug];
          return (
            <li key={slug} className="sketch sketch-hover flex items-center gap-2 px-3 py-1">
              <Icon className="size-5" />
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
