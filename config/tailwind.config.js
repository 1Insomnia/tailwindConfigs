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
      height: {
        // Screen
        "screen-offset": "calc(100vh - 60px)",
        "screen-1/2": "calc(100vh) / 2",
        "screen-1/3": "calc(100vh) / 3",
        "screen-2/3": "calc(100vh) * 2 / 3",

      },
      minHeight: {
        // Screen
        "screen-offset": "calc(100vh - 60px)",
        "screen-2/3": "calc(100vh) * 2 / 3",
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "200": "250px",
        "300": "300px",
        "300": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      maxHeight: {
        // Screen
        "screen-offset": "calc(100vh - 60px)",
        "screen-2/3": "calc(100vh) * 2 / 3",
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "200": "250px",
        "300": "300px",
        "300": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      width: {
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "200": "250px",
        "300": "300px",
        "300": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      minWidth: {
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "200": "250px",
        "300": "300px",
        "300": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      maxWidth: {
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "200": "250px",
        "300": "300px",
        "300": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      backgroundImage: {
        // Background image
        name: "url('/path/')",
        // Background image + filter
        name: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/path/')",
      },
    },
  },
  variants: {
    extend: {},
  },
};

