"use client";
import { ReactNode } from "react";
import { Star } from "./Mascots";

const Sep = () => (
  <span style={{ width: 36, height: 36, display: "inline-flex" }}>
    <Star ink="#cad183" glow="#cad183" />
  </span>
);

type Props = {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
  textClassName?: string;
  separator?: ReactNode;
};

export default function Marquee({
  items,
  speed = "normal",
  reverse,
  className,
  textClassName,
  separator,
}: Props) {
  const tripled = [...items, ...items, ...items];
  return (
    <div
      className={`v2-marquee ${speed === "fast" ? "v2-marquee-fast" : ""} ${
        reverse ? "v2-marquee-reverse" : ""
      } ${className ?? ""}`}
    >
      <div className="v2-marquee-track">
        {tripled.map((item, i) => (
          <span
            key={i}
            className={textClassName ?? ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2.5rem",
              fontFamily: "var(--heavy)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              textTransform: "lowercase",
              color: "var(--se-chartreuse)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--se-cream)", display: "inline-flex" }}>
              {separator ?? <Sep />}
            </span>
          </span>
        ))}
      </div>
      <div className="v2-marquee-track" aria-hidden>
        {tripled.map((item, i) => (
          <span
            key={`b-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2.5rem",
              fontFamily: "var(--heavy)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              textTransform: "lowercase",
              color: "var(--se-chartreuse)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--se-cream)", display: "inline-flex" }}>
              {separator ?? <Sep />}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
