"use client";
import Link from "next/link";
import Marquee from "./Marquee";
import { CupFlower, FlowerWalker } from "./Mascots";

export default function Footer() {
  return (
    <footer style={{ background: "var(--se-espresso)", color: "var(--se-cream)" }}>
      <Marquee
        items={["let's build something pretty", "open for new work", "marketing · branding · social"]}
        speed="slow"
      />

      <div
        className="v2-container"
        style={{ padding: "5rem 1.5rem 2.5rem", position: "relative" }}
      >
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }} className="v2-footer-grid">
          <div>
            <Link
              href="/v2"
              className="v2-groove"
              style={{
                color: "var(--se-chartreuse)",
                fontSize: "clamp(2.6rem, 4vw, 4rem)",
                lineHeight: 0.86,
                display: "inline-block",
              }}
            >
              socially
              <br />
              elisa
            </Link>
            <p style={{ marginTop: "1.5rem", maxWidth: 320, opacity: 0.75, lineHeight: 1.55 }}>
              An agency that goes beyond the obvious. Imposing yet delicate —
              like a flower. We build brands people stop scrolling for.
            </p>
          </div>

          <FooterCol
            title="Sitemap"
            links={[
              ["Home", "/v2"],
              ["Portfolio", "/v2/portfolio"],
              ["About", "/v2/about"],
              ["Contact", "/v2/contact"],
            ]}
          />
          <FooterCol
            title="Get in"
            links={[
              ["Book a call", "/v2/contact"],
              ["hello@sociallyelisa.com", "mailto:hello@sociallyelisa.com"],
              ["Subscribe", "/v2/contact#newsletter"],
            ]}
          />
          <FooterCol
            title="Out there"
            links={[
              ["Instagram", "https://instagram.com"],
              ["TikTok", "https://tiktok.com"],
              ["LinkedIn", "https://linkedin.com"],
              ["Pinterest", "https://pinterest.com"],
            ]}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "-110px",
            width: 180,
            opacity: 0.85,
            pointerEvents: "none",
          }}
        >
          <CupFlower className="v2-wobble" ink="#cad183" glow="transparent" accent="#66033c" />
        </div>

        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(225,222,217,0.15)",
            fontSize: ".72rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span>© {new Date().getFullYear()} Socially Elisa · Made with intention</span>
          <span>Creative · Authentic · Independent</span>
        </div>

        {/* huge brand watermark */}
        <div
          aria-hidden
          className="v2-groove"
          style={{
            marginTop: "2rem",
            fontSize: "clamp(5rem, 18vw, 20rem)",
            color: "var(--se-wine)",
            lineHeight: 0.78,
            opacity: 0.95,
            textAlign: "center",
            position: "relative",
          }}
        >
          socially elisa
          <span
            style={{
              position: "absolute",
              right: "8%",
              top: "30%",
              width: 110,
              opacity: 0.9,
            }}
          >
            <FlowerWalker className="v2-wobble" ink="#cad183" glow="transparent" />
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .v2-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .v2-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p
        style={{
          fontSize: ".72rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--se-chartreuse)",
        }}
      >
        {title}
      </p>
      <ul style={{ marginTop: "1.2rem", listStyle: "none", padding: 0, lineHeight: 2 }}>
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="v2-link" style={{ color: "var(--se-cream)", fontSize: "0.95rem" }}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
