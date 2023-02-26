/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito"],
      },

      width: {
        90: "90%",
      },

      height: {
        "85vh": "90vh",
        85: "85px",
      },

      maxWidth: {
        275: "275px",
      },

      colors: {
        brandColor: "#F78B00",
        bgTransparent: "rgba(142, 144, 142, 0.9)",
        boxTransparentBlack: "rgba(167, 158, 154, 0.64)",
        boxTransparent: "rgba(235, 133, 0, 1)",
      },

      screens: {
        mobile: { max: "767px" },
        sidebar: { min: "767px", max: "1023px" },
      },

      boxShadow: {
        sidebarShadow: "5px 0px 5px rgb(0 0 0 / 0.1)",
      },

      gridTemplateColumns: {
        homeScreen: "275px 1fr",
      },
    },
  },
  plugins: [],
};
