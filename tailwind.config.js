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
      height: {
        68: "17rem",
        50: "12.5rem",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #0E0E0E 0%, #FFBE28 25%, #FFBE28 50%, #FFBE28 75%, #0E0E0E 100%)",
        "text-gradient-light":
          "linear-gradient(90deg, #FFF8E4 0%, #7b3e33 25%, #7b3e33 50%, #7b3e33 75%, #FFF8E4 100%)",
      },
    },
  },
  plugins: [],
};
