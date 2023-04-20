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
  faculty: string | null;
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
    faculty: string[];
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
    this.faculty = null;
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
      faculty: [],
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
      faculty: [],
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
    this.validateLast();
    this.validateYear();
    this.validateMajor();
    this.validateFaculty();
  }

  validateName() {
    if (!this.name) {
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
        if (!letter.match(カタカナ) && !letter.match(space)) {
          isKana = false;
        }
      });
    }

    if (!isKana) {
      this.errors.furigana.push("全角カタカナで入力してください");
    }

    if (!this.furigana) {
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

    if (!this.first) {
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

    if (!this.last) {
      this.errors.last.push("必要項目です");
    }
  }

  validateYear() {
    if (!this.year) {
      this.errors.year.push("必要項目です");
    }
  }

  validateMajor() {
    if (!this.major) {
      this.errors.major.push("必要項目です");
    }
  }

  validateFaculty() {
    if (!this.year) {
      this.errors.faculty.push("必要項目です");
    }
  }
}
