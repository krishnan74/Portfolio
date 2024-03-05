import "./globals.css";
import { Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Divyakrishnan",
  description: "Portfolio of Divyakrishnan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </head>
      <body className={barlow.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
