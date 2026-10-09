import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      {/* Legacy sections, replaced in stage 4 */}
      <div id="experience" className="flex justify-center py-10">
        <Experience />
      </div>
      <div id="work" className="flex justify-center py-10">
        <Projects />
      </div>
      <div id="about" className="flex justify-center py-10">
        <Highlights />
      </div>
    </main>
  );
}
