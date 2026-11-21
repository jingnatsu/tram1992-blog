import { SectionHeading } from "@/components/home/section-heading";
import { TimelineItem } from "@/components/home/timeline-item";
import type { TimelineItem as TimelineItemData } from "@/data/timeline";

interface TimelineProps {
  items: TimelineItemData[];
}

function periodValue({ period }: TimelineItemData) {
  return period.year * 10 + period.quarter;
}

/** Groups items by year, newest year and quarter first. */
function groupByYear(items: TimelineItemData[]) {
  const sorted = [...items].sort((a, b) => periodValue(b) - periodValue(a));
  const groups = new Map<number, TimelineItemData[]>();
  for (const item of sorted) {
    const group = groups.get(item.period.year) ?? [];
    group.push(item);
    groups.set(item.period.year, group);
  }
  return [...groups.entries()];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section aria-labelledby="timeline-heading" className="space-y-8">
      <SectionHeading id="timeline-heading" emoji="🗺️">
        Timeline of my journey
      </SectionHeading>

      <div className="space-y-10">
        {groupByYear(items).map(([year, yearItems]) => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <h3
              id={`year-${year}`}
              className="mb-4 w-fit"
            >
              <mark className="alt font-display text-2xl">{year}</mark>
            </h3>
            <ol className="ml-2 border-l-2 border-dashed border-border">
              {yearItems.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  );
}
