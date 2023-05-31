import type {
  SelectInputWithLabel,
  RadioInput,
} from "$lib/forms/ApplicationData";

///********************TIMES ***********/

export type Level = "初級" | "初中級" | "中級" | "上級" | "MTM";

export class GroupTimeSlot {
  start: string;
  end: string;
  levels: Level[];

  constructor(start: string, end: string, levels: Level[]) {
    this.start = start;
    this.end = end;
    this.levels = levels;
  }
}

export const 白山Schedule: GroupTimeSlot[] = [
  new GroupTimeSlot("9:00", "9:40", ["初中級", "上級", "中級", "MTM"]),
  new GroupTimeSlot("9:50", "10:30", ["初中級", "上級", "中級", "MTM"]),
  new GroupTimeSlot("10:40", "11:20", ["初中級", "上級", "中級", "MTM"]),
  new GroupTimeSlot("11:30", "12:10", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("12:15", "12:55", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("13:00", "13:40", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("13:50", "14:30", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("14:45", "15:25", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("15:35", "16:15", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("16:30", "17:10", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("17:20", "18:00", []),
  new GroupTimeSlot("18:15", "18:55", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
  new GroupTimeSlot("19:05", "19:45", [
    "初級",
    "初中級",
    "上級",
    "中級",
    "MTM",
  ]),
];

export const 川越Schedule: GroupTimeSlot[] = [
  new GroupTimeSlot("9:50", "10:30", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("10:40", "11:20", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("11:30", "12:10", []),
  new GroupTimeSlot("12:20", "13:00", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("13:10", "13:50", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("14:00", "14:40", []),
  new GroupTimeSlot("14:50", "15:30", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("15:40", "16:20", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("16:30", "17:10", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("17:20", "18:00", []),
  new GroupTimeSlot("18:10", "18:50", ["初中級", "初級", "MTM"]),
];

export const 板倉Schedule: GroupTimeSlot[] = [
  new GroupTimeSlot("9:30", "10:10", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("10:20", "11:00", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("11:10", "11:50", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("12:00", "12:40", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("12:40", "13:20", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("13:20", "14:00", []),
  new GroupTimeSlot("14:10", "14:50", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("15:00", "15:40", []),
  new GroupTimeSlot("15:50", "16:30", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("16:40", "17:20", ["初中級", "初級", "MTM"]),
  new GroupTimeSlot("17:40", "18:10", []),
  new GroupTimeSlot("18:20", "19:00", ["初中級", "初級", "MTM"]),
];

export const INIADSchedule: GroupTimeSlot[] = [
  new GroupTimeSlot("9:50", "10:30", ["中級", "MTM"]),
  new GroupTimeSlot("10:40", "11:20", ["中級", "MTM"]),
  new GroupTimeSlot("11:30", "12:10", []),
  new GroupTimeSlot("12:15", "12:55", ["中級", "MTM"]),
  new GroupTimeSlot("13:00", "13:40", []),
  new GroupTimeSlot("13:50", "14:30", ["中級", "MTM"]),
  new GroupTimeSlot("14:45", "15:25", ["中級", "MTM"]),
  new GroupTimeSlot("15:35", "16:15", ["中級", "MTM"]),
  new GroupTimeSlot("16:30", "17:10", ["中級", "MTM"]),
  new GroupTimeSlot("17:20", "18:00", []),
  new GroupTimeSlot("18:15", "18:55", ["中級", "MTM"]),
];

export const WELLBSchedule: GroupTimeSlot[] = [
  new GroupTimeSlot("9:50", "10:30", ["初級", "初中級", "MTM"]),
  new GroupTimeSlot("10:40", "11:20", []),
  new GroupTimeSlot("11:30", "12:10", ["初級", "中級", "MTM"]),
  new GroupTimeSlot("12:15", "12:55", ["初級", "初中級", "MTM"]),
  new GroupTimeSlot("13:00", "13:40", []),
  new GroupTimeSlot("13:50", "14:30", ["初級", "中級", "MTM"]),
  new GroupTimeSlot("14:45", "15:25", ["初級", "初中級", "MTM"]),
  new GroupTimeSlot("15:35", "16:15", ["初級", "中級", "MTM"]),
  new GroupTimeSlot("16:30", "17:10", ["初級", "初中級", "MTM"]),
  new GroupTimeSlot("17:20", "18:00", []),
  new GroupTimeSlot("18:15", "18:55", ["初級", "中級", "MTM"]),
];

const 白山Times: string[] = [
  "10:40 - 11:20",
  "11:30 - 12:10",
  "12:15 - 12:55",
  "13:00 - 13:40",
  "13:50 - 14:30",
  "14:45 - 15:25",
  "15:35 - 16:15",
  "16:30 - 17:10",
  "18:15 - 18:55",
  "19:05 - 19:45",
];

export const 第1Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第1希望",
  alt: "第1希望の入力",
  placeholder: "--第1希望を選択--",
  options: [],
  desc: [],
};

export const 第2Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第2希望",
  alt: "第2希望の入力",
  placeholder: "--第2希望を選択--",
  options: [],
  desc: [],
};

export const 第3Data: SelectInputWithLabel = {
  isNecessary: true,
  label: "第3希望",
  alt: "第3希望の入力",
  placeholder: "--第3希望を選択--",
  options: [],
  desc: [],
};

export const 変更Data: RadioInput = {
  isNecessary: true,
  label: "第４クォーターでの時間割変更の有無",
  alt: "時間割変更の有無の入力",
  choices: ["あり", "なし"],
  desc: [],
};
