/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "space-dark": "#070B14",
        "space-darker": "#030712",
        "space-card": "#111827",

        // Text
        "space-light": "#E5E7EB",
        "space-muted": "#9CA3AF",

        // Accent colors
        "space-accent": "#8B5CF6",
        "space-pink": "#EC4899",
        "space-cyan": "#22D3EE",
        "space-gold": "#FBBF24",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        exo: ["Exo 2", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 25px rgba(139, 92, 246, 0.35)",
      },

      backgroundImage: {
        "space-gradient":
          "linear-gradient(to bottom right, #070B14, #111827, #1E1B4B)",
      },
    },
  },
  plugins: [],
};
