/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        'green': {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125"
        }
      },
    },
  },
  plugins: [],
}
