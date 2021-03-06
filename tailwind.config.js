/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    fontFamily: {
      serif: ['ltc-bodoni-175', 'serif'],
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif'
      ]
    },
    extend: {
      width: {
        '1/8': '12.5%',
        '1/13': '7.692307692%'
      },
      colors: {
        ocher: {
          default: '#897525' // '#BA9F32' was not AA compliant
        }
      },
      maxHeight: {
        '40': '40vh',
        '50': '50vh',
        '60': '60vh',
        '70': '70vh'
      },
      minHeight: {
        '101': '101vh'
      },
      maxWidth: {
        auto: 'auto',
        noe: 'none',
        '40': '40vw',
        '50': '50vw',
        '60': '60vw'
      }
    }
  },
  variants: {},
  plugins: []
}
