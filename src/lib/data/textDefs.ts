import type { Level } from "$lib/data/courseDefs";

export type Textbook = {
    name: string;
    level: Level;
    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updateHistory: string[];
}

