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
