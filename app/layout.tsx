import type { Metadata } from "next"; // type for the page title/description object
import { Geist } from "next/font/google"; // Google font loaded and self-hosted by Next.js
import "./globals.css"; // load global styles (and Tailwind) for every page
import Starfield from "./components/starfield";

const geist = Geist({
  subsets: ["latin"], // only download the Latin characters to keep the font small
  variable: "--font-geist", // exposes the font as a CSS variable
});

export const metadata: Metadata = {
  title: "Zohaib Ahmed", // text shown in the browser tab and search results
  description: "Personal website of Zohaib Ahmed, computer science student and software engineer.", // search/social preview text
};

export default function RootLayout({
  children, // the page being rendered inside this layout
}: {
  children: React.ReactNode; // type: anything React can render
}) {
  return (
    <html lang="en" className={geist.variable}>
      {/* root element; the className makes the font variable available everywhere */}
      <body className="font-sans antialiased">
        {/* antialiased makes text look smoother */}
        <Starfield />
        {children}
      </body>
    </html>
  );
}
