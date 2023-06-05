import { writable } from "svelte/store";

export type interfaceData = {
  showNav: boolean;
};

//TODO add profile image path
//TODO add enumerator for titles
//TODO add user settings

const defaultState: interfaceData = {
  showNav: true,
};

export const interfaceState = writable(defaultState);
