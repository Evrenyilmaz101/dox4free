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
        dark: {
          DEFAULT: '#000000',  // Pure black
          'gray-900': '#0a0a0a',  // Slightly lighter black
          'gray-800': '#121212',  // Dark gray
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'media',  // Use 'media' for automatic dark mode based on OS preference
} 