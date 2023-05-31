import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const formData = writable(browser && sessionStorage.getItem("formdata"));

formData.subscribe((val) => {
  if (browser) {
    console.log("storing", val);
    //@ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'string'
    sessionStorage.setItem("formdata", val);
  }
});
