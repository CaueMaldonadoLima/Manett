import { palette } from './src/styles/colors';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        mono: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
