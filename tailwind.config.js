/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [],
};
