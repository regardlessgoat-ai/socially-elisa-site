import type { Metadata } from "next";
import { Bagel_Fat_One, DM_Sans, Quicksand } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const display = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// FONT STAND-IN (2026-08-30): the brand book names Coolvetica for body text, but its
// free download is licensed for static design only — webfont use needs a paid license
// that has not arrived yet. Quicksand is the closest openly-licensed match to the
// book's sample (rounded terminals, geometric, light-to-bold range) and sits UNDER
// Coolvetica in the stack, so the day Coolvetica.woff2 lands in public/fonts the real
// font wins automatically and this stand-in simply stops being reached.
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body-standin",
});

export const metadata: Metadata = {
  title: "Socially Elisa — Marketing · Branding · Social Media",
  description:
    "A social-first marketing agency that goes beyond the obvious. Subscription-based marketing, branding and social media for brands that want to be seen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${quicksand.variable}`}>
      <body className="font-sans">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
