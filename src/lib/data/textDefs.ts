import type { Level } from "$lib/data/courseDefs";

export type Textbook = {
    title: string | null;
    level: Level | null;
    key: string | null;
    createdOn: number;
    updatedOn: number;
    createdBy: string;
    updateHistory: string[];
}

export type TextbookFetch = { data: Textbook[] } | undefined