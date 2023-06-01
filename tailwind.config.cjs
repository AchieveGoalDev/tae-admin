/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontSize: {
      '2xs': "0.579rem",
      xs: "0.694rem",
      sm: "0.833rem",
      base: "1rem",
      lg: "1.2rem",
      xl: "1.44rem",
      '2xl': "1.728rem",
      '3xl': "2.074rem",
      '4xl': "2.488rem",
      '5xl': "2.986rem",
      '6xl': "3.583rem"
    },
    extend: {
      colors: {
        primary: {
          ultralight: "#bbd2ff",
          light: "#90a8e4",
          medium: "#6780b9",
          dark: "#3e5a8f",
          ultradark: "#0e3768"
        },
        secondary: {
          ultralight: "#f8f5d3",
          light: "#f4efb5",
          medium: "#f0e996",
          dark: "#ece376",
          ultradark: "#e8dc54"
        },
        neutral: {
          ultralight: "",
          light: "",
          medium: "",
          dark: "#555555",
        }
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
