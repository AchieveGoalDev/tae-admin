/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
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
