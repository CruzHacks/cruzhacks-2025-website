/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

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
  },
  plugins: [require("@tailwindcss/forms")],
}
