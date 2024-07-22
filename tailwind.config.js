/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders': ['Founders GroteskXcond', 'sans-serif'],
        'neue': ['Neue Montreal', 'sans-serif'],

      },
      colors: {
        customGray: '#F1F1F1',
      },
      letterSpacing: {
        'tighter-custom': '-0.04em', 
      },
    },
  },
  plugins: [],
}

