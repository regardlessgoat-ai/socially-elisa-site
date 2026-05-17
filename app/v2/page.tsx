import Link from "next/link";
import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/Hero";
import Marquee from "@/components/v2/Marquee";
import CursorGlow from "@/components/v2/CursorGlow";
import Reveal, { RevealWords } from "@/components/v2/Reveal";
import {
  CupFlower,
  FlowerWalker,
  Star,
  Swoosh,
  StampText,
} from "@/components/v2/Mascots";

const projects = [
  {
    slug: "nami",
    name: "Nami",
    year: "2026",
    tags: "Branding · Identity · Web",
    blurb:
      "A wellness brand that wanted softness without losing the edge. We built an identity that hugs first, sells second.",
    tone: "wine", // wine, cream, chartreuse, ink, magenta
  },
  {
    slug: "le-date",
    name: "Le Date",
    year: "2026",
    tags: "Social · Campaign",
    blurb:
      "A date-night syrup brand. Big-mood content, IG growth, and a launch week that sold out three SKUs.",
    tone: "chartreuse",
  },
  {
    slug: "bred",
    name: "Bred",
    year: "2025",
    tags: "Identity · Packaging",
    blurb:
      "Skincare for the unbothered. We named, designed, and shipped a 14-piece kit in eight weeks.",
    tone: "ink",
  },
  {
    slug: "solara",
    name: "Solara Ave.",
    year: "2025",
    tags: "Branding · Lookbook",
    blurb:
      "A lifestyle label with a downtown attitude. A wordmark, a season story, and a paid-social engine.",
    tone: "magenta",
  },
  {
    slug: "organifi",
    name: "Organifi",
    year: "2026",
    tags: "Social · Influencer",
    blurb:
      "Editorial-grade UGC and a creator network that doubled inbound DMs in 60 days.",
    tone: "cream",
  },
  {
    slug: "volt",
    name: "Volt",
    year: "2025",
    tags: "Social · Strategy",
    blurb:
      "A women's running collective. Strategy, content systems, and a tone of voice that ran fast.",
    tone: "wine",
  },
];

const services = [
  {
    n: "01",
    title: "Marketing",
    desc: "Subscription-style marketing for brands without a CMO. Strategy, ads, partnerships, launches — done quietly and on tempo.",
    items: ["Paid social", "Launch playbooks", "Email + retention", "Performance reporting"],
  },
  {
    n: "02",
    title: "Branding",
    desc: "Identity systems that feel like a brand someone would tattoo. Names, marks, voice, guidelines — everything you need to look like yourself, only louder.",
    items: ["Naming + verbal", "Visual identity", "Packaging", "Brand guidelines"],
  },
  {
    n: "03",
    title: "Social Media",
    desc: "Channels run with editorial taste. Content calendars, shoots, creator UGC, community — the daily heartbeat of being seen.",
    items: ["Content strategy", "Production", "Community + DM ops", "Creator network"],
  },
];

export default function V2Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ background: "var(--se-wine)", color: "var(--se-cream)" }}>
        <Hero />

        {/* ---------- MARQUEE 1 ---------- */}
        <Marquee
          items={[
            "creative",
            "authentic",
            "independent",
            "marketing",
            "branding",
            "social media",
          ]}
        />

        {/* ---------- MANIFESTO ---------- */}
        <section
          id="manifesto"
          className="v2-on-chartreuse v2-grain"
          style={{ padding: "10rem 0", position: "relative", overflow: "hidden" }}
        >
          <div className="v2-container" style={{ position: "relative" }}>
            <Reveal>
              <p
                className="v2-eyebrow"
                style={{ color: "var(--se-wine)", display: "flex", gap: ".6rem", alignItems: "center" }}
              >
                <span style={{ width: 12, display: "inline-flex" }}>
                  <Star ink="#66033c" glow="#66033c" />
                </span>
                Manifesto
              </p>
            </Reveal>

            <h2
              className="v2-display"
              style={{
                marginTop: "1.4rem",
                color: "var(--se-wine)",
                fontSize: "clamp(2.6rem, 7.5vw, 8rem)",
                maxWidth: "16ch",
              }}
            >
              <RevealWords text="we don't do" />
              <br />
              <RevealWords text="aesthetic for aesthetic's" delay={0.15} />
              <br />
              <RevealWords text="sake. taste with" delay={0.30} />
              <br />
              <RevealWords text="a reason." delay={0.45} />
            </h2>

            <div
              style={{
                marginTop: "4rem",
                display: "grid",
                gap: "3rem",
                gridTemplateColumns: "1fr 1fr",
              }}
              className="v2-mani-grid"
            >
              <Reveal delay={0.1}>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "var(--se-wine)", opacity: 0.85, maxWidth: 540 }}>
                  Socially Elisa is a marketing agency built by a creative who
                  got tired of brands that sound the same. We mix sharp
                  strategy with a softer, more human way of showing up — for
                  companies, and for the women building them.
                </p>
                <p style={{ marginTop: "1.2rem", fontSize: "1.05rem", lineHeight: 1.65, color: "var(--se-wine)", opacity: 0.85, maxWidth: 540 }}>
                  Every brand we touch leaves with three things: strategy that
                  makes sense, a system that scales, and a tone of voice you
                  could pick out of a lineup.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.2rem",
                    color: "var(--se-wine)",
                  }}
                >
                  {[
                    ["150+", "Projects shipped"],
                    ["8 yrs", "Building brands"],
                    ["20+", "Industries served"],
                    ["3", "Cups of coffee · daily"],
                  ].map(([num, lbl]) => (
                    <div
                      key={lbl}
                      style={{
                        border: "1px solid rgba(102,3,60,0.3)",
                        borderRadius: 20,
                        padding: "1.5rem",
                      }}
                    >
                      <p
                        className="v2-display"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
                      >
                        {num}
                      </p>
                      <p style={{ marginTop: "0.4rem", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                        {lbl}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div
            aria-hidden
            style={{ position: "absolute", right: "-3%", bottom: "-2%", width: 320, opacity: 0.95 }}
          >
            <FlowerWalker className="v2-wobble" ink="#66033c" glow="transparent" accent="#cad183" />
          </div>
          <style>{`@media (max-width:820px){.v2-mani-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section
          id="services"
          className="v2-on-wine v2-grain"
          style={{ padding: "10rem 0", position: "relative" }}
        >
          <div className="v2-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: "2rem" }}>
              <Reveal>
                <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                  ✺ &nbsp;What we do
                </p>
                <h2
                  className="v2-display"
                  style={{
                    marginTop: "1.4rem",
                    fontSize: "clamp(3rem, 7vw, 7.5rem)",
                    color: "var(--se-chartreuse)",
                  }}
                >
                  three lanes.
                  <br />
                  zero filler.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p style={{ maxWidth: 360, color: "var(--se-cream)", opacity: 0.78, fontSize: "1rem", lineHeight: 1.55 }}>
                  Pick a subscription, stop juggling freelancers, and let us
                  run the parts of your brand that move the needle. Month to
                  month, ego-free.
                </p>
              </Reveal>
            </div>

            <div style={{ marginTop: "4rem", display: "grid", gap: "1.4rem" }}>
              {services.map((s, i) => (
                <Reveal key={s.title} delay={0.05 * i}>
                  <article
                    style={{
                      display: "grid",
                      gridTemplateColumns: "0.4fr 1.4fr 2fr 0.4fr",
                      gap: "2rem",
                      alignItems: "start",
                      padding: "2.4rem 1.5rem",
                      borderTop: "1px solid rgba(202,209,131,0.2)",
                      borderBottom: i === services.length - 1 ? "1px solid rgba(202,209,131,0.2)" : "none",
                      transition: "background 320ms",
                    }}
                    className="v2-svc-row"
                  >
                    <span
                      className="v2-eyebrow"
                      style={{ color: "var(--se-chartreuse)", fontSize: "0.9rem" }}
                    >
                      {s.n}
                    </span>
                    <h3
                      className="v2-display"
                      style={{ fontSize: "clamp(2rem, 5vw, 4.4rem)", color: "var(--se-cream)" }}
                    >
                      {s.title.toLowerCase()}
                    </h3>
                    <div style={{ color: "var(--se-cream)", opacity: 0.85 }}>
                      <p style={{ fontSize: "1rem", lineHeight: 1.55, maxWidth: 520 }}>
                        {s.desc}
                      </p>
                      <ul
                        style={{
                          marginTop: "1.2rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                          listStyle: "none",
                          padding: 0,
                        }}
                      >
                        {s.items.map((it) => (
                          <li
                            key={it}
                            style={{
                              border: "1px solid rgba(202,209,131,0.4)",
                              color: "var(--se-chartreuse)",
                              borderRadius: 999,
                              padding: "0.4rem 0.95rem",
                              fontSize: "0.72rem",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                            }}
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span
                      style={{
                        justifySelf: "end",
                        color: "var(--se-chartreuse)",
                        fontSize: "1.5rem",
                      }}
                    >
                      ↗
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <style>{`
            .v2-svc-row:hover { background: rgba(202,209,131,0.04); }
            @media (max-width: 820px) {
              .v2-svc-row { grid-template-columns: auto 1fr !important; }
              .v2-svc-row > :nth-child(3) { grid-column: 1 / -1; }
              .v2-svc-row > :nth-child(4) { display: none; }
            }
          `}</style>
        </section>

        {/* ---------- PORTFOLIO ---------- */}
        <section
          id="work"
          className="v2-on-cream v2-grain"
          style={{ padding: "10rem 0" }}
        >
          <div className="v2-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: "2rem" }}>
              <Reveal>
                <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                  Selected · 2025—2026
                </p>
                <h2
                  className="v2-display"
                  style={{ marginTop: "1.4rem", fontSize: "clamp(3rem, 8vw, 8rem)", color: "var(--se-wine)" }}
                >
                  the work.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link href="/v2/portfolio" className="v2-btn v2-btn-ink">
                  See all 24 →
                </Link>
              </Reveal>
            </div>

            <div
              style={{
                marginTop: "5rem",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.6rem",
              }}
              className="v2-work-grid"
            >
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={0.06 * i}>
                  <Link
                    href={`/v2/projects/${p.slug}`}
                    className="v2-project"
                    style={{
                      display: "block",
                      aspectRatio: i % 3 === 0 ? "5/6" : "4/5",
                      position: "relative",
                      background: toneBg(p.tone),
                      color: toneText(p.tone),
                      padding: "2.2rem",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      <span className="v2-eyebrow">{p.tags}</span>
                      <span style={{ fontSize: "0.85rem" }}>{p.year}</span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        right: "1.5rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "32%",
                        opacity: 0.55,
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
                        style={{ fontSize: "clamp(2.5rem, 5.6vw, 5.6rem)", lineHeight: 0.85 }}
                      >
                        {p.name.toLowerCase()}
                      </h3>
                      <p style={{ marginTop: "0.8rem", maxWidth: 360, opacity: 0.82, fontSize: "0.92rem", lineHeight: 1.5 }}>
                        {p.blurb}
                      </p>
                      <p
                        style={{
                          marginTop: "1.5rem",
                          fontSize: "0.72rem",
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                        }}
                      >
                        Open case →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 760px) {
              .v2-work-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ---------- MARQUEE 2 ---------- */}
        <Marquee
          items={["the work", "the work", "the work", "the work"]}
          speed="fast"
          reverse
        />

        {/* ---------- ABOUT PREVIEW ---------- */}
        <section
          className="v2-on-ink v2-grain"
          style={{ padding: "10rem 0", position: "relative", overflow: "hidden" }}
        >
          <div
            className="v2-container"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
          >
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                About · Hi, I&apos;m Elisa
              </p>
              <h2
                className="v2-display"
                style={{ marginTop: "1.4rem", fontSize: "clamp(3rem, 7vw, 7.5rem)", color: "var(--se-cream)" }}
              >
                <RevealWords text="a flower in a" />
                <br />
                <RevealWords text="world of weeds." delay={0.15} />
              </h2>
              <p style={{ marginTop: "2rem", color: "var(--se-cream)", opacity: 0.78, fontSize: "1.05rem", lineHeight: 1.55, maxWidth: 480 }}>
                I started Socially Elisa after a decade of building brands for
                people who didn&apos;t care if they looked the same as everyone
                else. I do. So I started something for the ones who do too.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["Creative", "Authentic", "Independent"].map((t) => (
                  <span
                    key={t}
                    style={{
                      border: "1px solid var(--se-chartreuse)",
                      color: "var(--se-chartreuse)",
                      borderRadius: 999,
                      padding: "0.45rem 1rem",
                      fontSize: "0.72rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "2.4rem" }}>
                <Link href="/v2/about" className="v2-btn v2-btn-solid">
                  Read my story →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  borderRadius: "999px 999px 28px 28px",
                  background: "linear-gradient(160deg, var(--se-magenta) 0%, var(--se-wine) 80%)",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
                }}
              >
                {/* placeholder portrait area — duotone gradient + mascot */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at 30% 30%, rgba(202,209,131,0.55), transparent 60%)",
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
                  <CupFlower className="v2-wobble" ink="#cad183" glow="transparent" />
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "1.5rem",
                    bottom: "1.5rem",
                    color: "var(--se-chartreuse)",
                  }}
                >
                  <p
                    className="v2-groove"
                    style={{ fontSize: "2.2rem", lineHeight: 0.9 }}
                  >
                    elisa
                  </p>
                  <p
                    style={{
                      marginTop: "0.4rem",
                      fontSize: "0.7rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      opacity: 0.85,
                    }}
                  >
                    Founder · Strategist
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <style>{`
            @media (max-width:820px){
              section.v2-on-ink .v2-container { grid-template-columns:1fr !important; gap: 3rem !important; }
            }
          `}</style>
        </section>

        {/* ---------- TESTIMONIAL ---------- */}
        <section
          className="v2-on-chartreuse v2-grain"
          style={{ padding: "10rem 0", position: "relative", overflow: "hidden" }}
        >
          <div className="v2-container" style={{ position: "relative" }}>
            <Reveal>
              <p
                className="v2-eyebrow"
                style={{ color: "var(--se-wine)", textAlign: "center" }}
              >
                Kind words
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote
                style={{
                  maxWidth: 980,
                  margin: "2rem auto 0",
                  textAlign: "center",
                  color: "var(--se-wine)",
                }}
              >
                <p
                  className="v2-display"
                  style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.6rem)", lineHeight: 1.1, textTransform: "none" }}
                >
                  &ldquo;working with elisa was the first time a marketing
                  agency actually felt like part of our team. the content
                  looked incredible — and the numbers backed it up.&rdquo;
                </p>
                <footer
                  style={{
                    marginTop: "2rem",
                    fontSize: "0.78rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    opacity: 0.78,
                  }}
                >
                  — Founder, beauty brand · 4× repeat client
                </footer>
              </blockquote>
            </Reveal>
            <div
              aria-hidden
              style={{ position: "absolute", left: "2%", top: "8%", width: 110, opacity: 0.9 }}
            >
              <Swoosh ink="#66033c" />
            </div>
            <div
              aria-hidden
              style={{ position: "absolute", right: "2%", bottom: "12%", width: 120, opacity: 0.9 }}
            >
              <StampText text="elisa says" color="#66033c" />
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section
          className="v2-on-magenta v2-grain"
          style={{ padding: "10rem 0 12rem", position: "relative", overflow: "hidden" }}
        >
          <div className="v2-container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                Ready when you are
              </p>
            </Reveal>
            <h2
              className="v2-groove"
              style={{
                marginTop: "1.4rem",
                fontSize: "clamp(3.5rem, 12vw, 12rem)",
                color: "var(--se-chartreuse)",
                lineHeight: 0.82,
              }}
            >
              <RevealWords text="let's build" />
              <br />
              <RevealWords text="something pretty." delay={0.18} />
            </h2>
            <Reveal delay={0.3}>
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Link href="/v2/contact" className="v2-btn v2-btn-solid">
                  Book a discovery call
                </Link>
                <Link href="/v2/portfolio" className="v2-btn v2-btn-ghost">
                  Browse the portfolio
                </Link>
              </div>
            </Reveal>
          </div>
          <div
            aria-hidden
            style={{ position: "absolute", left: "-4%", bottom: "-10%", width: 320, opacity: 0.6 }}
          >
            <FlowerWalker className="v2-wobble" ink="#cad183" />
          </div>
          <div
            aria-hidden
            style={{ position: "absolute", right: "-4%", top: "-10%", width: 320, opacity: 0.6 }}
          >
            <CupFlower className="v2-wobble" ink="#cad183" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function toneBg(t: string) {
  switch (t) {
    case "wine":
      return "var(--se-wine)";
    case "cream":
      return "var(--se-bone)";
    case "chartreuse":
      return "var(--se-chartreuse)";
    case "ink":
      return "var(--se-espresso)";
    case "magenta":
      return "var(--se-magenta)";
    default:
      return "var(--se-wine)";
  }
}
function toneText(t: string) {
  if (t === "cream" || t === "chartreuse") return "#66033c";
  return "#cad183";
}
