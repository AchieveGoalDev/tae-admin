/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontSize: {
      "2xs": "0.579rem",
      xs: "0.694rem",
      sm: "0.833rem",
      base: "1rem",
      lg: "1.2rem",
      xl: "1.44rem",
      "2xl": "1.728rem",
      "3xl": "2.074rem",
      "4xl": "2.488rem",
      "5xl": "2.986rem",
      "6xl": "3.583rem",
    },
    extend: {
      colors: {
        primary: {
          ultralight: "#ABCBD8",
          light: "#81B1C5",
          medium: "#4B88A2",
          dark: "#3A697E",
          ultradark: "#2D5162",
        },
        secondary: {
          ultralight: "#FA9EAA",
          light: "#F53D56",
          medium: "#BB0A21",
          dark: "#9B081C",
          ultradark: "#610511",
        },
        neutral: {
          ultralight: "#F8F6F1",
          light: "#F2EEE3",
          medium: "#E9E2D0",
          dark: "#E5DDC8",
          ultradark: "#DED4BA",
        },
        dark: {
          ultralight: "#3B3D40",
          light: "#313335",
          medium: "#252627",
          dark: "#1E1F20",
          ultradark: "#141415",
        },
      },
      width: {
        md: "768px",
        lg: "1080px",
        xl: "1600px",
        xxl: "2000px",
        cardsmall: "275px",
        cardmed: "350px",
      },
    },
  },
  plugins: [],
};
