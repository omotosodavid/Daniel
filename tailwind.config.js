/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bottom|top)-[0-9]+/,
      variants: ['sm'], 
    },
    "left-8",
    "left-10",
    "flex-row-reverse",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
