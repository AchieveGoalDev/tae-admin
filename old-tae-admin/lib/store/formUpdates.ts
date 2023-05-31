import { writable } from "svelte/store";

export const triggerCampusUpdate = writable(false);
export const triggerCourseUpdate = writable(false);
export const triggerLevelUpdate = writable(false);
