

module.exports = {
  mode: 'jit',
  darkMode: false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}