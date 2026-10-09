import SectionHeader from "@/components/SectionHeader";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import ProjectIndex from "@/components/work/ProjectIndex";
import NextPage from "@/components/NextPage";
import { featuredProjects, otherProjects, projects } from "@/data/projects";

export const metadata = {
  title: "Work",
  description: "Projects by Divyakrishnan: Web3, agentic AI, cloud and full stack builds, with hackathon results.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main">
      <section aria-labelledby="work-title" className="shell pt-page">
        <SectionHeader id="work-title" title="Work" aside={`${projects.length} projects`} as="h1" />
        <div className="mt-8 md:mt-9">
          <FeaturedProjects projects={featuredProjects} headingLevel={2} />
        </div>
      </section>
      <section aria-labelledby="more-title" className="shell pt-section">
        <h2 id="more-title" data-reveal className="mb-5 font-display text-step-3 font-bold">
          More projects
        </h2>
        <ProjectIndex projects={otherProjects} headingLevel={3} />
      </section>
      <NextPage href="/experience" label="Experience" />
    </main>
  );
}
