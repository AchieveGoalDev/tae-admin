import type { Textbook } from "$lib/data/textDefs";

export type Level = "初級" | "初中級" | "中級" | "上級";

export type Course = {
  createdBy: string;
  updateHistory: string[];
  createdOn: number;
  updatedOn: number;
  courseName: string;
  key: string;
  textbooks: Textbook[];
  isOnline: boolean;
  level: Level;
  type: string;
};

export type CourseFetch = { data: Course[] } | undefined;
