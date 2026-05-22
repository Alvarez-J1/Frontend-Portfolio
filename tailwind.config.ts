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
        steel: "#111c27",
        frost: "#d9ecff",
        electric: "#72f0bd",
        cyanline: "#f2c66d",
      },
      boxShadow: {
        aura: "0 0 70px rgba(114, 240, 189, 0.24)",
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
          "radial-gradient(circle at 1px 1px, rgba(114, 240, 189, 0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
