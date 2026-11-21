import { SectionHeading } from "@/components/home/section-heading";

// TODO: replace with your own interests.
export function Interests() {
  return (
    <section aria-labelledby="interests-heading" className="flex flex-col gap-4">
      <SectionHeading id="interests-heading" emoji="💛">
        Stuff I like doing
      </SectionHeading>
      <ul className="list-disc space-y-1 pl-6 marker:text-brand">
        <li>
          Building interfaces in <u className="decoration-wavy decoration-brand/60 underline-offset-6">React, Next.js and TypeScript</u>.
        </li>
        <li>Turning Figma designs into pixel-perfect, accessible, production-ready pages.</li>
        <li>
          Writing code the next person can read, since that person is usually me three months later{" "}
          <span aria-hidden="true">🙃</span>
        </li>
        <li>
          <mark className="alt">Picking up new tools when they solve something better</mark> than what I already use.
        </li>
      </ul>
    </section>
  );
}
