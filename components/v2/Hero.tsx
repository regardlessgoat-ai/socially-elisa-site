"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CupFlower, FlowerWalker, Star, StampText, Swoosh } from "./Mascots";

export default function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });
  const yWord = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const yMascotL = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const yMascotR = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotStamp = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scaleEye = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={wrap}
      className="v2-grain"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--se-wine)",
        overflow: "hidden",
        padding: "9rem 0 6rem",
      }}
    >
      {/* corner blobs */}
      <motion.div
        style={{ y: yMascotL, position: "absolute", left: "-5%", top: "12%", width: "20vw", maxWidth: 260, minWidth: 120, opacity: 0.95 }}
      >
        <FlowerWalker className="v2-wobble" ink="#cad183" glow="transparent" accent="#cad183" />
      </motion.div>
      <motion.div
        style={{ y: yMascotR, position: "absolute", right: "2%", bottom: "8%", width: "18vw", maxWidth: 240, minWidth: 110, opacity: 0.95 }}
      >
        <CupFlower className="v2-wobble" ink="#cad183" glow="transparent" />
      </motion.div>
      <motion.div
        style={{
          rotate: rotStamp,
          position: "absolute",
          right: "8%",
          top: "20%",
          width: 200,
          opacity: 0.85,
        }}
      >
        <StampText text="socially elisa" color="#cad183" />
      </motion.div>

      <div className="v2-container" style={{ position: "relative", zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            color: "var(--se-chartreuse)",
            letterSpacing: "0.35em",
            fontSize: "0.78rem",
            textTransform: "uppercase",
          }}
        >
          ✺ &nbsp;Marketing · Branding · Social Media · Est. 2024
        </motion.p>

        <motion.h1
          style={{ y: yWord }}
          className="v2-groove"
        >
          <Letter delay={0.18}>s</Letter>
          <Letter delay={0.22}>o</Letter>
          <Letter delay={0.26}>c</Letter>
          <Letter delay={0.30}>i</Letter>
          <Letter delay={0.34}>a</Letter>
          <Letter delay={0.38}>l</Letter>
          <Letter delay={0.42}>l</Letter>
          <Letter delay={0.46}>y</Letter>
          <br />
          <Letter delay={0.50}>e</Letter>
          <Letter delay={0.54}>l</Letter>
          <Letter delay={0.58}>i</Letter>
          <Letter delay={0.62}>s</Letter>
          <Letter delay={0.66}>a</Letter>
        </motion.h1>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "1.2fr 1fr",
          }}
          className="v2-hero-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.85 }}
          >
            <p
              style={{
                color: "var(--se-cream)",
                opacity: 0.88,
                fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)",
                lineHeight: 1.45,
                maxWidth: 560,
              }}
            >
              A social-first studio for brands that go beyond the obvious.
              <br />
              <em style={{ color: "var(--se-chartreuse)", fontStyle: "normal" }}>
                Imposing, yet delicate — like a flower.
              </em>
            </p>
            <div style={{ marginTop: "2.4rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/v2/portfolio" className="v2-btn v2-btn-solid">
                See the work
                <span aria-hidden>→</span>
              </Link>
              <Link href="/v2/contact" className="v2-btn v2-btn-ghost">
                Book a discovery call
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.95 }}
            style={{
              alignSelf: "end",
              borderLeft: "1px solid rgba(225,222,217,0.25)",
              paddingLeft: "1.5rem",
              color: "var(--se-cream)",
            }}
          >
            <p className="v2-eyebrow" style={{ color: "var(--se-chartreuse)" }}>
              Now serving
            </p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", lineHeight: 1.5, opacity: 0.85 }}>
              Wellness, beauty, lifestyle, food, and the women building all of
              the above. 100% remote, headquartered in good taste.
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "1.2rem",
                alignItems: "center",
              }}
            >
              <motion.div style={{ scale: scaleEye, width: 28, display: "inline-flex" }}>
                <Star ink="#cad183" glow="#cad183" />
              </motion.div>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--se-chartreuse)",
                }}
              >
                Scroll
              </span>
            </div>
          </motion.div>
        </div>

        <div
          aria-hidden
          style={{
            position: "absolute",
            right: "0",
            bottom: "-30px",
            width: 180,
            opacity: 0.55,
          }}
        >
          <Swoosh ink="#cad183" />
        </div>
      </div>

      <style>{`
        .v2-groove {
          font-size: clamp(4.5rem, 18vw, 18rem);
          color: var(--se-chartreuse);
          line-height: 0.82;
          margin: 1.5rem 0 0;
        }
        @media (max-width: 760px) {
          .v2-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Letter({ children, delay }: { children: string; delay: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
      }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ y: "115%", rotate: 8 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
