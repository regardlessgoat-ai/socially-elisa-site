import type { Metadata } from "next";
import { Bagel_Fat_One, DM_Sans } from "next/font/google";
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
