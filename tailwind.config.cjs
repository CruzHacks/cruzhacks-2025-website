/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        royal: "#190CA6",
        imperial: "#071162",
        button: "#1795EB",
        chinese: "#3A65D7",
      },
      turquoise: "#13E4CA",
      gold: "#F9D318",
      orange: "#F9A318",
      "yellow-red": "#ECBC50",
      pink: "#E558F4",
      purple: {
        DEFAULT: "#8924F1",
        han: "#5B1FED",
      },
      white: "#D3DAF4",
      success: "#10B981",
      error: "#de3535",
      transparent: "transparent",
    },
    fontFamily: {
      title: ["StretchPro"],
      body: ["Proxima Nova", "Montserrat", ...defaultTheme.fontFamily.sans],
      sans: ["Proxima Nova", "Montserrat", ...defaultTheme.fontFamily.sans],
      subtext: ["Andale Mono", "Roboto Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      animation: {
        "bounce-slow": "bounce-sideways 8s infinite ease-in-out",
        twinkle: "wiggle 2s infinite ease-in-out",
        "twinkle-slow": "wiggle-slow 2s infinite ease-in-out",
      },
      keyframes: {
        "bounce-sideways": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-10%)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-8deg)",
          },
          "50%": {
            transform: "rotate(8deg)",
          },
        },
        "wiggle-slow": {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "33%": {
            transform: "rotate(8deg)",
          },
          "66%": {
            transform: "rotate(-8deg)",
          },
        },
      },
      screens: {
        "3xl": "140rem",
      },
      textShadow: {
        sm: "0 1px 2px #000",
        DEFAULT: "0 2px 4px #000",
        lg: "0 8px 16px #000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": value => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
  ],
}
