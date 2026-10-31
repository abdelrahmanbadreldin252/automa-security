import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        automa: {
          bg: "#050705",
          secondaryBg: "#0A100C",
          card: "#0D1510",
          green: "#00FF88",
          secondaryGreen: "#00CC66",
          darkGreen: "#003D25",
          text: "#F5FFF8",
          muted: "#9BAAA1",
          border: "rgba(0, 255, 136, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        "cyber-sm": "0 0 20px -5px rgba(0, 255, 136, 0.18)",
        "cyber-md": "0 0 35px -8px rgba(0, 255, 136, 0.28)",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(to right, rgba(0, 255, 136, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 136, 0.05) 1px, transparent 1px)",
        "radial-emerald":
          "radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.12), transparent 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
