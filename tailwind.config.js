/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1a001a',
          100: '#250520',
          200: '#4a0940',
          300: '#700e5f',
          400: '#95127f',
          500: '#f142d7',
          600: '#e529c5',
          700: '#eb5ed4',
          800: '#f294e2',
          900: '#f8c9f1',
          950: '#fceaff',
        },
        secondary: {
          50: '#001f3f',
          100: '#03045E',
          200: '#023E8A',
          300: '#0077B6',
          400: '#0096C7',
          500: '#00B4D8',
          600: '#48CAE4',
          700: '#90E0EF',
          800: '#ADE8F4',
          900: '#CAF0F8',
          950: '#E0FBFF',
        }
      },
      fontFamily: {
        'dance': ['Inter', 'sans-serif'],
        'neutronic': ['Neutronic Compressed', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}

