/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 rgba(168, 85, 247, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.7)' },
          '100%': { boxShadow: '0 0 0 rgba(168, 85, 247, 0.5)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

