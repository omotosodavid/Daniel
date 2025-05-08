/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  safelist: [
    'w-[530px]', 'w-[525px]', 'w-[520px]',
    'h-[380px]', 'h-[370px]', 'h-[390px]',
    'rotate-[-8deg]', 'rotate-[10deg]', 'rotate-[-7deg]', 'rotate-[7deg]',
    'bottom-8', 'bottom-12', 'bottom-16',
    'left-7', 'left-8', 'left-10',
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
};