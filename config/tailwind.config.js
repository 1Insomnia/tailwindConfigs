const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  // Override default config
  theme: {
    fontFamily: {
      // Set sans-serif font
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      // Set serif font
      serif: ["Spectral", ...defaultTheme.fontFamily.sans],
      // Set mono font
      mono: ["Roboto", ...defaultTheme.fontFamily.mono],
    },
    // Font size to px over semantic
    fontSize: {
      64: "64px",
      128: "128px",
      164: "164px",
    },
    // Container centered + padding
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "20px",
        lg: "20px",
        xl: "20px",
        "2-xl": "20px",
      },
    },
    // Add to defautl config
    extend: {
      backgroundImage: {
        // Background image
        name: "url('/path/')",
        // Background image + filter
        name: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/path/')",
      },
    },
  },
};
