module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "25%": "25%", // p-80% - should work
      },
      colors: {
        custom: {
          "custom-001": "#2F3061",
        },
      },
    },
  },
  plugins: [],
};
