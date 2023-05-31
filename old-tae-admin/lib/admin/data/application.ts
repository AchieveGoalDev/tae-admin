import type { Personal } from "./personal";
import type { Course } from "./course";

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
