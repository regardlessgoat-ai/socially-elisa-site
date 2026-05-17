"use client";
/* SVG mascots inspired by the Socially Elisa identity:
   - A daisy-flower with one eye, stem & boots (the "tulip walker")
   - A 4-point star burst (used as a punctuation glyph in the PDF)
   - An organic curling brush stroke
   Each mascot is purely SVG so it can re-color via CSS / props.
*/

type ColorProps = {
  className?: string;
  ink?: string;     // outline
  glow?: string;    // fill
  accent?: string;  // tertiary
};

export function FlowerWalker({
  className,
  ink = "#cad183",
  glow = "transparent",
  accent = "#66033c",
}: ColorProps) {
  return (
    <svg
      viewBox="0 0 200 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g fill="none" stroke={ink} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* daisy petals */}
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i * 360) / 10;
          return (
            <ellipse
              key={i}
              cx="100"
              cy="48"
              rx="14"
              ry="32"
              fill={glow}
              transform={`rotate(${a} 100 86)`}
            />
          );
        })}
        {/* head + eye */}
        <circle cx="100" cy="86" r="22" fill={glow} />
        <circle cx="100" cy="86" r="7" fill={ink} />
        <circle cx="103" cy="83" r="2" fill={accent} />
        {/* stem */}
        <path d="M100 110 C 102 150, 96 180, 100 220" />
        {/* leaves */}
        <path d="M100 150 C 70 145, 60 165, 80 175 C 95 178, 100 170, 100 160 Z" fill={glow} />
        <path d="M100 185 C 130 180, 140 200, 120 210 C 105 213, 100 205, 100 195 Z" fill={glow} />
        {/* boots */}
        <path d="M86 220 L86 260 L70 270 L70 285 L100 285 L100 222 Z" fill={glow} />
        <path d="M114 220 L114 260 L130 270 L130 285 L100 285 L100 222 Z" fill={glow} />
      </g>
    </svg>
  );
}

export function CupFlower({
  className,
  ink = "#cad183",
  glow = "transparent",
  accent = "#66033c",
}: ColorProps) {
  return (
    <svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <g fill="none" stroke={ink} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 360) / 8;
          return (
            <ellipse key={i} cx="110" cy="40" rx="14" ry="30" fill={glow} transform={`rotate(${a} 110 80)`} />
          );
        })}
        <circle cx="110" cy="80" r="20" fill={glow} />
        <circle cx="110" cy="80" r="6" fill={ink} />
        <circle cx="112" cy="78" r="2" fill={accent} />
        {/* stem */}
        <path d="M110 100 V 150" />
        {/* cup body */}
        <path d="M70 150 L 70 200 Q 70 220 90 220 L 130 220 Q 150 220 150 200 L 150 150 Z" fill={glow} />
        {/* handle */}
        <path d="M150 170 Q 175 175 175 190 Q 175 210 150 205" fill={glow} />
        {/* boots */}
        <path d="M85 220 L80 250 L70 260 L70 270 L100 270 L100 222" fill={glow} />
        <path d="M120 220 L125 250 L135 260 L135 270 L105 270 L105 222" fill={glow} />
      </g>
    </svg>
  );
}

export function Star({
  className,
  ink = "#cad183",
  glow = "#cad183",
}: ColorProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M50 0 L57 38 L100 50 L57 62 L50 100 L43 62 L0 50 L43 38 Z"
        fill={glow}
        stroke={ink}
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Swoosh({
  className,
  ink = "#cad183",
}: ColorProps) {
  return (
    <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M5 60 C 30 10, 90 -10, 130 30 C 170 70, 200 80, 215 50"
        fill="none"
        stroke={ink}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* circular stamp text — generic helper used by hero */
export function StampText({
  text,
  className,
  color = "#cad183",
  size = 220,
}: {
  text: string;
  className?: string;
  color?: string;
  size?: number;
}) {
  // duplicate text for full ring
  const ring = `${text} · ${text} · `;
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <path id="v2-stamp-path" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <text
        fill={color}
        style={{
          fontFamily: "var(--font-heavy), Anton, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          fontSize: "16px",
        }}
      >
        <textPath href="#v2-stamp-path" startOffset="0">
          {ring}
        </textPath>
      </text>
      <circle cx="100" cy="100" r="46" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
      <Star className="" />
    </svg>
  );
}
