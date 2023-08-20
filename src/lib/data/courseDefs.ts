import type { Textbook } from "$lib/data/textDefs"

export type Level = "初級" | "初中級" |
    "中級" | "上級"

export type Course = {
    createdBy: string,
    updateHistory: string[],
    createdOn: Date,
    updatedOn: Date,
    courseName: string,
    courseId: string,
    textbook: Textbook,
    isOnline: boolean,
    level: Level,
    type: string,
}

