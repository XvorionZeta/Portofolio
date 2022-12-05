/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'svg': "url('/svg/liquid-cheese.svg')",
      },
    },
  },
  plugins: [],
}
