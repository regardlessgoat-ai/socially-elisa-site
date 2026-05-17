"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Marquee from "@/components/v2/Marquee";
import CursorGlow from "@/components/v2/CursorGlow";
import Reveal, { RevealWords } from "@/components/v2/Reveal";
import { FlowerWalker } from "@/components/v2/Mascots";

export default function V2Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <CursorGlow />
      <Nav />
      <main style={{ background: "var(--se-wine)", color: "var(--se-cream)" }}>
        <section
          className="v2-grain"
          style={{ padding: "12rem 0 5rem", position: "relative", overflow: "hidden" }}
        >
          <div className="v2-container">
            <Reveal>
              <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
                ✺ &nbsp;Contact
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
              <RevealWords text="say hi." />
            </h1>
            <Reveal delay={0.3}>
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
                If you&apos;re here to talk about working together, fill out
                the form below or{" "}
                <Link href="#" className="v2-link" style={{ color: "var(--se-chartreuse)" }}>
                  book a discovery call
                </Link>
                . If you just want to say nice things, my inbox is at{" "}
                <a href="mailto:hello@sociallyelisa.com" className="v2-link" style={{ color: "var(--se-chartreuse)" }}>
                  hello@sociallyelisa.com
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section
          className="v2-on-cream v2-grain"
          style={{ padding: "6rem 0 10rem" }}
        >
          <div
            className="v2-container"
            style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "5rem" }}
          >
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "grid", gap: "1.5rem" }}
              >
                <Field label="First name" name="first" placeholder="Elisa" />
                <Field label="Last name" name="last" placeholder="Bezerra" />
                <Field label="Email" name="email" placeholder="hello@example.com" type="email" />
                <Select
                  label="What stage is your company in?"
                  name="stage"
                  options={[
                    "My brand is just starting out.",
                    "We have an identity but need a digital presence.",
                    "We're established but need help maintaining it.",
                    "I'm rebranding an existing company.",
                  ]}
                />
                <Select
                  label="What's your budget?"
                  name="budget"
                  options={["Under $1,000", "$1,000 – $3,000", "$3,000 – $6,000", "$6,000+"]}
                />
                <Field label="Preferred timeframe" name="time" placeholder="0–3 months" />
                <div>
                  <label
                    htmlFor="msg"
                    className="v2-eyebrow"
                    style={{ color: "var(--se-wine)", display: "block", marginBottom: "0.6rem" }}
                  >
                    Tell me about it
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={5}
                    placeholder="Brand, goals, timeline, vibes."
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      border: "1px solid rgba(102,3,60,0.35)",
                      background: "transparent",
                      color: "var(--se-wine)",
                      padding: "1rem 1.2rem",
                      fontFamily: "var(--body)",
                      fontSize: "0.95rem",
                      resize: "vertical",
                    }}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  className="v2-btn v2-btn-ink"
                  style={{ justifySelf: "start" }}
                >
                  {sent ? "Sent — talk soon ✺" : "Submit →"}
                </motion.button>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                style={{
                  padding: "2rem",
                  borderRadius: 24,
                  border: "1px solid rgba(102,3,60,0.25)",
                  background: "linear-gradient(160deg, rgba(102,3,60,0.06), transparent)",
                  color: "var(--se-wine)",
                  position: "sticky",
                  top: 100,
                }}
              >
                <p className="v2-eyebrow">Need help? I&apos;m here.</p>
                <p style={{ marginTop: "1.2rem", fontSize: "0.95rem", lineHeight: 1.55, opacity: 0.85 }}>
                  Discovery calls are reserved for serious inquiries. Please
                  come with a brief and a budget range — saves us both a lot
                  of time.
                </p>
                <hr style={{ margin: "1.6rem 0", border: 0, borderTop: "1px solid rgba(102,3,60,0.15)" }} />
                <ul style={{ display: "grid", gap: "0.7rem", padding: 0, listStyle: "none" }}>
                  <li>
                    <span className="v2-eyebrow" style={{ opacity: 0.7 }}>Email</span>
                    <br />
                    <a href="mailto:hello@sociallyelisa.com" className="v2-link">
                      hello@sociallyelisa.com
                    </a>
                  </li>
                  <li>
                    <span className="v2-eyebrow" style={{ opacity: 0.7 }}>Calendly</span>
                    <br />
                    <a href="#" className="v2-link">calendly.com/sociallyelisa</a>
                  </li>
                  <li>
                    <span className="v2-eyebrow" style={{ opacity: 0.7 }}>Instagram</span>
                    <br />
                    <a href="https://instagram.com" className="v2-link">@sociallyelisa</a>
                  </li>
                </ul>
                <p style={{ marginTop: "1.4rem", fontSize: "0.82rem", opacity: 0.7, lineHeight: 1.55 }}>
                  Brand kits start at $1.7k. Websites start at $1.5k. Selecting
                  &ldquo;Under $1,000&rdquo; only applies to single, limited-scope
                  services.
                </p>
              </div>
            </Reveal>
          </div>
          <style>{`@media (max-width:820px){section.v2-on-cream .v2-container{grid-template-columns:1fr !important; gap:3rem !important;}}`}</style>
        </section>

        <Marquee items={["thanks for getting this far", "✺"]} />

        <section
          className="v2-on-ink v2-grain"
          style={{ padding: "10rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}
        >
          <div className="v2-container">
            <h2
              className="v2-groove"
              style={{ color: "var(--se-chartreuse)", fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 0.85 }}
            >
              <RevealWords text="thank you" />
              <br />
              <RevealWords text="for getting this far." delay={0.15} />
            </h2>
          </div>
          <div
            aria-hidden
            style={{ position: "absolute", right: "-2%", bottom: "-3%", width: 220, opacity: 0.9 }}
          >
            <FlowerWalker className="v2-wobble" ink="#cad183" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="v2-eyebrow"
        style={{ color: "var(--se-wine)", display: "block", marginBottom: "0.6rem" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "1px solid rgba(102,3,60,0.35)",
          background: "transparent",
          color: "var(--se-wine)",
          padding: "0.95rem 1.2rem",
          borderRadius: 999,
          fontFamily: "var(--body)",
          fontSize: "0.95rem",
        }}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="v2-eyebrow"
        style={{ color: "var(--se-wine)", display: "block", marginBottom: "0.6rem" }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        style={{
          width: "100%",
          border: "1px solid rgba(102,3,60,0.35)",
          background: "transparent",
          color: "var(--se-wine)",
          padding: "0.95rem 1.2rem",
          borderRadius: 999,
          fontFamily: "var(--body)",
          fontSize: "0.95rem",
          appearance: "none",
        }}
      >
        <option value="" disabled>
          Select one…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
