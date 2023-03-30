/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'graffittiImg': "url('./public/images/graffitti-img-1.png')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'empire' : ['Empire' , 'sans-serif']
      },
      borderRadius: {
        extraLarge: '12rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
  },
  plugins: [
    
  ],
}