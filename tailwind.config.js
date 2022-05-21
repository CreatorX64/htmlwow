module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Rubik", "sans-serif"],
        display: ["Modak", "cursive"]
      },
      boxShadow: {
        "inset-custom":
          "box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.16), inset 0px -2px 8px rgba(0, 0, 0, 0.12)"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
