/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        beige: '#F0EFD6',
        persian: "#8b1e3f",
        sand: "#f2d1b3",
        sandContrast: "#1C2934",
        tiffany: "#B1DAC8",
        turquoise: "#72C4B9",
        turContrast: "#1c0f38",
        payne: "#455A64",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], 
      },
      screens: {
        'xs': '480px',   // Celulares
        'sm': '640px',   // Breakpoint existente de Tailwind (puedes sobrescribirlo)
        'md': '768px',   // Breakpoint existente
        'lg': '1024px',  // Breakpoint existente
        'xl': '1280px',  // Breakpoint existente
        '2xl': '1440px', // Breakpoint personalizado para pantallas más grandes
      },
      boxShadow: {
        "persianShadow": "0px 0px 10px rgba( 134, 43, 53, 0.5)",
      },
      utilities: {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [],
}

