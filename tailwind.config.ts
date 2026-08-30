import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E1DED9",
        chartreuse: "#CAD183",
        wine: "#66033C",
        espresso: "#311507",
      },
      fontFamily: {
        // Brand book p.7: Tropiland for titles/special words, Coolvetica for
        // text + bold titles. The old Google fonts stay in the stack ON PURPOSE:
        // they are the live fallback until the font files arrive in public/fonts,
        // and a safety net if a glyph is ever missing after that.
        display: ["Tropiland", "var(--font-display)", "Georgia", "serif"],
        sans: ["Coolvetica", "var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 16s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
