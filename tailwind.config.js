/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
      },
      colors: {
        black: "#1f1f1f",
        gray: "#cbd5e1",
        red: "#ff0000",
      },
    },
  },
  plugins: [],
};
