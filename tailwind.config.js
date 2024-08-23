/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#BDD4EF",
        "primary-red": "#D32E2E",
        yellow: "#F18E1A",
        "black": "#000000",
        "white": "#FFFFFF",
        "grey": "#E0E0E0",
        "dark-grey": "#333333",
        "beige": '#f3efd9',
        "gray":' #0b171b',
        "lightsteelblue": '#bdd4ef',
        "darkorange": {
          "100": '#f49321',
          "200":' #f18e1a'
        },
        "ivory": '#fffcea',
        "tomato":' #ff3939',
        "white": '#fff',
        "cornflowerblue": '#70aaef',
        "gainsboro": '#e0e0e0',
      },
    },
    fontFamily: {
      averia: ["'Averia Serif Libre'", "serif"],
      poppins: ["'Poppins'", "sans-serif"],
      "noto": "'Noto Serif'",
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    "borderRadius": {
      "81xl": "100px"
    },
    "fontSize": {
      "5xl": "24px",
      "inherit": "inherit"
    }
  },
  plugins: [],
}

