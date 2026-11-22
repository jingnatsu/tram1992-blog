import { SectionHeading } from "@/components/home/section-heading";

export function Interests() {
  return (
    <section aria-labelledby="interests-heading" className="flex flex-col gap-4">
      <SectionHeading id="interests-heading" emoji="💛">
        Stuff I like doing
      </SectionHeading>
      <ul className="list-disc space-y-1 pl-6 marker:text-brand">
        <li>
          Building fast, responsive interfaces in{" "}
          <u className="decoration-wavy decoration-brand/60 underline-offset-6">React, Next.js and TypeScript</u> that
          work just as well on mobile as on desktop.
        </li>
        <li>Crafting reusable component libraries that save the whole team time.</li>
        <li>
          Reviewing code and mentoring junior developers, since the next person to read the code is usually me three
          months later <span aria-hidden="true">🙃</span>
        </li>
        <li>
          <mark className="alt">Working with global teams</mark>, from German clients to colleagues in Malaysia, India
          and Singapore.
        </li>
      </ul>
    </section>
  );
}
