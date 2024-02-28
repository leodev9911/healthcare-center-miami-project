/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      colors: {
        pageBlue: 'var(--page-blue)',
        pageWhite: 'var(--page-white)',
        pageGray: 'var(--page-gray)',
        pageFooterBlue: 'var(--page-footer-blue)',
        pageStarsGray: 'var(--page-stars-gray)',
        pageStarsGold: 'var(--page-stars-gold)',
      },      
    }
  },
  plugins: [],
}

