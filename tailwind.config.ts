import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05080d",
        graphite: "#0b1118",
        steel: "#111c22",
        frost: "#e8f1ee",
        electric: "#6ee7c8",
        cyanline: "#9ac7bd",
      },
      boxShadow: {
        aura: "0 0 46px rgba(110, 231, 200, 0.18)",
        glass: "0 24px 90px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        sans: ["Aptos", "Inter", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "Aptos Display",
          "Segoe UI Variable Display",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(110, 231, 200, 0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
