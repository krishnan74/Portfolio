import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Divyakrishnan by message or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <Contact first />
    </main>
  );
}
