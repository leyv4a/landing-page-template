
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        colors: {
          background: "#FAFAFA", 
          foreground: 
           {
            50: "#000000",
            100: "#212121",
            200: "#424242",
            300: "#616161",
            400: "#757575",
            500: "#9E9E9E",
            600: "#BDBDBD",
            700: "#E0E0E0",
            800: "#EEEEEE",
            900: "#F5F5F5"
          },
        }, // light theme colors
      },
      dark: {
        colors: {
          background: "#030816", 
          foreground: {
            50: "#F5F5F5",
            100: "#EEEEEE",
            200: "#d6d6d6",
            300: "#BDBDBD",
            400: "#9E9E9E",
            500: "#757575",
            600: "#616161",
            700: "#424242",
            800: "#212121",
            900: "#000000"
          }
        }, // dark theme colors
      },
      // ... custom themes
    },
  })],
}

