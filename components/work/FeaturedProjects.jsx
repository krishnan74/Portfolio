import FitText from "./FitText";
import { linkLabel } from "./linkLabel";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="ext-icon">
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Case-study cards. The poster is typographic: the project name spans the
// card, with the award as a bubble medal. The whole card is the link.
export default function FeaturedProjects({ projects }) {
  return (
    <ul className="grid gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-9">
      {projects.map((project, i) => (
        <li key={project.slug} data-reveal style={{ "--reveal-delay": `${(i % 2) * 90}ms` }}>
          <article className="project-card relative">
            <div className="poster" style={{ "--chars": project.name.length }}>
              <div className="flex flex-col gap-2">
                {project.recognition ? (
                  <p className="poster-award">
                    <span className="medal" aria-hidden="true" />
                    {project.recognition}
                  </p>
                ) : (
                  <span aria-hidden="true" />
                )}
                <p className="text-step--1 text-muted">{project.stack.join(", ")}</p>
              </div>
              <h3 className="poster-name font-display font-extrabold tracking-hero">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link">
                  <FitText>{project.name}</FitText>
                </a>
              </h3>
            </div>

            <div className="card-meta mt-5">
              <p className="max-w-measure">{project.description}</p>
              <p className="flex items-center gap-1 self-start whitespace-nowrap text-step--1 font-medium">
                {linkLabel(project.url)}
                <ExternalIcon />
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
