import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0f4f3d",
        emeraldDeep: "#063f35",
        saffron: "#f59e0b",
        sunset: "#f97316",
        navyInk: "#082032",
        cream: "#fff7ed",
        river: "#0e7490",
        royal: "#0284c7",
        charcoal: "#111827",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(8, 32, 50, 0.16)",
        glow: "0 22px 60px rgba(14, 116, 144, 0.22)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
