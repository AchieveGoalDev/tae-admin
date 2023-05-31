import { writable } from "svelte/store";

import { Personal } from "./data/personal";

export const student = writable(new Personal());

