/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        beige: '#F0EFD6',
        sand: "#f2d1b3",
        tiffany: "#B1DAC8",
        turquoise: "#72C4B9",
        payne: "#455A64",
        persian: "#BF4341",
      },
      screens: {
        'xs': '480px',   // Celulares
        'sm': '640px',   // Breakpoint existente de Tailwind (puedes sobrescribirlo)
        'md': '768px',   // Breakpoint existente
        'lg': '1024px',  // Breakpoint existente
        'xl': '1280px',  // Breakpoint existente
        '2xl': '1440px', // Breakpoint personalizado para pantallas más grandes
      },
      animation: {
      },
      keyframes: {
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

