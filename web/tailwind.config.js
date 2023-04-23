/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'courier': ['Courier', 'monospace'],
      },
      colors: {
        primary: '#3f0215',//'#6E2E42',
        secondary: '#FF6969',
        background: '#FFE7E8', //'#FFE8E8',//'#F4BDBD',//'#F3E2E6',//'#FFF9DE',////
        background_secondary: '#EBC4C4',//'#FFD3B0',
        message_gray: '#ece4ec',//'#f4f4fa'
        cursor_gray: '#524444'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "transparent"
          }
        }
      },
      animation: {
        typing: "typing 3s steps(30) infinite alternate, blink .7s infinite"
      }
    },

  },
  plugins: [],
}
