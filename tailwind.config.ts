import type { Config } from "tailwindcss";

// In Tailwind v4, custom colors/fonts/shadows are defined via @theme in globals.css.
// This file only needs to specify content paths.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
