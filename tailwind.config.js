/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtreeExtrabold: ["FigtreeExtraBold", "impact"],
        figtreeMedium: ["FigtreeMedium", "impact"],
      },
      colors: {
        gray: {
          950: "#111111",
          500: "#6B6B6B",
        },
        primary: "#F4D04E",
        white: "#FFFFFF",
      },
      spacing: {
        300: "24px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
      dropShadow: {
        primary: "8px 8px 0px rgba(0, 0, 0, 1)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
