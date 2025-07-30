/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          light: '#f0d9b5',
          dark: '#b58863',
        }
      }
    },
  },
  plugins: [],
} 