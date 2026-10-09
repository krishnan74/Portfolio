import "./globals.css";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

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

// Applies a saved theme before first paint. Without a saved choice the CSS
// follows prefers-color-scheme, so nothing is set here.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
