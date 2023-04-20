import type { Personal } from "./personal";

export enum COURSES {
  MANTOMAN = "マンツーマンレッスン",
  GROUP = "グループレッスン",
}

export enum LEVELS {
  BEGINNER = "初級",
  INTERMEDIATE = "中級",
  UPPER_INTERMEDIATE = "中上級",
  ADVANCED = "上級",
}

export enum CAMPUSES {
  WELLB = "WELLB",
  INIAD = "INIAD",
  HAKUSAN = "白山",
  ITAKURA = "板倉",
  KAWAGOE = "川越",
}

export class Course {
  static COURSES = COURSES;
  static LEVELS = LEVELS;

  campus: CAMPUSES | null;
  type: COURSES | null;
  text: string | null;
  change: boolean | null;
  isValid: boolean | null;

  constructor() {
    this.campus = null;
    this.type = null;
    this.text = null;
    this.change = null;
  }
  initializeData(data: any) {
    if (data.campus) {
      this.setCampus(data.campus);
    }

    if (data.type) {
      this.setType(data.type);
    }

    if (data.text) {
      this.setText(data.text);
    }

    if (data.change) {
      this.setChange(data.change);
    }
  }

  setCampus(data: CAMPUSES) {
    this.campus = data;
  }

  setType(data: COURSES) {
    this.type = data;
  }

  setText(data: string) {
    this.text = data;
  }

  setChange(data: boolean) {
    this.change = data;
  }

  checkIsValid() {
    if (this.campus === null) {
      this.isValid = false;
    }

    if (this.type === null) {
      this.isValid = false;
    }
  }
}

export class TestHistory {
  toeic: string | null;
  toefl: string | null;
  ielts: string | null;
  others: string | null;

  constructor() {
    this.toeic = null;
    this.toefl = null;
    this.ielts = null;
    this.others = null;
  }

  setToeic(data: string) {
    this.toeic = data;
  }

  setToefl(data: string) {
    this.toefl = data;
  }

  setIelts(data: string) {
    this.ielts = data;
  }

  setOthers(data: string) {
    this.others = data;
  }

  initializeData(data: any) {
    /* eslint-disable no-fallthrough */
    switch (data) {
      case data.toeic:
        this.toeic = data.toeic;
      case data.toefl:
        this.toefl = data.toefl;
      case data.ielts:
        this.ielts = data.ielts;
      case data.others:
        this.others = data.others;
      default:
        break;
    }
    /* eslint-enable no-fallthrough */
  }
}

export class Misc {
  comment: string;
  found: string;
}

export class Applicant {
  date: Date;
  course: Course;
  personal: Personal;
  scheduleData: string;
  misc: Misc;
}

export class Student {
  courseData: Course;
  testData: TestHistory;
  personalData: Personal;
  isValid: boolean;

  constructor(course: Course, test: TestHistory, personal: Personal) {
    this.courseData = course;
    this.testData = test;
    this.personalData = personal;
    this.isValid = false;
  }

  checkIsValid() {
    if (this.courseData.isValid && this.personalData.isValid) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
