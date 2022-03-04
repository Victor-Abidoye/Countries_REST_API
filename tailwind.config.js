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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
