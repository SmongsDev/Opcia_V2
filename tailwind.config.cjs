module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        fontblack: "var(--fontblack)",
        "gray-20": "var(--gray-20)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}