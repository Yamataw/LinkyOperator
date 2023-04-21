/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#84ad24",

          "secondary": "#f7bc91",

          "accent": "#1057d1",

          "neutral": "#191D24",

          "base-100": "#383348",

          "info": "#A5C9F3",

          "success": "#158E76",

          "warning": "#957F0E",

          "error": "#EE694F",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
