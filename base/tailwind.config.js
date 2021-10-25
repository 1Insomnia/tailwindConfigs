module.exports = {
  purge: [],
  //   purge: [
  //   './components/**/*.{vue,js}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './plugins/**/*.{js,ts}',
  //   './nuxt.config.{js,ts}',
  // ],
  darkMode: false, // or 'media' or 'class'
  // Override default config
  theme: {
    // Font size to px over semantic
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
      // Max width
      maxWidth: {},
      // Max Height
      maxHeight: {},
      // Min Height
      minHeight: {
        "screen-full": "calc(100vh - 60px)",
        "screen-1/2": "50vh",
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
