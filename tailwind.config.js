/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
