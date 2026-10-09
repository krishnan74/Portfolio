import About from "@/components/About";
import Recognition from "@/components/Recognition";
import NextPage from "@/components/NextPage";

export const metadata = {
  title: "About",
  description: "About Divyakrishnan: background, interests, hackathon recognition, certifications and education.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <About first />
      <Recognition />
      <NextPage href="/contact" label="Contact" />
    </main>
  );
}
