/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        keyframes: {
          wave: {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(-20px)' },
          },
        },
        animation: {
          wave: 'wave 8s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  
  