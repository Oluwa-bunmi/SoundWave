/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        pryblue: "#1762A7",
        darkGrey: "#B0AAAA",
        borderColor: "#1762A7",
      },
      backgroundImage: {
        pattern: "url('../src/assets/background.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
