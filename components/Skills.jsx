import SectionHeader from "./SectionHeader";
import StackMarquee from "./StackMarquee";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-section">
      <div className="shell">
        <SectionHeader id="skills-title" title="Skills" />
      </div>
      <div className="mt-8 md:mt-9">
        <StackMarquee />
      </div>
      <dl className="shell mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt className="font-display text-step-1 font-bold">{group.title}</dt>
            <dd className="mt-3 max-w-measure text-muted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
