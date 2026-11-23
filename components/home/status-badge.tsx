import type { ProjectStatus } from "@/data/timeline";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, { label: string; emoji: string; className: string }> = {
  done: { label: "Done", emoji: "✅", className: "[--sketch-bg:var(--card)]" },
  ongoing: { label: "Ongoing", emoji: "🚧", className: "[--sketch-bg:var(--highlight)]" },
  paused: { label: "Paused", emoji: "⏸️", className: "[--sketch-bg:var(--highlight-alt)]" },
};

const statusStyleMap = new Map(Object.entries(statusStyles));

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = statusStyleMap.get(status);
  if (!style) return null;
  const { label, emoji, className } = style;

  return (
    <span className={cn("sketch inline-flex items-center gap-1.5 px-2 text-base leading-7", className)}>
      <span aria-hidden="true" className="text-sm">
        {emoji}
      </span>
      {label}
    </span>
  );
}
