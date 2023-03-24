/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
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
