/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      textColor:{
        textheader:"rgba(117, 117, 117, 1)",
        textHeaderTwo:"#663fbf",
      },
      backgroundColor:{
        botenOne:"#69d87e",
        botenTwo:"#663fbf",
      }
    },
  },
  plugins: [],
}
