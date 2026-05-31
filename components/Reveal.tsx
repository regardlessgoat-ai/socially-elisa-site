"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps a block and reveals its direct children once, the first time the
 * block scrolls into view. We only add the `reveal-ready` class on the
 * client so that without JS (or before hydration) the content renders in
 * its final, visible state. The actual animation lives in globals.css and
 * is gated behind `prefers-reduced-motion: no-preference`.
 */
export default function Reveal({ className = "", children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hidden initial state applies only once JS is present.
    el.classList.add("reveal-ready");

    // Respect reduced motion: show immediately, never animate.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect(); // one-time reveal — never re-trigger
            break;
          }
        }
      },
      { threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
