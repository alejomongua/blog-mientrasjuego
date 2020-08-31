module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        green: '#5dc21e',
      },
      opacity: {
        '95': '0.95',
      },
    },
  },
  variants: {},
  plugins: [],
}
