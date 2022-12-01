/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#f59e0b',
        'accent': '#84cc16',
        'success': '#22c55e',
        'warning': '#f43f5e',
        'dark': '#202125',
      },
    },
  },
  plugins: [require("daisyui")],
}
