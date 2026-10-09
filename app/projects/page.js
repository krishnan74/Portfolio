import Link from "next/link";
import ProjectIndex from "@/components/work/ProjectIndex";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Every project by Divyakrishnan: Web3, agentic AI, cloud and full stack builds.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="main" className="shell pb-section pt-10">
      <h1 className="font-display text-step-5 font-bold">All projects</h1>
      <p className="mt-5 max-w-measure text-step-1 leading-lede text-muted">
        {projects.length} projects. Open any row for details, screenshots and links.
      </p>
      <div className="mt-8 md:mt-9">
        <ProjectIndex projects={projects} headingLevel={2} />
      </div>
      <p className="mt-8">
        <Link href="/#work" className="link-underline">
          Back to selected work
        </Link>
      </p>
    </main>
  );
}
