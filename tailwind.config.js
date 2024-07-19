const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pry: "#2563eb", 
        pryHover: "#3b82f6", 
        sec: "#FFA500",     
        text: "#333333",       
      },
      sizes: {
        '4': ""
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          'scrollbar-width': 'none',  /* Firefox */
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none',  /* Safari and Chrome */
        },
      }
      addUtilities(newUtilities)
    },
    
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
