/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const twilight = {
  50: '#f8f6f9',
  100: '#f3eff4',
  200: '#e9e0ea',
  300: '#decedf',
  400: '#c2a3c3',
  500: '#ad86ae',
  600: '#976b96',
  700: '#7f577d',
  800: '#6a4a67',
  900: '#5a4158',
  950: '#342333',
}

const blossom = {
  50: '#faf6f6',
  100: '#f5ebeb',
  200: '#eedada',
  300: '#d9afaf',
  400: '#ce9b9b',
  500: '#ba7979',
  600: '#a45e5e',
  700: '#884d4d',
  800: '#724242',
  900: '#613b3b',
  950: '#331c1c',
}

module.exports = {
  content: [
    './content/**/*.{html,md}',
    './assets/**/*.{html,md}',
    './data/**/*.{yaml,yml}',
    './themes/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        primary: twilight,
        twitterblue: '#1da1f2',
        facebookblue: '#4267b2',
        instagrampurple: '#c13584',
        whatsappgreen: '#25d366',
        youtubered: '#ff0000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
