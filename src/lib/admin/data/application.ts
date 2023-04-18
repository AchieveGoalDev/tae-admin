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

export class Personal {
  [key: string]: any;
  number: string | null;
  gender: string | null;
  name: string | null;
  furigana: string | null;
  first: string | null;
  last: string | null;
  post: string | null;
  address: string | null;
  status: string | null;
  year: string | null;
  major: string | null;
  schoolMail: string | null;
  personalMail: string | null;
  phone: string | null;
  isValid: boolean;
  errors: {
    [key: string]: any;
    number: string[];
    gender: string[];
    name: string[];
    furigana: string[];
    first: string[];
    last: string[];
    post: string[];
    address: string[];
    status: string[];
    year: string[];
    major: string[];
    schoolMail: string[];
    personalMail: string[];
    phone: string[];
  };

  constructor() {
    this.number = null;
    this.gender = null;
    this.name = null;
    this.furigana = null;
    this.first = null;
    this.last = null;
    this.post = null;
    this.address = null;
    this.status = null;
    this.year = null;
    this.major = null;
    this.schoolMail = null;
    this.personalMail = null;
    this.phone = null;
    this.errors = {
      number: [],
      gender: [],
      name: [],
      furigana: [],
      first: [],
      last: [],
      post: [],
      address: [],
      status: [],
      year: [],
      major: [],
      schoolMail: [],
      personalMail: [],
      phone: [],
    };
  }

  initializeData(data: any) {
    if (data.number) {
      this.setNumber(data.number);
    }

    if (data.gender) {
      this.setGender(data.gender);
    }

    if (data.name) {
      this.setName(data.name);
    }

    if (data.furigana) {
      this.setFurigana(data.furigana);
    }

    if (data.first) {
      this.setFirst(data.first);
    }

    if (data.last) {
      this.setLast(data.last);
    }

    if (data.post) {
      this.setPost(data.post);
    }

    if (data.address) {
      this.setAddress(data.address);
    }

    if (data.status) {
      this.setStatus(data.status);
    }

    if (data.year) {
      this.setYear(data.year);
    }

    if (data.major) {
      this.setMajor(data.major);
    }
  }

  setNumber(data: string) {
    this.number = data;
  }

  setGender(data: string) {
    this.gender = data;
  }

  setName(data: string) {
    this.name = data;
  }

  setFurigana(data: string) {
    this.furigana = data;
  }

  setFirst(data: string) {
    this.first = data;
  }

  setLast(data: string) {
    this.last = data;
  }

  setPost(data: string) {
    this.post = data;
  }

  setAddress(data: string) {
    this.address = data;
  }

  setStatus(data: string) {
    this.status = data;
  }

  setYear(data: string) {
    this.year = data;
  }

  setMajor(data: string) {
    this.major = data;
  }

  resetErrors() {
    this.errors = {
      number: [],
      gender: [],
      name: [],
      furigana: [],
      first: [],
      last: [],
      post: [],
      address: [],
      status: [],
      year: [],
      major: [],
      schoolMail: [],
      personalMail: [],
      phone: [],
    };
  }

  validateData() {
    this.resetErrors();
    this.validateName();
    this.validateNumber();
    this.validateFurigana();
    this.validateFirst();
  }

  validateName() {
    if (this.name === "") {
      this.errors.name.push("必要項目です");
    }
  }

  validateFurigana() {
    const カタカナ = new RegExp("^[\u30A0-\u30FF]+$");
    const space = new RegExp("　+");
    let isKana = true;

    if (this.furigana) {
      const nameString = this.furigana.split("");

      nameString.forEach((letter) => {
        console.log(letter.match(カタカナ));
        console.log(letter.match(space));
        if (!letter.match(カタカナ) && !letter.match(space)) {
          isKana = false;
        }
      });
    }

    if (!isKana) {
      this.errors.furigana.push("全角カタカナで入力してください");
    }

    if (this.furigana === "") {
      this.errors.furigana.push("必要項目です");
    }
  }

  validateNumber() {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    const fullSpaceRegex = new RegExp("^[^ -~｡-ﾟ]+$");

    if (this.number) {
      const stringArray = this.number.split("");
      let hasFull = false;

      stringArray.forEach((letter) => {
        if (letter.match(fullSpaceRegex)) {
          hasFull = true;
        }
      });

      if (hasFull) {
        this.errors.number.push("学籍番号は半角文字で入力してください");
      }

      if (stringArray[0].match(letterRegex)) {
        this.errors.number.push(
          "学籍番号はアルファベットから始まることはありません"
        );
      }

      if (stringArray.length < 10 && stringArray.length > 0) {
        this.errors.number.push("学籍番号は10文字以上にしてください");
      }
    } else if (!this.number) {
      this.errors.number.push("必要項目です");
    }
  }

  validateFirst() {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (this.first) {
      const nameArray = this.first.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      this.errors.first.push("半角ロマジで入力してください");
    }

    if (this.first === "") {
      this.errors.first.push("必要項目です");
    }
  }

  validateLast() {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (this.last) {
      const nameArray = this.last.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      this.errors.last.push("半角ロマジで入力してください");
    }

    if (this.last === "") {
      this.errors.last.push("必要項目です");
    }
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
