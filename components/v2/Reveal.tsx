"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({ children, delay = 0, y = 36, once = true, className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Word-by-word reveal for big headlines */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-15% 0px -15% 0px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{
              duration: 0.85,
              ease: [0.2, 0.8, 0.2, 1],
              delay: delay + i * stagger,
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
