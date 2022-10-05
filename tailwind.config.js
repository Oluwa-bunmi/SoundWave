/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        pryblue: "#1762A7",
        darkGrey: "#B0AAAA",
      },
      backgroundImage: {
        'pattern': "url('../src/assets/background.svg')",
       
      },
    },
  },
  plugins: [],
};
