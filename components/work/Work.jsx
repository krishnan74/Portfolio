import SectionHeader from "@/components/SectionHeader";
import FeaturedProjects from "./FeaturedProjects";
import ProjectIndex from "./ProjectIndex";
import { featuredProjects, otherProjects, projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="shell pt-section">
      <SectionHeader
        id="work-title"
        title="Selected work"
        aside={`${projects.length} projects`}
      />
      <div className="mt-8 md:mt-9">
        <FeaturedProjects projects={featuredProjects} />
      </div>
      <div className="mt-10">
        <h3 className="mb-5 font-display text-step-3 font-bold">More projects</h3>
        <ProjectIndex projects={otherProjects} />
      </div>
    </section>
  );
}
