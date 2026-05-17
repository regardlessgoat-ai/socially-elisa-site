import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Marquee from "@/components/v2/Marquee";
import CursorGlow from "@/components/v2/CursorGlow";
import Reveal, { RevealWords } from "@/components/v2/Reveal";
import { CupFlower, FlowerWalker, Star, StampText } from "@/components/v2/Mascots";

type Project = {
  slug: string;
  name: string;
  year: string;
  cat: string;
  tagline: string;
  problem: string;
  approach: string;
  deliverables: string[];
  outcome: string[];
  tone: "wine" | "cream" | "chartreuse" | "ink" | "magenta";
  next: string;
};

const PROJECTS: Record<string, Project> = {
  nami: {
    slug: "nami",
    name: "Nami",
    year: "2026",
    cat: "Branding · Identity · Web",
    tagline: "A wellness brand that hugs first, sells second.",
    problem:
      "Nami arrived with a product line they loved and a brand that felt like a placeholder. Soft-spoken founder, sharp ingredients, and zero visual point of view to back it up.",
    approach:
      "We rebuilt from the inside: a brand truth (we are soft because we are sure), a wordmark that breathes, a color story tuned to mood not trend, and a tone of voice that lets the customer feel a little smarter for choosing it.",
    deliverables: [
      "Strategy + brand truth",
      "Naming refresh",
      "Wordmark & secondary lockups",
      "Typography & color system",
      "Voice & tone guidelines",
      "Packaging direction",
      "Website (Webflow)",
    ],
    outcome: [
      "+184% IG saves in first 90 days",
      "3.4× repeat-purchase rate",
      "First feature in a major wellness title",
    ],
    tone: "wine",
    next: "le-date",
  },
  "le-date": {
    slug: "le-date",
    name: "Le Date",
    year: "2026",
    cat: "Social · Campaign",
    tagline: "Date-night syrup, launched like a perfume.",
    problem:
      "A 3-SKU consumable launch with no audience, a tight calendar, and a category most shoppers had never considered.",
    approach:
      "We treated the launch like a fragrance drop: a moodboard, a single hero film, and a content engine built around 'plans for tonight.' Influencer sampling, IG-native creative, and a pre-order list that opened twice.",
    deliverables: [
      "Launch strategy",
      "30-day content calendar",
      "Hero film + cutdowns",
      "Influencer seeding (28 creators)",
      "Email flow (4 stages)",
      "Paid social setup",
    ],
    outcome: [
      "Sold out 3 SKUs in 11 days",
      "12,400 IG followers in 6 weeks",
      "$48k revenue from $4.2k spend",
    ],
    tone: "chartreuse",
    next: "bred",
  },
  bred: {
    slug: "bred",
    name: "Bred",
    year: "2025",
    cat: "Identity · Packaging",
    tagline: "Skincare for the unbothered.",
    problem:
      "A founder with 14 formulas, a deadline, and a category screaming at every customer at the same volume.",
    approach:
      "A point of view in everything: a wordmark with attitude, packaging that's nearly silent, and a tone of voice that doesn't perform softness — it just is. We shipped the full kit in eight weeks.",
    deliverables: [
      "Naming + brand truth",
      "Logo system",
      "Packaging design",
      "Photography direction",
      "Site (single-page Shopify)",
    ],
    outcome: [
      "Featured in 4 print indies",
      "First-quarter revenue 2.1× projection",
      "12-month retainer signed post-launch",
    ],
    tone: "ink",
    next: "solara",
  },
  solara: {
    slug: "solara",
    name: "Solara Avenue",
    year: "2025",
    cat: "Branding · Lookbook",
    tagline: "Downtown energy. Built to walk.",
    problem:
      "A lifestyle label with a closet of pieces and no idea how to talk about itself for more than one season.",
    approach:
      "We built a brand world that can hold three seasons of stories without flinching: a wordmark that bends, a tone that moves between editorial and street, and a paid-social engine that doesn't lose the voice in the funnel.",
    deliverables: [
      "Brand strategy",
      "Identity system",
      "Lookbook (24pp)",
      "Editorial photography direction",
      "Paid social playbook",
    ],
    outcome: [
      "+47% click-through on retargeting",
      "1.8× organic reach quarter over quarter",
      "Sold-out drop in 9 days",
    ],
    tone: "magenta",
    next: "organifi",
  },
  organifi: {
    slug: "organifi",
    name: "Organifi",
    year: "2026",
    cat: "Social · Influencer",
    tagline: "Editorial-grade UGC, scaled.",
    problem:
      "A wellness staple with raving fans and a UGC pipeline that looked like everyone else's.",
    approach:
      "We treated creator content like an editorial brief, not a quota: 12 hand-picked creators, three story arcs per month, and a tone-of-voice doc the creators actually wanted to read.",
    deliverables: [
      "Creator strategy + briefs",
      "12-creator monthly network",
      "Content QC + edit pass",
      "Quarterly performance report",
    ],
    outcome: [
      "2× inbound DMs in 60 days",
      "+38% save rate on UGC posts",
      "Reduced cost-per-creative by 41%",
    ],
    tone: "cream",
    next: "volt",
  },
  volt: {
    slug: "volt",
    name: "Volt",
    year: "2025",
    cat: "Strategy · Social",
    tagline: "A women's running collective with a fast voice.",
    problem:
      "A grassroots run club ready to be a brand, with founders who didn't want to lose what made them grassroots.",
    approach:
      "We built a strategy that protects the inside-joke energy while sharpening it: a tone of voice, a Tuesday-night content ritual, and a story arc that turned members into authors.",
    deliverables: [
      "Brand voice + verbal identity",
      "Content system (weekly cadence)",
      "Member-led editorial program",
      "Event playbook (4 a year)",
    ],
    outcome: [
      "4× chapter growth in 12 months",
      "Sold out merch drops 3 quarters running",
      "Featured in two endurance pubs",
    ],
    tone: "wine",
    next: "nami",
  },
  "ah-pt": {
    slug: "ah-pt",
    name: "AH Physical Therapy",
    year: "2025",
    cat: "Identity",
    tagline: "Clinical, but warm.",
    problem:
      "A founder PT with a growing referral base and a brand that looked like a stock template.",
    approach:
      "A wordmark with a softer counter form, a palette that reads medical without feeling sterile, and a system that scales from sock to signage.",
    deliverables: ["Logo system", "Signage", "Print system", "Web microsite"],
    outcome: ["Booking +27% in first quarter", "Two new clinic locations"],
    tone: "ink",
    next: "daughters-of-ra",
  },
  "daughters-of-ra": {
    slug: "daughters-of-ra",
    name: "Daughters of Ra",
    year: "2025",
    cat: "Branding",
    tagline: "Ritual jewelry, built on glyphs.",
    problem:
      "A heritage jewelry house that wanted to feel like a contemporary cult-favorite.",
    approach:
      "We built letterforms on sun glyphs, a tone that takes itself seriously without being precious, and a packaging system you'd keep on a shelf.",
    deliverables: ["Identity", "Submark", "Packaging", "Website"],
    outcome: ["3× press inbound", "Editorial coverage in two style books"],
    tone: "magenta",
    next: "myth-and-mare",
  },
  "myth-and-mare": {
    slug: "myth-and-mare",
    name: "Myth & Mare",
    year: "2024",
    cat: "Identity · Web",
    tagline: "Soft luxe meets working horse.",
    problem:
      "Equestrian apparel that needed to feel premium without losing the barn.",
    approach: "An identity built around two textures: hand and machine.",
    deliverables: ["Identity", "Lookbook", "Site"],
    outcome: ["Best-month sell-through at launch", "Stocked by 6 retailers"],
    tone: "chartreuse",
    next: "estelle",
  },
  estelle: {
    slug: "estelle",
    name: "Estelle Beauty",
    year: "2024",
    cat: "Social · Launch",
    tagline: "Indie cosmetics launched on attitude.",
    problem:
      "An indie launch with a great product, a small team, and twelve weeks to get to the conversation.",
    approach:
      "A launch playbook with a single, repeatable content format and a creator network seeded by hand.",
    deliverables: [
      "Launch strategy",
      "Hero video + cutdowns",
      "12-creator seeding",
      "Email + paid setup",
    ],
    outcome: ["18k IG in 12 weeks", "Reorder rate of 38% by month three"],
    tone: "cream",
    next: "nami",
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = PROJECTS[params.slug];
  if (!p) notFound();

  const nextP = PROJECTS[p.next];

  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ background: "var(--se-wine)", color: "var(--se-cream)" }}>
        {/* HERO */}
        <section
          className="v2-grain"
          style={{
            padding: "12rem 0 6rem",
            background: toneBg(p.tone),
            color: toneText(p.tone),
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="v2-container" style={{ position: "relative" }}>
            <Reveal>
              <Link
                href="/v2/portfolio"
                className="v2-link"
                style={{ color: toneText(p.tone), fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
              >
                ← Portfolio
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="v2-eyebrow"
                style={{ marginTop: "1.4rem" }}
              >
                {p.cat} · {p.year}
              </p>
            </Reveal>
            <h1
              className="v2-groove"
              style={{
                marginTop: "1rem",
                fontSize: "clamp(4rem, 14vw, 16rem)",
                lineHeight: 0.82,
              }}
            >
              <RevealWords text={p.name.toLowerCase()} />
            </h1>
            <Reveal delay={0.3}>
              <p
                style={{
                  marginTop: "2rem",
                  fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)",
                  maxWidth: 760,
                  lineHeight: 1.45,
                  opacity: 0.88,
                }}
              >
                {p.tagline}
              </p>
            </Reveal>
          </div>

          <div
            aria-hidden
            style={{ position: "absolute", right: "-2%", bottom: "-3%", width: 240, opacity: 0.7 }}
          >
            <FlowerWalker className="v2-wobble" ink={toneText(p.tone)} />
          </div>
          <div
            aria-hidden
            style={{ position: "absolute", right: "10%", top: "20%", width: 180, opacity: 0.7 }}
          >
            <StampText text={`${p.name} · ${p.year}`} color={toneText(p.tone)} />
          </div>
        </section>

        {/* MOCK IMAGE */}
        <section
          className="v2-on-ink"
          style={{ padding: "5rem 0" }}
        >
          <div className="v2-container">
            <Reveal>
              <div
                style={{
                  aspectRatio: "16/9",
                  borderRadius: 28,
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(202,209,131,0.18), transparent 60%), linear-gradient(160deg, var(--se-magenta), var(--se-wine))",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="v2-groove"
                    style={{
                      color: "var(--se-chartreuse)",
                      fontSize: "clamp(3rem, 10vw, 10rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.name.toLowerCase()}
                  </span>
                </div>
                <span
                  aria-hidden
                  style={{ position: "absolute", right: "1.5rem", bottom: "1.5rem", width: 36, display: "inline-flex" }}
                >
                  <Star ink="#cad183" glow="#cad183" />
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CASE BODY */}
        <section className="v2-on-cream v2-grain" style={{ padding: "10rem 0" }}>
          <div className="v2-container">
            <div
              style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "4rem" }}
              className="v2-case-grid"
            >
              <Reveal>
                <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                  The brief
                </p>
                <h2
                  className="v2-display"
                  style={{ marginTop: "0.8rem", color: "var(--se-wine)", fontSize: "clamp(2rem, 3.8vw, 3.8rem)" }}
                >
                  problem.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p style={{ color: "var(--se-wine)", opacity: 0.85, fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 640 }}>
                  {p.problem}
                </p>
              </Reveal>
            </div>

            <div
              style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "4rem" }}
              className="v2-case-grid"
            >
              <Reveal>
                <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                  The work
                </p>
                <h2
                  className="v2-display"
                  style={{ marginTop: "0.8rem", color: "var(--se-wine)", fontSize: "clamp(2rem, 3.8vw, 3.8rem)" }}
                >
                  approach.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p style={{ color: "var(--se-wine)", opacity: 0.85, fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 640 }}>
                  {p.approach}
                </p>
                <ul
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {p.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        border: "1px solid rgba(102,3,60,0.35)",
                        color: "var(--se-wine)",
                        borderRadius: 999,
                        padding: "0.4rem 0.95rem",
                        fontSize: "0.72rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <style>{`@media (max-width:820px){.v2-case-grid{grid-template-columns:1fr !important; gap:1.5rem !important;}}`}</style>
          </div>
        </section>

        {/* RESULTS */}
        <section className="v2-on-chartreuse v2-grain" style={{ padding: "10rem 0", position: "relative" }}>
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-wine)" }}>
                Receipts
              </p>
              <h2
                className="v2-display"
                style={{ marginTop: "1rem", color: "var(--se-wine)", fontSize: "clamp(2.6rem, 6vw, 6rem)" }}
              >
                outcome.
              </h2>
            </Reveal>

            <div
              style={{
                marginTop: "3rem",
                display: "grid",
                gridTemplateColumns: `repeat(${p.outcome.length}, 1fr)`,
                gap: "1.4rem",
              }}
              className="v2-results-grid"
            >
              {p.outcome.map((o, i) => (
                <Reveal key={o} delay={0.05 * i}>
                  <div
                    style={{
                      padding: "2rem",
                      borderRadius: 24,
                      border: "1px solid var(--se-wine)",
                      color: "var(--se-wine)",
                      minHeight: 180,
                    }}
                  >
                    <span className="v2-eyebrow">0{i + 1}</span>
                    <p
                      className="v2-display"
                      style={{ marginTop: "1rem", fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)", textTransform: "none" }}
                    >
                      {o}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`@media (max-width:820px){.v2-results-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <Marquee items={[p.name.toLowerCase(), "case study", "socially elisa"]} />

        {/* NEXT PROJECT */}
        <section className="v2-on-wine v2-grain" style={{ padding: "10rem 0", position: "relative" }}>
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                Next case
              </p>
            </Reveal>
            <Link
              href={`/v2/projects/${nextP.slug}`}
              style={{
                marginTop: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2rem",
                textDecoration: "none",
                color: "var(--se-chartreuse)",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                borderTop: "1px solid rgba(202,209,131,0.2)",
                borderBottom: "1px solid rgba(202,209,131,0.2)",
              }}
            >
              <h3
                className="v2-groove"
                style={{ fontSize: "clamp(3rem, 9vw, 10rem)", lineHeight: 0.85 }}
              >
                {nextP.name.toLowerCase()}
              </h3>
              <span
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 999,
                  background: "var(--se-chartreuse)",
                  color: "var(--se-wine)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </Link>
          </div>

          <div
            aria-hidden
            style={{ position: "absolute", left: "2%", bottom: "8%", width: 140, opacity: 0.6 }}
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
