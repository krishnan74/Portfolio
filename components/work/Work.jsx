import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import FeaturedProjects from "./FeaturedProjects";
import { projects, wonProjects } from "@/data/projects";

// Home page teaser: the first three hackathon wins, then a way into /work.
export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="shell pt-section">
      <SectionHeader id="work-title" title="Selected work" aside={`${projects.length} projects`} />
      <div className="mt-8 md:mt-9">
        <FeaturedProjects projects={wonProjects.slice(0, 3)} lead />
      </div>
      <p data-reveal className="mt-8 md:mt-9">
        <Link href="/work" className="btn">
          See all {projects.length} projects
        </Link>
      </p>
    </section>
  );
}
