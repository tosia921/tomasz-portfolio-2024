// File: /app/tailwind.config.ts
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
