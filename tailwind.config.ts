import type { Config } from "tailwindcss";

/**
 * Greensteds International School — Tailwind Design System
 *
 * Every colour, font size, spacing value, and breakpoint is defined here.
 * Change a value here and it updates everywhere on the site.
 * Do NOT use arbitrary Tailwind values [like-this] in components —
 * always define a named token here first.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Colours ────────────────────────────────────────────────────
      colors: {
        green: {
          primary: "#006633",   // Main brand green — nav, buttons, accents
          dark:    "#004D26",   // Footer, CTA section backgrounds
          deep:    "#003d1f",   // Deepest green — hero overlays
          light:   "#E8F5EE",   // Subtle tint — headmaster section, accent boxes
          mid:    "#EBF5F0",    // Slightly stronger tint
        },
        gold: {
          DEFAULT: "#B8960C",   // Accent — stat dividers, final CTA button, labels
          light:   "#FDF8EC",   // Gold background tint
        },
        charcoal: {
          DEFAULT: "#1C1C1C",   // Primary text — never pure black
          mid:     "#555555",   // Secondary text, captions
          light:   "#888888",   // Tertiary text, placeholders
        },
        cream: {
          DEFAULT: "#FDFCF9",   // Primary page background — warm, not clinical white
          dark:    "#F5F5F3",   // Alternate section background
        },
        rule: "#E0DBD4",        // Divider lines
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        serif:  ["var(--font-playfair)", "Georgia", "serif"],
        sans:   ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Display — hero headlines only
        "display-lg": ["4rem",    { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display":    ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2" }],

        // Headings
        "h1":  ["2.5rem",  { lineHeight: "1.2" }],
        "h2":  ["2rem",    { lineHeight: "1.25" }],
        "h3":  ["1.5rem",  { lineHeight: "1.3" }],
        "h4":  ["1.125rem",{ lineHeight: "1.4" }],

        // Body
        "body-lg": ["1.125rem", { lineHeight: "1.8" }],
        "body":    ["1rem",     { lineHeight: "1.75" }],
        "body-sm": ["0.9375rem",{ lineHeight: "1.7" }],

        // UI
        "label":   ["0.75rem",  { lineHeight: "1.4", letterSpacing: "0.1em" }],
        "caption": ["0.8125rem",{ lineHeight: "1.5" }],
      },

      // ── Spacing ──────────────────────────────────────────────────────────
      // 8px base grid — all spacing is a multiple of 8
      spacing: {
        "section":    "7.5rem",  // 120px — section vertical padding desktop
        "section-sm": "4rem",    // 64px  — section vertical padding mobile
        "18":         "4.5rem",
        "22":         "5.5rem",
        "26":         "6.5rem",
        "30":         "7.5rem",
      },

      // ── Max Widths ───────────────────────────────────────────────────────
      maxWidth: {
        "site":    "1280px",  // Maximum content width
        "prose":   "680px",   // Optimal reading width (~65ch)
        "narrow":  "480px",   // Narrow centered content
      },

      // ── Animation ────────────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: "200ms",
        slow:    "400ms",
      },

      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },

      // ── Breakpoints ──────────────────────────────────────────────────────
      screens: {
        "xs":  "390px",
        "sm":  "640px",
        "md":  "768px",
        "lg":  "1024px",
        "xl":  "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
