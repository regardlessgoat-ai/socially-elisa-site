import Link from "next/link";
import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Marquee from "@/components/v2/Marquee";
import CursorGlow from "@/components/v2/CursorGlow";
import Reveal, { RevealWords } from "@/components/v2/Reveal";
import { CupFlower, FlowerWalker, Star, StampText } from "@/components/v2/Mascots";

const projects = [
  { slug: "nami", name: "Nami", year: "2026", cat: "Branding · Identity", blurb: "A wellness brand that hugs first, sells second.", tone: "wine" },
  { slug: "le-date", name: "Le Date", year: "2026", cat: "Social · Campaign", blurb: "Date-night syrup. Launch week sold out three SKUs.", tone: "chartreuse" },
  { slug: "bred", name: "Bred", year: "2025", cat: "Identity · Packaging", blurb: "Skincare for the unbothered. 14 SKUs, eight weeks.", tone: "ink" },
  { slug: "solara", name: "Solara Avenue", year: "2025", cat: "Branding · Lookbook", blurb: "Downtown lifestyle label, season story + paid engine.", tone: "magenta" },
  { slug: "organifi", name: "Organifi", year: "2026", cat: "Social · Influencer", blurb: "UGC + creator network — 2× inbound DMs in 60 days.", tone: "cream" },
  { slug: "volt", name: "Volt", year: "2025", cat: "Strategy · Social", blurb: "A women's running collective with a fast voice.", tone: "wine" },
  { slug: "ah-pt", name: "AH Physical Therapy", year: "2025", cat: "Identity", blurb: "Clinical, but warm. Logo + system + signage.", tone: "ink" },
  { slug: "daughters-of-ra", name: "Daughters of Ra", year: "2025", cat: "Branding", blurb: "Ritual jewelry. Letterforms based on sun glyphs.", tone: "magenta" },
  { slug: "myth-and-mare", name: "Myth & Mare", year: "2024", cat: "Identity · Web", blurb: "Equestrian apparel. Soft luxe meets working horse.", tone: "chartreuse" },
  { slug: "estelle", name: "Estelle Beauty", year: "2024", cat: "Social · Launch", blurb: "Indie cosmetics launch. 18k IG in 12 weeks.", tone: "cream" },
];

export default function V2Portfolio() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ background: "var(--se-wine)", color: "var(--se-cream)" }}>
        {/* HERO */}
        <section
          className="v2-grain"
          style={{
            padding: "12rem 0 5rem",
            background: "var(--se-wine)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", left: "-3%", top: "10%", width: 240, opacity: 0.95 }}
          >
            <FlowerWalker className="v2-wobble" ink="#cad183" />
          </div>
          <div
            aria-hidden
            style={{ position: "absolute", right: "1%", bottom: "8%", width: 200, opacity: 0.85 }}
          >
            <StampText text="recent work" color="#cad183" />
          </div>

          <div className="v2-container" style={{ position: "relative" }}>
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                Portfolio · 2024 — 2026
              </p>
            </Reveal>
            <h1
              className="v2-groove"
              style={{
                marginTop: "1.4rem",
                color: "var(--se-chartreuse)",
                fontSize: "clamp(4rem, 16vw, 18rem)",
                lineHeight: 0.8,
              }}
            >
              <RevealWords text="the" />
              <br />
              <RevealWords text="work." delay={0.15} />
            </h1>
            <Reveal delay={0.4}>
              <p
                style={{
                  marginTop: "2rem",
                  fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)",
                  lineHeight: 1.55,
                  color: "var(--se-cream)",
                  opacity: 0.85,
                  maxWidth: 720,
                }}
              >
                A small slice of the brands we&apos;ve helped build. Click any
                project for the full case study — the why, the how, the
                receipts.
              </p>
            </Reveal>
            <Reveal delay={0.55}>
              <div style={{ marginTop: "2.4rem", display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
                {["All", "Branding", "Social", "Web", "Campaigns"].map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    style={{
                      border: "1px solid var(--se-chartreuse)",
                      color: i === 0 ? "var(--se-wine)" : "var(--se-chartreuse)",
                      background: i === 0 ? "var(--se-chartreuse)" : "transparent",
                      borderRadius: 999,
                      padding: "0.55rem 1.1rem",
                      fontSize: "0.72rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee items={["the work", "the work", "the work"]} speed="fast" />

        {/* GRID */}
        <section className="v2-on-cream v2-grain" style={{ padding: "6rem 0 10rem" }}>
          <div className="v2-container">
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.6rem" }}
              className="v2-portfolio-grid"
            >
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 0.06}>
                  <Link
                    href={`/v2/projects/${p.slug}`}
                    className="v2-project"
                    style={{
                      display: "block",
                      aspectRatio: i % 3 === 1 ? "5/6" : "4/5",
                      position: "relative",
                      background: toneBg(p.tone),
                      color: toneText(p.tone),
                      padding: "2.2rem",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", zIndex: 3, position: "relative" }}>
                      <span className="v2-eyebrow">{p.cat}</span>
                      <span style={{ fontSize: "0.82rem" }}>{p.year}</span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        right: "1.5rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "34%",
                        opacity: 0.5,
                        zIndex: 2,
                      }}
                    >
                      {i % 2 === 0 ? (
                        <CupFlower className="v2-wobble" ink={toneText(p.tone)} />
                      ) : (
                        <FlowerWalker className="v2-wobble" ink={toneText(p.tone)} />
                      )}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "2.2rem",
                        bottom: "2rem",
                        right: "2.2rem",
                        zIndex: 3,
                      }}
                    >
                      <h3
                        className="v2-groove"
                        style={{ fontSize: "clamp(2.4rem, 5.4vw, 5.4rem)", lineHeight: 0.85 }}
                      >
                        {p.name.toLowerCase()}
                      </h3>
                      <p style={{ marginTop: "0.7rem", maxWidth: 360, opacity: 0.82, fontSize: "0.92rem", lineHeight: 1.5 }}>
                        {p.blurb}
                      </p>
                      <p style={{ marginTop: "1.2rem", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                        Open case →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <style>{`@media (max-width:760px){.v2-portfolio-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* CTA */}
        <section className="v2-on-magenta v2-grain" style={{ padding: "8rem 0 10rem", textAlign: "center", position: "relative" }}>
          <div className="v2-container">
            <h2
              className="v2-groove"
              style={{ color: "var(--se-chartreuse)", fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 0.85 }}
            >
              <RevealWords text="your brand," />
              <br />
              <RevealWords text="next." delay={0.15} />
            </h2>
            <Reveal delay={0.3}>
              <div style={{ marginTop: "2.4rem", display: "flex", justifyContent: "center", gap: ".75rem", flexWrap: "wrap" }}>
                <Link href="/v2/contact" className="v2-btn v2-btn-solid">
                  Book a discovery call
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function toneBg(t: string) {
  switch (t) {
    case "wine": return "var(--se-wine)";
    case "cream": return "var(--se-bone)";
    case "chartreuse": return "var(--se-chartreuse)";
    case "ink": return "var(--se-espresso)";
    case "magenta": return "var(--se-magenta)";
    default: return "var(--se-wine)";
  }
}
function toneText(t: string) {
  if (t === "cream" || t === "chartreuse") return "#66033c";
  return "#cad183";
}
