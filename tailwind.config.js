/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(236, 72, 153, 0.5)',
        'glow-lg': '0 0 25px rgba(236, 72, 153, 0.7)',
      },
    },
  },
  plugins: [],
}