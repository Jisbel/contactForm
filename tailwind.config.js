/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // Primary

        Green200lighter: 'hsl(148, 38%, 91%)',
        Green600medium:' hsl(169, 82%, 27%)',
        Red: 'hsl(0, 66%, 54%)',
        
        // Neutral

        Grey500medium: 'hsl(186, 15%, 59%)',
        Grey900darker: 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        karla400: ['Karla400', 'serif'],
        karla700: ['Karla700', 'serif'],
      
      },
    },
  },
  plugins: [],
}