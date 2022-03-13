module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prudent: {
          100: "#2B3945",
          200: "#202C37",
        },
        little: {
          100: "#FFFFFF",
          200: "#FAFAFA",
        },
      },
      gridTemplateColumns: {
        count4: "repeat(4, max-content)",
        count3: "repeat(3, max-content)",
        count2: "repeat(2, max-content)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
