import { writable } from "svelte/store";

export type TabData = {
  [key: string]: any;
  student: string;
  event: string;
  campus: string;
  teacher: string;
  class: string;
  report: string;
};

export type InterfaceData = {
  showNav: boolean;
  tab: TabData;
  page: string;
};

//TODO add profile image path
//TODO add enumerator for titles
//TODO add user settings

const defaultTabs: TabData = {
  student: "default",
  event: "default",
  campus: "default",
  teacher: "default",
  class: "default",
  report: "default",
};

const defaultState: InterfaceData = {
  showNav: true,
  tab: defaultTabs,
  page: "student",
};

export const interfaceState = writable(defaultState);
