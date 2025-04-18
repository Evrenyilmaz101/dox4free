/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B0082',  // Deep purple
          dark: '#2B0057',
        },
        secondary: {
          DEFAULT: '#00008B',  // Dark blue
          dark: '#000066',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 