import type { SelectInput, ImageSelectInput } from "../ApplicationData";
import { ImageArrayItem } from "../ApplicationData";

export type Campus = {
  name: string;
  group: string[];
  mtm: string[];
};

// ************CAMPUS DATA ************/

export const 川越: Campus = {
  name: "川越",
  group: ["初級コース(TOEIC～350)", "初中級コース(TOEIC 350～450)"],
  mtm: [],
};

export const 板倉: Campus = {
  name: "板倉",
  group: ["初級コース(TOEIC～350)", "初中級コース(TOEIC 350～450)"],
  mtm: [],
};

export const WELLB: Campus = {
  name: "WELLB",
  group: [
    "初級コース(TOEIC～350)",
    "初中級コース(TOEIC 350～450)",
    "中級コース (TOEIC 450～)",
  ],
  mtm: [],
};

export const INIAD: Campus = {
  name: "INIAD",
  group: ["中級コース (TOEIC 450～)"],
  mtm: [],
};

export const 白山: Campus = {
  name: "白山",
  group: [
    "初級コース(TOEIC～350)",
    "初中級コース(TOEIC 350～450)",
    "中級コース (TOEIC 450～)",
  ],
  mtm: ["平日講座", "土曜日講座"],
};

export const オンライン: Campus = {
  name: "オンライン",
  group: [],
  mtm: ["平日講座", "土曜日講座"],
};

export const campuses: Campus[] = [川越, 板倉, WELLB, INIAD, 白山, オンライン];

//********************SELECT INPUT DATA *********/

export const levelSelector: SelectInput = {
  placeholder: "--レベルを選択--",
  options: [
    "初級コース　（TOEIC～395）",
    "中級コース　（TOEIC 400～585）",
    "上級コース　（TOEIC 590～）",
  ],
};

export const courseSelector: SelectInput = {
  placeholder: "--講座スタイルを選択--",
  options: ["グループレッスン", "マンツーマンレッスン"],
};

export const mtmSelector: SelectInput = {
  placeholder: "--講座スタイルを選択--",
  options: [
    "平日講座　マンツーマンレッスン",
    "土曜日講座　マンツーマンレッスン",
  ],
};

//*********************IMAGE SELECT INPUT DATA *********/

export const campusSelector: ImageSelectInput = {
  placeholder: "--キャンパスを選択--",
  isNecessary: true,
  options: campuses.map((campus) => campus.name),
  images: [
    new ImageArrayItem("images/images/Unselected.webp", "未選択", "未選択"),
    new ImageArrayItem("images/images/INIAD.webp", "INIAD", "INIAD"),
    new ImageArrayItem("images/images/WELLB.webp", "WELLB", "WELLB"),
    new ImageArrayItem("images/images/HAKUSAN.webp", "白山", "白山"),
    new ImageArrayItem("images/images/ITAKURA.webp", "板倉", "板倉"),
    new ImageArrayItem("images/images/ONLINE.webp", "オンライン", "オンライン"),
  ],
};
