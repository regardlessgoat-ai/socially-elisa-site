import Link from "next/link";
import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Marquee from "@/components/v2/Marquee";
import CursorGlow from "@/components/v2/CursorGlow";
import Reveal, { RevealWords } from "@/components/v2/Reveal";
import { CupFlower, FlowerWalker, Star, StampText, Swoosh } from "@/components/v2/Mascots";

const principles = [
  {
    n: "01",
    t: "Strategy is non-negotiable",
    d: "Before we make anything pretty, we make it make sense. Taste with a reason — every time.",
  },
  {
    n: "02",
    t: "Style is the byproduct",
    d: "Beautiful work happens when the thinking is right. We don't chase trends, we build voices.",
  },
  {
    n: "03",
    t: "Soft is a superpower",
    d: "Imposing yet delicate, like a flower. We can be loud without being loud — and clients feel the difference.",
  },
  {
    n: "04",
    t: "Show up like family",
    d: "We're an extension of your team, not a vendor with a Slack channel. We answer, we care, we show up.",
  },
];

export default function V2About() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ background: "var(--se-wine)", color: "var(--se-cream)" }}>
        {/* HERO */}
        <section
          className="v2-grain"
          style={{
            position: "relative",
            padding: "12rem 0 6rem",
            background: "var(--se-wine)",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", right: "-3%", top: "12%", width: 260, opacity: 0.9 }}
          >
            <FlowerWalker className="v2-wobble" ink="#cad183" />
          </div>

          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                ✺ &nbsp;Hi, I&apos;m Elisa
              </p>
            </Reveal>
            <h1
              className="v2-groove"
              style={{
                marginTop: "1.4rem",
                color: "var(--se-chartreuse)",
                fontSize: "clamp(4rem, 14vw, 16rem)",
                lineHeight: 0.82,
              }}
            >
              <RevealWords text="my story" />
            </h1>
            <Reveal delay={0.3}>
              <p
                style={{
                  marginTop: "2.5rem",
                  fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)",
                  lineHeight: 1.55,
                  color: "var(--se-cream)",
                  opacity: 0.88,
                  maxWidth: 720,
                }}
              >
                Eight years building brands. A few rebrands of my own. One
                stubborn belief: that the most useful thing an agency can do
                is take great taste seriously — and still be a person you
                actually want on the other end of a call.
              </p>
            </Reveal>
          </div>
        </section>

        <Marquee
          items={["creative", "authentic", "independent", "imposing yet delicate"]}
        />

        {/* BIO */}
        <section
          className="v2-on-cream v2-grain"
          style={{ padding: "10rem 0", position: "relative" }}
        >
          <div
            className="v2-container"
            style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "5rem", alignItems: "start" }}

          >
            <Reveal>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: "300px 300px 28px 28px",
                  background: "linear-gradient(170deg, var(--se-magenta), var(--se-wine))",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at 40% 30%, rgba(202,209,131,0.45), transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FlowerWalker className="v2-wobble" ink="#cad183" />
                </div>
                <p
                  className="v2-groove"
                  style={{
                    position: "absolute",
                    left: "1.5rem",
                    bottom: "1.5rem",
                    color: "var(--se-chartreuse)",
                    fontSize: "2.6rem",
                    lineHeight: 0.85,
                  }}
                >
                  elisa
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                The long version
              </p>
              <h2
                className="v2-display"
                style={{
                  marginTop: "1rem",
                  fontSize: "clamp(2.4rem, 4.6vw, 4.6rem)",
                  color: "var(--se-wine)",
                }}
              >
                strategy + storytelling + good taste.
              </h2>
              <div style={{ marginTop: "2rem", color: "var(--se-wine)", opacity: 0.85, lineHeight: 1.7, maxWidth: 540 }}>
                <p>
                  I&apos;ve spent the last eight years working in-house, in
                  agencies, and as a hired creative for brands that wanted to
                  feel different. Somewhere along the way I noticed two things:
                  the brands I loved most had the smallest teams, and the work
                  I was proudest of looked nothing like what an algorithm would
                  predict.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Socially Elisa is the studio I built around that. A small,
                  sharp team. Strategy first. Aesthetics inevitable. Subscription
                  pricing because that&apos;s how real partnerships move.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  I work with founders who are tired of brands that all sound
                  the same — wellness, beauty, lifestyle, food, the cultural
                  edges. If your gut says you&apos;re a flower in a world of
                  weeds, we&apos;ll get along.
                </p>
              </div>
              <div style={{ marginTop: "2.4rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
                <Link href="/v2/contact" className="v2-btn v2-btn-ink">
                  Book a call →
                </Link>
                <Link href="/v2/portfolio" className="v2-btn" style={{ borderColor: "var(--se-wine)", color: "var(--se-wine)" }}>
                  See the work
                </Link>
              </div>
            </Reveal>
          </div>

          <style>{`
            @media (max-width:820px){
              section.v2-on-cream .v2-container{grid-template-columns:1fr !important; gap:3rem !important;}
            }
          `}</style>
        </section>

        {/* PRINCIPLES */}
        <section className="v2-on-wine v2-grain" style={{ padding: "10rem 0" }}>
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                Principles
              </p>
              <h2
                className="v2-display"
                style={{ marginTop: "1.4rem", color: "var(--se-chartreuse)", fontSize: "clamp(3rem, 7vw, 7.5rem)", maxWidth: "16ch" }}
              >
                <RevealWords text="four rules. zero exceptions." />
              </h2>
            </Reveal>

            <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.6rem" }} className="v2-prin-grid">
              {principles.map((p, i) => (
                <Reveal key={p.n} delay={0.06 * i}>
                  <article
                    style={{
                      padding: "2.4rem",
                      borderRadius: 24,
                      border: "1px solid rgba(202,209,131,0.25)",
                      background: "linear-gradient(160deg, rgba(202,209,131,0.06), transparent)",
                      minHeight: 280,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                      <span className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                        {p.n}
                      </span>
                      <span style={{ width: 28, display: "inline-flex" }}>
                        <Star ink="#cad183" glow="#cad183" />
                      </span>
                    </div>
                    <div>
                      <h3
                        className="v2-display"
                        style={{ color: "var(--se-cream)", fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)" }}
                      >
                        {p.t.toLowerCase()}
                      </h3>
                      <p style={{ marginTop: "1rem", color: "var(--se-cream)", opacity: 0.78, fontSize: "0.96rem", lineHeight: 1.55 }}>
                        {p.d}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <style>{`@media (max-width:760px){.v2-prin-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* PRICING TEASER */}
        <section className="v2-on-chartreuse v2-grain" style={{ padding: "10rem 0", position: "relative", overflow: "hidden" }}>
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                Investment · Transparent pricing
              </p>
              <h2
                className="v2-display"
                style={{ marginTop: "1.4rem", color: "var(--se-wine)", fontSize: "clamp(2.6rem, 6vw, 6rem)" }}
              >
                <RevealWords text="no quotes by dm." />
                <br />
                <RevealWords text="no surprises." delay={0.15} />
              </h2>
            </Reveal>

            <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.4rem" }} className="v2-price-grid">
              {[
                ["Brand kits", "$1.7k — $8k", "Naming, identity, voice, full guidelines. One-time."],
                ["Websites", "$1.5k — $5k", "Custom sites, ecommerce, landing pages. Built to scale."],
                ["Subscriptions", "from $2.4k / mo", "Monthly marketing + social. Pause anytime."],
              ].map(([t, p, d]) => (
                <Reveal key={t} delay={0.05}>
                  <div
                    style={{
                      padding: "2rem",
                      borderRadius: 24,
                      border: "1px solid var(--se-wine)",
                      color: "var(--se-wine)",
                      minHeight: 260,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "transparent",
                    }}
                  >
                    <p className="v2-eyebrow">{t}</p>
                    <p
                      className="v2-display"
                      style={{ fontSize: "clamp(2rem, 3.6vw, 3.4rem)" }}
                    >
                      {p}
                    </p>
                    <p style={{ fontSize: "0.92rem", lineHeight: 1.5, opacity: 0.85 }}>{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p style={{ marginTop: "3rem", color: "var(--se-wine)", opacity: 0.75, maxWidth: 720, fontSize: "0.92rem", lineHeight: 1.55 }}>
              I don&apos;t do custom price quotes by DM or email. Discovery
              calls are reserved for serious inquiries — please come ready
              with a brief, a budget range, and an idea of what makes your
              brand a brand.
            </p>
          </div>

          <div
            aria-hidden
            style={{ position: "absolute", right: "0", bottom: "-3%", width: 220, opacity: 0.95 }}
          >
            <StampText text="serious inquiries" color="#66033c" />
          </div>

          <style>{`@media (max-width:820px){.v2-price-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* CTA */}
        <section
          className="v2-on-ink v2-grain"
          style={{ padding: "10rem 0", textAlign: "center" }}
        >
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                Still here? Good.
              </p>
              <h2
                className="v2-groove"
                style={{
                  marginTop: "1.4rem",
                  color: "var(--se-chartreuse)",
                  fontSize: "clamp(3rem, 9vw, 9rem)",
                  lineHeight: 0.85,
                }}
              >
                let&apos;s talk.
              </h2>
              <div style={{ marginTop: "2.4rem", display: "flex", justifyContent: "center", gap: ".75rem", flexWrap: "wrap" }}>
                <Link href="/v2/contact" className="v2-btn v2-btn-solid">
                  Book a discovery call
                </Link>
                <a href="mailto:hello@sociallyelisa.com" className="v2-btn v2-btn-ghost">
                  Email me directly
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
