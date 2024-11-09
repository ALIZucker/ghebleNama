/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize:{
        itemsText:"1.1042vw",
        titleText:"2.2222vw",
        textNormal:"1.1263vw",
        textNormal2:"24px",
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
