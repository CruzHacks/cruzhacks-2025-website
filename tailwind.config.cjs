/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {

      //ADD NEW THEME COLORS HERE ====================
      dark_orange: "#C04321",
      deep_orange: "#E9603A",
      medium_orange: "#F3903F",
      medium_yellow: "#FDCA0F",
      bright_yellow: "#FFF33B",

      off_white: "#FFEDE0",

      sponsor_dark_orange: "#F38D3F",
      sponsor_medium_orange: "#F2873F",
      sponsor_light_orange: "#F9B047",
      beach_light_yellow: "#F0C776",

      beach_yellow: "#F7F3B0",
      beach_darksand: "#F0C776",

      app_bar_orange: "#CF4F2C",

      ocean_medium_light_blue: "#4087C6",

      dark_pink: "#A92545",
      light_pink: "#DB6783",

      teal_blue: "#56B9B7",
      teal_green: "#3FC28B",
      
      ocean_medium_dark_blue: "#005EA5",
      text_white: "#FFFCE8",
      //==============================================


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
      white: "#FFEDE0",
      black: "#000000",
      gray: "#F0F0F0",
      darkgray: "#5F5F5F",
      success: "#10B981",
      error: "#C04321",
      transparent: "transparent",
    },
    fontFamily: {
      title: ["Madimi One", ...defaultTheme.fontFamily.sans],
      body: ["Montserrat", ...defaultTheme.fontFamily.sans],
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      sub: ["Roboto Mono", ...defaultTheme.fontFamily.mono],

      //NEW THEME FONTS =================================
      heading: ["Madimi One", ...defaultTheme.fontFamily.sans],
      subtext: ["Monda", ...defaultTheme.fontFamily.sans],
      //=================================================
    },
    extend: {
      animation: {
        "bounce-slow": "bounce-sideways 8s infinite ease-in-out",
        twinkle: "wiggle 2s infinite ease-in-out",
        "twinkle-slow": "wiggle-slow 2s infinite ease-in-out",
      },
      backgroundImage: {
        "background-gradient":
          'linear-gradient(to bottom, #E9603A, #F7F3B0, #4087C6)',
        "milestones-gradient":
          'linear-gradient(to bottom, #56B9B7, #3FC28B)',
        "prizetracks-gradient":
          'linear-gradient(to bottom, #FF6767, #FFA962)',
        'sunset-gradient': 
          'linear-gradient(to bottom, #E9603A, #ED683C, #F3903F, #FEE62D, #FFF33B)',
        'portal-gradient':
          'linear-gradient(to bottom, #F3903F, #F3903F, #FFF33B)',
        'support-gradient':
          'linear-gradient(to bottom, #69A3FF, #E9705B)',
        // NEW THEME GRADIENTS =================================
          'yellow-gradient': 'linear-gradient(180deg, #F7F3B0 71%, #F0C776 100%)',
          'ocean-gradient':
          'linear-gradient(180deg, #005EA5, #0466AB, #0F7CBC, #219FD9, #27AAE1, #357EAF, #2F5F95)',
        //======================================================
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
      fontSize: {
        '7xl': '5rem',
        '5.5xl': '3.5rem',

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
