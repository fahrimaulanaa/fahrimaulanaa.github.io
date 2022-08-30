/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'sedikit-ungu': '#5e65a1',
      },
    },
  },
  plugins: [require("daisyui")],
}
