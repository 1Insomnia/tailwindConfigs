// Import default theme
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  fontFamily: {
    // Set sans-serif font
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
    // Set serif font
    serif: ["Spectral", ...defaultTheme.fontFamily.sans],
    // Set mono font
    mono: ["Roboto", ...defaultTheme.fontFamily.mono],
  },
};
