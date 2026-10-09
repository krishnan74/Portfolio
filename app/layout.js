import "lenis/dist/lenis.css";
import "./globals.css";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

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

export const metadata = {
  title: "Divyakrishnan",
  description:
    "Portfolio of Divyakrishnan, Full Stack and DevOps Engineer working across Cloud, Agentic AI and Web3",
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
