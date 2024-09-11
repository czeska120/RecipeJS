import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        text: "#0d0707",
        background: "#fcf9f9",
        primary: "#d25a4e",
        primary_bg: "#ffe1de",
        secondary: "#d5e28a",
        accent: "#96b97b",
      },
    },
  },
  plugins: [],
};
export default config;
