/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GT_Walsheim_Pro': ['GT Walsheim Pro', 'sans-serif'],
      },
      screens: {
        'max-sm': { 'max': '475px' }, // Custom breakpoint for max-width 475px
      },
    },
  },
  plugins: [],
}
