/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ys,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

