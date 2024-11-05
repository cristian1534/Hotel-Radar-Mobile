/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          50: "#EBEBFF",
          100: "#D2D2FE",
          200: "#A6A4FE",
          300: "#7E7CFD",
          400: "#524FFD",
          500: "#2522FC",
          600: "#0703E2",
          700: "#0502AB",
          800: "#03026F",
          900: "#020137",
          950: "#01001E",
        },
        variants: {
          extend: {
            placeholderColor: ["dark"],
          },
        },
      },
    },
  },
}

