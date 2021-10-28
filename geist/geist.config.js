const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  // Override default config
  theme: {
    colors: {
      foreground: "#000",
      background: "#fff",
      accents: {
        1: "#fafafa",
        2: "#eaeaea",
        3: "#999",
        4: "#888",
        5: "#666",
        6: "#444",
        7: "#333",
        8: "#111",
      },

      // Success
      success: {
        lighter: "#d3e5ff",
        light: "#3291ff",
        DEFAULT: "#0070f3",
        dark: "#0761d1",
      },

      // Error
      error: {
        lighter: "#f7d4d6",
        light: "#ff1a1a",
        DEFAULT: "#e00",
        dark: "#c50000",
      },

      // Warning
      warning: {
        lighter: "#ffefcf";
        light: "#f7b955",
        DEFAULT: "#f5a623",
        dark: "#ab570a",
      },

      // Violet
      violet: {
        lighter: "#e3d7fc",
        light: "#8a63d2",
        violet: "#7928ca,
      violet - dark: "#4c2889",
    },

    // Cyan
    cyan: {
      lighter: "#aaffec",
      light: "#79ffe1",
      DEFAULT: "#50e3c2",
      dark: "#29bc9b",
    },

    // Highlight
    highlight: {
      purple: "#f81ce5",
      magenta: "#eb367f",
      pink: "#ff0080",
      yellow: "#fff500",
    },
  }
    fontFamily: {
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
    serif: ["Spectral", ...defaultTheme.fontFamily.sans],
    mono: ["Roboto", ...defaultTheme.fontFamily.mono],
  },
  fontSize: {
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    30: "30px",
    36: "36px",
    48: "48px",
    64: "64px",
    128: "128px",
    164: "164px",
  },
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