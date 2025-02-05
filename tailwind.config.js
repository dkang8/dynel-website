/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#134E4A', // Deep teal
          dark: '#042f2e',    // Darker teal
          light: '#2dd4bf',   // Lighter teal for accents
        },
        secondary: {
          DEFAULT: '#64748b',
          dark: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

