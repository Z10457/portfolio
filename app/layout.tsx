import type { Metadata } from "next"; // type for the page title/description object
import { Geist } from "next/font/google"; // Google font loaded and self-hosted by Next.js
import "./globals.css"; // load global styles (and Tailwind) for every page
import Starfield from "./components/starfield";

const geist = Geist({
  subsets: ["latin"], // only download the Latin characters to keep the font small
  variable: "--font-geist", // exposes the font as a CSS variable
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-topaz-omega-44.vercel.app"), // your live URL
  title: "Zohaib Ahmed", // text shown in the browser tab and search results
  description:
    "Personal website of Zohaib Ahmed, computer science student and software engineer.",
  openGraph: {
    title: "Zohaib Ahmed",
    description:
      "Computer science student and software engineer at Fordham. I build software that is useful and fun.",
    url: "/",
    siteName: "Zohaib Ahmed",
    images: [{ url: "/og.png", width: 1200, height: 630 }], // file lives in /public
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohaib Ahmed",
    description: "Computer science student and software engineer at Fordham.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children, // the page being rendered inside this layout
}: {
  children: React.ReactNode; // type: anything React can render
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}