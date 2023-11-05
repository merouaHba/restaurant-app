/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-gold': '#A08040',
        'transparent-dark': '#101418B2'
      },
      colors: {
        'gold': '#FFCE6D',
        'white-yellow': '#ffc',
        'white-text': '#fffffc'
      },
      backgroundImage: {
        hero: 'url("/hero-bg.svg")',
        bg: 'url("/bg.svg")',
        'bg-gradient': 'linear-gradient(180deg, rgba(16, 20, 24, 0.00) 0%, #101418 100%);',
        leftImg: 'url("/leftimg.svg")',
        rightImg: 'url("/rightimg.svg")',
      },
      fontFamily: {
        dancing: ['"Dancing Script", cursive'],
      }

    },
  },
  plugins: [],
}

