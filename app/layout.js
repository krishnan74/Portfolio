import "lenis/dist/lenis.css";
import "./globals.css";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { profile, socials } from "@/data/profile";

// next/font self-hosts both families at build time and preloads them.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const title = `${profile.name} | Full stack & DevOps engineer`;
const description =
  "Portfolio of Divyakrishnan, a full stack and DevOps engineer working across cloud, agentic AI and Web3. Associate Engineer at Presidio.";

export const metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.site }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}: ${profile.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@divyakrishnan_r",
    images: ["/og.png"],
  },
  // Next 13.5 still reads these from metadata.
  viewport: { width: "device-width", initialScale: 1 },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f12" },
    { media: "(prefers-color-scheme: light)", color: "#f2f2ef" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: "Associate Engineer",
  worksFor: { "@type": "Organization", name: "Presidio" },
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  sameAs: socials.map((s) => s.href),
};

// Runs before first paint:
// - applies a saved theme (otherwise CSS follows prefers-color-scheme)
// - enables scroll reveals only when motion is allowed, with a fallback that
//   shows everything if the reveal script never starts.
const headScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.dataset.theme=t}catch(e){}if("IntersectionObserver"in window&&matchMedia("(prefers-reduced-motion: no-preference)").matches){d.classList.add("reveal-ready");setTimeout(function(){if(!d.classList.contains("reveal-live"))d.classList.add("reveal-all")},3000)}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
