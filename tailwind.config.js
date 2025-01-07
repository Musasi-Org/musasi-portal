/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game': ['Silkscreen', 'cursive'],
        'pixel': ['Rubik Glitch', 'cursive'],
      },
      colors: {
        'game-primary': '#FF4C29',
        'game-secondary': '#082032',
        'game-accent': '#2C394B',
      },
    },
  },
  plugins: [],
}