import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      colors: {
        sand: {
          50: "#FAF7F2",
          100: "#F4EFE6",
          200: "#E8DFCF",
          300: "#DCcfB8",
          400: "#C8B699",
          500: "#B29C7A",
          600: "#917C5B",
          700: "#6F5E44",
          800: "#4B402F",
          900: "#2B241A",
        },
        espresso: {
          950: "#0D0B0A",
          900: "#141210",
          850: "#1A1714",
          800: "#221E1A",
          700: "#2D2823",
          600: "#3D3730",
          500: "#554D44",
          400: "#756B60",
        },
        sage: {
          50: "#F5F7F4",
          100: "#E5EBE3",
          300: "#AFC0AA",
          500: "#7B8E74",
          700: "#52624C",
          800: "#384334",
        },
        champagne: {
          100: "#F7F2E8",
          200: "#EEDFCA",
          300: "#DFC5A2",
          400: "#CCA777",
          500: "#BA8E53",
          600: "#9B723C",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
