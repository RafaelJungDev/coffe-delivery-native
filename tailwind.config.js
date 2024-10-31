/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B2995",
          100: "#EBE5F9",
          200: "#8047F8",
        },
        secondary: {
          DEFAULT: "#DBAC2C",
          200: "#C47F17",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#272221",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        bbold: ["Baloo2-Bold", "sans-serif"],
        bextrabold: ["Baloo2-ExtraBold", "sans-serif"],
        bmedium: ["Baloo2-Medium", "sans-serif"],
        bregular: ["Baloo2-Regular", "sans-serif"],
        bsemibold: ["Baloo2-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
