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
        electric: "#1688ff",
        cyanline: "#5ed5ff",
      },
      boxShadow: {
        aura: "0 0 80px rgba(22, 136, 255, 0.28)",
        glass: "0 24px 90px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 198, 255, 0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
