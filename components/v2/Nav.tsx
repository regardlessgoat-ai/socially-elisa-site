"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS: [string, string][] = [
  ["Portfolio", "/v2/portfolio"],
  ["About", "/v2/about"],
  ["Services", "/v2/#services"],
  ["Journal", "/v2/#manifesto"],
  ["Contact", "/v2/contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        transition: "all 380ms cubic-bezier(.2,.8,.2,1)",
        background: scrolled ? "rgba(102, 3, 60, 0.86)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(202,209,131,0.18)" : "1px solid transparent",
      }}
    >
      <div
        className="v2-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.85rem 0" : "1.4rem 0",
          transition: "padding 380ms cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <Link
          href="/v2"
          className="v2-groove"
          style={{
            color: "var(--se-chartreuse)",
            fontSize: scrolled ? "1.3rem" : "1.65rem",
            transition: "font-size 380ms",
          }}
        >
          socially elisa
        </Link>

        <nav style={{ display: "none", gap: "2.25rem" }} className="v2-nav-links">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="v2-link"
              style={{
                color: "var(--se-cream)",
                fontSize: "0.82rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
          <Link
            href="/v2/contact"
            className="v2-btn v2-btn-solid"
            style={{ padding: "0.7rem 1.2rem", fontSize: "0.68rem" }}
          >
            Book a call
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid var(--se-chartreuse)",
              background: "transparent",
              color: "var(--se-chartreuse)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 16,
                height: 1.5,
                background: "currentColor",
                boxShadow: open ? "0 0 0 transparent" : "0 -5px 0 currentColor, 0 5px 0 currentColor",
                transform: open ? "rotate(45deg)" : "none",
                transition: "all 240ms",
              }}
            />
          </button>
        </div>
      </div>

      <style>{`@media (min-width:900px){.v2-nav-links{display:flex !important}}`}</style>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "absolute",
              inset: "100% 0 auto 0",
              background: "var(--se-wine)",
              borderBottom: "1px solid rgba(202,209,131,0.2)",
            }}
          >
            <div
              className="v2-container"
              style={{
                padding: "2.5rem 1.5rem",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.2rem",
              }}
            >
              {LINKS.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="v2-display"
                    style={{
                      fontFamily: "var(--heavy)",
                      color: "var(--se-chartreuse)",
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      textTransform: "lowercase",
                      display: "inline-block",
                    }}
                  >
                    {label.toLowerCase()}
                  </Link>
                </motion.div>
              ))}
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  gap: "1.5rem",
                  color: "var(--se-cream)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                <a href="https://instagram.com" className="v2-link">Instagram</a>
                <a href="https://tiktok.com" className="v2-link">TikTok</a>
                <a href="https://linkedin.com" className="v2-link">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
