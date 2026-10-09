import Hero from "@/components/Hero";
import Work from "@/components/work/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Recognition />
      <Contact />
    </main>
  );
}
