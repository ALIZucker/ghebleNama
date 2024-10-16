/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize:{
        itemsText:"16px",
        titleText:"32px",
        textNormal:"20px",
        textNormal2:"24px"
      },
      textColor:{
        textheader:"rgba(117, 117, 117, 1)",
        textHeaderTwo:"#663fbf", botenOne:"#69d87e"
      },
      backgroundColor:{
        boackmain:"#f9f9f9",
        newColor:"#eae6f3",
        botenOne:"#69d87e",
        botenTwo:"#663fbf",
        colorPerpel:"#c4b5e6"
      }
    },
  },
  plugins: [],
}
