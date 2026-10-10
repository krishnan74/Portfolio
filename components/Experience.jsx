import SectionHeader from "./SectionHeader";
import { experience } from "@/data/experience";
import images from "@/data/images.json";

// Logos differ in shape (wordmarks vs a round badge); sizing by aspect gives
// them about the same visual weight. Wider marks get shorter.
const LOGO_SIZE = 3.06; // rem; a 7.3:1 wordmark ends up 1.25rem tall

function CompanyLogo({ name, scale = 1 }) {
  const meta = images[name];
  if (!meta) return null;
  const height = `${((LOGO_SIZE * scale) / Math.pow(meta.width / meta.height, 0.45)).toFixed(3)}rem`;
  // Light and dark versions; the theme tokens show one (see .company-logo).
  return ["", "-dark"].map((suffix) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={suffix}
      src={`/images/opt/${name}${suffix}.png`}
      width={meta.width}
      height={meta.height}
      alt=""
      loading="lazy"
      decoding="async"
      className={`company-logo${suffix ? " company-logo-dark" : " company-logo-light"}`}
      style={{ height, width: "auto" }}
    />
  ));
}

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
            className="grid gap-6 border-t border-line py-8 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-x-5 lg:py-9"
          >
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--nav-h)+var(--space-6))]">
                {job.logo && (
                  // Same link as the name below; kept out of the tab order.
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="mb-4 flex min-h-7 w-fit items-center"
                  >
                    <CompanyLogo name={job.logo} scale={job.logoScale} />
                  </a>
                )}
                <h3 className="font-display text-step-3 font-bold">{job.role}</h3>
                <p className="mt-2 text-step-1">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="company-link">
                      {job.company}
                      <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="mt-3 text-step--1 text-muted">
                  <span className="block">{job.period}</span>
                  <span className="block">{job.location}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-7 lg:col-span-7 lg:col-start-6">
              {job.summary && <p className="max-w-measure">{job.summary}</p>}
              {job.highlights && (
                <ul className="flex flex-col gap-7">
                  {job.highlights.map((item) => (
                    <li key={item.title} className="max-w-measure">
                      <h4 className="font-display text-step-1 font-bold">{item.title}</h4>
                      <p className="mt-2 text-step--1 text-muted">{item.period}</p>
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
