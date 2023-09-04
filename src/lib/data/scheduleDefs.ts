import type { Course } from "./courseDefs";

export type Class = {
  createdBy: string;
  updateHistory: string[];
  createdOn: number;
  updatedOn: number;
  course: Course;
  teacher: string;
  campus: string;
  key: string;
  studentMax: string;
  studentCurrent: string;
  students: [];
};

export type TimeSlot = {
  createdBy: string;
  updateHistory: string[];
  createdOn: number;
  updatedOn: number;
  campus: string;
  start: string;
  end: string;
  order: number;
  period: string;
  classes: string[];
};

export type TimeSlotFetch = { data: TimeSlot[] } | undefined;
