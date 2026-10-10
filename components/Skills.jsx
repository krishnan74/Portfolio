import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-section">
      <div className="shell">
        <SectionHeader id="skills-title" title="Skills" />
      </div>
      <dl className="shell mt-8 grid gap-x-7 gap-y-8 sm:grid-cols-2 md:mt-9 lg:grid-cols-3 lg:gap-y-9">
        {skillGroups.map((group, i) => (
          <div key={group.title} data-reveal style={{ "--reveal-delay": `${(i % 3) * 70}ms` }}>
            <dt className="font-display text-step-1 font-bold">{group.title}</dt>
            <dd className="mt-3 max-w-measure text-muted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
