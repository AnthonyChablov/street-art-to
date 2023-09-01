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
        'empire': ['Empire', 'sans-serif']
      },
      borderRadius: {
        extraLarge: '12rem'
      },
      screens: {
        'xxs' : '300px',
        'xs' : '400px',
        'sm': '640px',    // Small screens and up
        'md': '768px',    // Medium screens and up
        'lg': '1024px',   // Large screens and up
        'xl': '1280px',   // Extra large screens and up
        '2xl': '1536px',  // 2x extra large screens and up
      },
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
  plugins: [],
}
