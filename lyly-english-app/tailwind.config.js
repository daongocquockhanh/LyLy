/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Much pinker pastel pink palette - everything is pink now!
        pastel: {
          50: '#fef2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f38a8a',
          500: '#ed6b6b',
          600: '#e04a4a',
          700: '#c73a3a',
          800: '#a52f2f',
          900: '#8a2a2a',
        },
        // Pinker cream accents - more pink tones
        cream: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f38a8a',
          500: '#ed6b6b',
          600: '#e04a4a',
          700: '#c73a3a',
          800: '#a52f2f',
          900: '#8a2a2a',
        },
        // Pink-tinted warm grays - everything has a pink undertone
        warm: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f38a8a',
          500: '#ed6b6b',
          600: '#e04a4a',
          700: '#c73a3a',
          800: '#a52f2f',
          900: '#8a2a2a',
        },
        // Pink-tinted soft blues - pink undertones
        softblue: {
          50: '#fef7f7',
          100: '#fdeeee',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f38a8a',
          500: '#ed6b6b',
          600: '#e04a4a',
          700: '#c73a3a',
          800: '#a52f2f',
          900: '#8a2a2a',
        },
        // Additional pink variations for more variety
        pinker: {
          50: '#fef2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b3b3',
          400: '#f38a8a',
          500: '#ed6b6b',
          600: '#e04a4a',
          700: '#c73a3a',
          800: '#a52f2f',
          900: '#8a2a2a',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'handwriting': ['Dancing Script', 'cursive'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'brush-stroke': "url(\"data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20C20 10 40 5 60 15C80 25 100 30 100 20C100 10 80 5 60 15C40 25 20 30 0 20Z' fill='%23ed6b6b' fill-opacity='0.8'/%3E%3C/svg%3E\")",
        'wavy-pattern': "url(\"data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30C30 20 60 10 90 20C120 30 120 40 90 50C60 60 30 50 0 40C-30 30 -30 20 0 30Z' fill='%23ed6b6b' fill-opacity='0.6'/%3E%3C/svg%3E\")",
        'pink-dots': "radial-gradient(circle, #ed6b6b 1px, transparent 1px)",
        'pink-blush': "radial-gradient(ellipse at center, #fde8e8 0%, transparent 70%)",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-out': 'slideOut 0.5s ease-in',
        'float': 'float 6s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 4s ease-in-out infinite',
        'pink-glow': 'pinkGlow 4s ease-in-out infinite',
        'pink-float': 'pinkFloat 8s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pinkGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(237, 107, 107, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(237, 107, 107, 0.6)' },
        },
        pinkFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(237, 107, 107, 0.15)',
        'gentle': '0 2px 15px rgba(237, 107, 107, 0.1)',
        'warm': '0 8px 25px rgba(228, 192, 107, 0.2)',
        'pink-glow': '0 0 20px rgba(237, 107, 107, 0.4)',
        'pink-soft': '0 8px 32px rgba(237, 107, 107, 0.25)',
        'pink-warm': '0 12px 40px rgba(237, 107, 107, 0.3)',
      }
    },
  },
  plugins: [],
}
