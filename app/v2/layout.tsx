import type { Metadata } from "next";
import { Anton, Bagel_Fat_One, DM_Sans } from "next/font/google";
import "./v2.css";

const groove = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-groove",
  display: "swap",
});

const heavy = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heavy",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Socially Elisa — Type II / Marketing · Branding · Social Media",
  description:
    "A social-first studio for brands that want to be seen. Imposing yet delicate, like a flower.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${groove.variable} ${heavy.variable} ${body.variable} v2-root`}
    >
      {children}
    </div>
  );
}
