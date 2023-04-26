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

const pleaseSelect = "選択してください";
// let necessary = "必要項目です";

export class Course {
  static COURSES = COURSES;
  static LEVELS = LEVELS;

  [key: string]: any;
  campus: CAMPUSES | null;
  type: COURSES | null;
  text: string | null;
  change: boolean | null;
  errors: {
    [key: string]: any;
    campus: string[];
    type: string[];
    text: string[];
    change: string[];
  };

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
    this.resetErrors();

    if (this.campus === null) {
      this.errors.campus.push(pleaseSelect);
    }

    if (this.type === null) {
      this.errors.type.push(pleaseSelect);
    }

    if (this.text === null) {
      this.errors.text.push(pleaseSelect);
    }

    if (this.change === null) {
      this.errors.change.push(pleaseSelect);
    }
  }

  resetErrors() {
    this.errors = {
      campus: [],
      type: [],
      text: [],
      change: [],
    };
  }
}
