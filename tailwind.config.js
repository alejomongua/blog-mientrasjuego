module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.js',
    './gatsby-config.js',
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
