module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto'
      },
      colors: {
        'header': '#413D3D',
        'form' : "#797878",
        'primary': '#27B352',
        'ash': '#E2E2E2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
