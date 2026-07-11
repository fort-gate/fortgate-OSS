import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // rgb(var(--*-rgb) / <alpha-value>) so /opacity modifiers work while
        // the hex tokens in globals.css remain the source of truth.
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        "accent-violet": "rgb(var(--color-accent-violet-rgb) / <alpha-value>)",
        "accent-blue": "rgb(var(--color-accent-blue-rgb) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
        // These already carry their own alpha; used at full strength.
        "card-surface": "var(--color-card-surface)",
        border: "var(--color-border)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      maxWidth: {
        container: "var(--max-width)",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      // Typographic scale from the validated design tokens.
      fontSize: {
        // Body Large — 18px desktop / 16px mobile, line-height 1.6
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        // Label — 14px, line-height 1.3
        label: ["14px", { lineHeight: "1.3", fontWeight: "500" }],
        // H2 Section Heading — 44px desktop / 32px mobile, line-height 1.1
        "h2-mobile": ["32px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["44px", { lineHeight: "1.1", fontWeight: "700" }],
        // H1 Display — 64px desktop / 40px mobile, line-height 1.0
        "h1-mobile": ["40px", { lineHeight: "1.0", fontWeight: "700" }],
        h1: ["64px", { lineHeight: "1.0", fontWeight: "700" }],
      },
      spacing: {
        // Section vertical padding: 72px mobile / 120px desktop
        "section-mobile": "72px",
        section: "120px",
        // Grid gap + card padding
        grid: "24px",
        card: "24px",
      },
      transitionTimingFunction: {
        smooth: "var(--ease)",
      },
      backgroundImage: {
        "hero-glow": "var(--hero-radial-glow)",
      },
      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.6s var(--ease) both",
        reveal: "reveal 0.6s var(--ease) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
