/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fafafa",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      darkpurple: "#370146",
      purplepink: "#890571",
      darkpink: "#d1068c",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray_dark: "#273444",
      gray: "#8492a6",
      gray_light: "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        "2xs": ".625rem",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
    },
  },
};
