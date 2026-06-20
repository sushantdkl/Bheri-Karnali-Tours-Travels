import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0f4f3d",
        emeraldDeep: "#063f35",
        saffron: "#f28c28",
        sunset: "#ef5b2a",
        navyInk: "#102033",
        cream: "#fff7ea",
        river: "#1aa7a1",
      },
      boxShadow: {
        premium: "0 22px 60px rgba(16, 32, 51, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
