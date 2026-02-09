import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1a1a1a',      // Darker, almost black
          yellow: '#fbbf24',    // Strong yellow (amber-400)
          yellowHover: '#d97706',
          light: '#f3f4f6'
        }
      }
    },
  },
  plugins: [],
};

export default config;
