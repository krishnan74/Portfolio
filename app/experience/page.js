import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import NextPage from "@/components/NextPage";

export const metadata = {
  title: "Experience",
  description: "Divyakrishnan's experience across cloud, DevOps, agentic AI and Web3, and the skills behind it.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main id="main">
      <Experience first />
      <Skills />
      <NextPage href="/about" label="About" />
    </main>
  );
}
