/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
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
          default: '#BA9F32'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
