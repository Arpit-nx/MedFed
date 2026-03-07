/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',       // dark background
        border: '#334155',           // border color
        'muted-foreground': '#cbd5e1', // gray text
        primary: '#06b6d4',          // cyan color
      },
    },
  },
  plugins: [],
};