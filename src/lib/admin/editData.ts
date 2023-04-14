import { writable } from "svelte/store";

import { Personal } from "./data/application";

export const student = writable(new Personal());
