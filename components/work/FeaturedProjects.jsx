import Picture from "@/components/Picture";
import FitText from "./FitText";
import { linkLabel } from "./linkLabel";
import AwardMedal from "./AwardMedal";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="ext-icon">
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// With `recognitionUrl` the line links to the event; it sits above the
// card's full-size link so both stay clickable.
function Award({ project }) {
  if (!project.recognition) return null;
  return (
    <p className="poster-award">
      <AwardMedal award={project.award} />
      {project.recognitionUrl ? (
        <a href={project.recognitionUrl} target="_blank" rel="noopener noreferrer" className="award-link">
          {project.recognition}
          <span className="sr-only"> (event page, opens in a new tab)</span>
        </a>
      ) : (
        project.recognition
      )}
    </p>
  );
}

// Case-study cards. With an image, the poster shows it whole (diagrams and
// screenshots alike) and the name sits below. Without one, the poster is
// typographic: the name spans the card. The whole card is the link.
// `lead` makes the first card span the grid (used for an odd count).
export default function FeaturedProjects({ projects, headingLevel = 3, lead = false }) {
  const Heading = `h${headingLevel}`;
  return (
    <ul className="grid gap-x-7 gap-y-9 md:grid-cols-2 md:gap-y-10">
      {projects.map((project, i) => {
        const isLead = lead && i === 0;
        const image = project.images?.[0];
        const link = (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link">
            {image ? project.name : <FitText>{project.name}</FitText>}
          </a>
        );
        return (
          <li
            key={project.slug}
            data-reveal
            className={isLead ? "md:col-span-2" : undefined}
            style={{ "--reveal-delay": `${((i + (lead ? 1 : 0)) % 2) * 90}ms` }}
          >
            <article className="project-card relative">
              {image ? (
                <div className={`poster poster-image${isLead ? " poster-lead" : ""}`}>
                  <div className="poster-media">
                    <Picture
                      name={image}
                      alt={`${project.name} screenshot`}
                      sizes={isLead ? "(min-width: 1440px) 1344px, 94vw" : "(min-width: 768px) 46vw, 94vw"}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`poster${isLead ? " poster-lead" : ""}`}
                  style={{ "--chars": project.name.length }}
                >
                  <div className="flex flex-col gap-2">
                    <Award project={project} />
                    <p className="text-step--1 text-muted">{project.stack.join(", ")}</p>
                  </div>
                  <Heading className="poster-name font-display font-extrabold tracking-hero">{link}</Heading>
                </div>
              )}

              {image && (
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <Award project={project} />
                    <p className="text-step--1 text-muted">{project.stack.join(", ")}</p>
                  </div>
                  <Heading className="card-name font-display text-step-4 font-extrabold tracking-hero">{link}</Heading>
                </div>
              )}

              <div className={`card-meta ${image ? "mt-4" : "mt-6"}`}>
                <p className="max-w-measure">{project.description}</p>
                <p className="flex items-center gap-1 self-start whitespace-nowrap text-step--1 font-medium">
                  {linkLabel(project.url)}
                  <ExternalIcon />
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
