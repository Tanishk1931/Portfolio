/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#0a0a0a',
        accent: {
          DEFAULT: '#00f3ff', // Neon Cyan
          glow: 'rgba(0, 243, 255, 0.5)',
        },
        text: {
          primary: '#e2e8f0', // Soft white
          secondary: '#94a3b8', // Muted slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You might want to add a font link in index.html later
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 243, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
