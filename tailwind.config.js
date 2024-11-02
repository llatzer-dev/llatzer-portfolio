/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "bungee-shade": "#FFBE28",
      },
      height: { 68: "17rem" },
    },
  },
  plugins: [],
};
