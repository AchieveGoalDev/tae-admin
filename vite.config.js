import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  //Remove the below for production build
  build: {
    sourcemap: false,
    minify: false,
  },
};

export default config;
