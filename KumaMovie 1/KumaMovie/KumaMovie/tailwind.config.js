/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-ocre': '#A79277',
        'primary-claro': '#FFF2E1'
      }
    },
  },
  plugins: [],
}