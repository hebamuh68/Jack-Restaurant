/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*html"],
  theme: {
    extend: {
      fontFamily: {
        Cardo: ["Cardo"],
        Yantramanav: ["Yantramanav"],
      },
      colors: {
        "orange": "#fd7e14",
      },
    },
  },
  plugins: [],
};

