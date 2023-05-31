import { writable } from "svelte/store";

import { campus } from "$lib/store/schoolSubform";

type CampusCourse = "MTM" | "GROUP";
type GroupLevel = "初級" | "初中級" | "中級" | "上級";

type CampusOfferings = {
  name: string;
  courses: CampusCourse[];
  levels: GroupLevel[];
};

const 白山: CampusOfferings = {
  name: "白山",
  courses: ["MTM", "GROUP"],
  levels: ["初級", "初中級", "中級", "上級"],
};

const 川越: CampusOfferings = {
  name: "川越",
  courses: ["MTM", "GROUP"],
  levels: ["初級", "初中級"],
};

const 板倉: CampusOfferings = {
  name: "板倉",
  courses: ["MTM", "GROUP"],
  levels: ["初級", "初中級"],
};

const INIAD: CampusOfferings = {
  name: "INIAD",
  courses: ["MTM", "GROUP"],
  levels: ["中級"],
};

const WELLB: CampusOfferings = {
  name: "WELLB",
  courses: ["MTM", "GROUP"],
  levels: ["初級", "初中級", "中級"],
};

const campuses = [白山, 川越, 板倉, WELLB, INIAD];

function handleCourseName(course: string) {
  if (course === "MTM") {
    return "マンツーマンレッスン";
  } else if (course === "GROUP") {
    return "グループレッスン";
  }
}
