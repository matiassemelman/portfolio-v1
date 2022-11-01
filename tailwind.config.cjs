/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#222831",
        "lightGray": "#393E46",
        "orange": "#D65A31",
      }
    },
  },
  plugins: [],
}
