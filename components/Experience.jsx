import SectionHeader from "./SectionHeader";
import { experience } from "@/data/experience";

// `first` when it opens the /experience page.
export default function Experience({ first = false }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className={`shell ${first ? "pt-page" : "pt-section"}`}>
      <SectionHeader id="experience-title" title="Experience" as={first ? "h1" : "h2"} />

      <ol className="mt-8 md:mt-9">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            data-reveal
            className="grid gap-5 border-t border-line py-7 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-x-5"
          >
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--nav-h)+var(--space-6))]">
                <h3 className="font-display text-step-3 font-bold">{job.role}</h3>
                <p className="mt-2 text-step-1">{job.company}</p>
                <p className="mt-3 text-step--1 text-muted">
                  <span className="block">{job.period}</span>
                  <span className="block">{job.location}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
              {job.summary && <p className="max-w-measure">{job.summary}</p>}
              {job.highlights && (
                <ul className="flex flex-col gap-6">
                  {job.highlights.map((item) => (
                    <li key={item.title} className="max-w-measure">
                      <h4 className="font-display text-step-1 font-bold">{item.title}</h4>
                      <p className="mt-1 text-step--1 text-muted">{item.period}</p>
                      <p className="mt-3">{item.text}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-step--1 text-muted">{job.stack.join(", ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
