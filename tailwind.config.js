/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
      colors: {
        onyx: '#0a0a0a',
        charcoal: '#1c1c1c',
        bronze: {
          DEFAULT: '#C5A059',
          light: '#E5CFA0',
          dark: '#8c6b30',
          500: '#C5A059',
        },
        alabaster: '#F5F5F5',
        concrete: '#e5e5e5',
      },
      letterSpacing: {
        'ultra': '0.25em',
        'tighter': '-0.05em',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}