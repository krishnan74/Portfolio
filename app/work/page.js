import SectionHeader from "@/components/SectionHeader";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import ProjectIndex from "@/components/work/ProjectIndex";
import NextPage from "@/components/NextPage";
import { clientProjects, otherProjects, projects, wonProjects } from "@/data/projects";

export const metadata = {
  title: "Work",
  description: "Projects by Divyakrishnan: Web3, agentic AI, cloud and full stack builds, with hackathon results.",
  alternates: { canonical: "/work" },
};

function GroupTitle({ id, children }) {
  return (
    <h2 id={id} data-reveal className="mb-7 font-display text-step-3 font-bold md:mb-8">
      {children}
    </h2>
  );
}

// Three groups: work in production, hackathon wins (as poster cards; an odd
// count lets the first card span the grid so no row is left half empty) and
// the rest in the expandable index.
export default function WorkPage() {
  return (
    <main id="main">
      <section aria-labelledby="work-title" className="shell pt-page">
        <SectionHeader id="work-title" title="Work" aside={`${projects.length} projects`} as="h1" />
      </section>
      <section aria-labelledby="client-title" className="shell mt-8 md:mt-9">
        <GroupTitle id="client-title">In production</GroupTitle>
        <FeaturedProjects projects={clientProjects} headingLevel={3} lead={clientProjects.length % 2 === 1} />
      </section>
      <section aria-labelledby="won-title" className="shell pt-section">
        <GroupTitle id="won-title">Hackathon wins</GroupTitle>
        <FeaturedProjects projects={wonProjects} headingLevel={3} lead={wonProjects.length % 2 === 1} />
      </section>
      <section aria-labelledby="more-title" className="shell pt-section">
        <h2 id="more-title" data-reveal className="mb-5 font-display text-step-3 font-bold">
          Experiments &amp; side projects
        </h2>
        <ProjectIndex projects={otherProjects} headingLevel={3} />
      </section>
      <NextPage href="/experience" label="Experience" />
    </main>
  );
}
