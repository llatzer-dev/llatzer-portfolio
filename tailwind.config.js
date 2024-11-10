/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "bungee-shade": "#FFBE28",
        "primary-black": "#000",
        "secondary-black": "#222",
        "tertiary-black": "#323232",
        "primary-white": "#fff",
        "secondary-white": "#a1a1aa",
        teja: "#7b3e33",
      },
      height: { 68: "17rem" },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #323232 0%, #C09638 25%, #FFBE28 50%, #C09638 75%, #323232 100%)",
        "text-gradient-light":
          "linear-gradient(90deg, #323232 0%, #7b3e33 25%, #7b3e33 50%, #7b3e33 75%, #323232 100%)",
      },
    },
  },
  plugins: [],
};
