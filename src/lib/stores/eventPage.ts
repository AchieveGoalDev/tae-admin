import { writable } from "svelte/store";
import type { GakugaiEvent } from "$lib/panel/events/eventDataTypes";

export type EventPageData = {
    gakuGaiEvents: GakugaiEvent[]
}