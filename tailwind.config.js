/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url(./src/assets/bg/desktop.svg)",
        'mobile':"url(./src/assets/bg/mobile.svg)",
        'tablet':"url(./src/assets/bg/tablet-pattern.svg)",
      },
      colors: {
        /*  ### Primary */
        'Bright-Red': "hsl(12, 88%, 59%)",
        'Dark-Blue': "hsl(228, 39%, 23%)",
        /* ### Neutral */
        'Dark-Grayish-Blue': "hsl(227, 12%, 61%)",
        'Very-Dark-Blue': "hsl(233, 12%, 13%)",
        'Very-Pale-Red': "hsl(13, 100%, 96%)",
        'Vary-Light-Gray': "hsl(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}