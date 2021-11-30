const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [     './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'center-bottom': 'center bottom'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      violet: colors.violet,
      pink: colors.pink,
      indigo: colors.indigo,
    },
    extend: {
      backgroundImage: {
        // 'front-banner': "url('./src/assets/banner/01.jpg')"
      }
    },
  },
  variants: {

    extend: {},
  },
  plugins: [

  ],
}
