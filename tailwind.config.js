/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      color:{
        'white' : '#FDFFFF',
        'CelestianBlue' : '#20A4F3',
        'Zaffre' : '#0D21A1',
        'EerieBlack' : '#242423',
        'Jet' : '#333533'
      }
    }
  },
  plugins: [],
}