/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#059669",
          medium: "#047857",
          dark: "#065f46",
        },
        secondary: {
          light: "#2563eb",
          medium: "#1d4ed8",
          dark: "#1e40af",
        },
      },
      backgroundImage: {
        hero: "url(/hero.jpg)",
        michelle: "url(/michelle.png)",
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
