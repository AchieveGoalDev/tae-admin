import type {
  AddressInput,
  CheckboxInput,
  EmailInput,
  LargeTextInput,
  PhoneInput,
  RadioInput,
  SelectInputWithLabel,
  TextInput,
} from "../ApplicationData";

export const 学籍番号Data: TextInput = {
  size: "short",
  isNecessary: true,
  label: "学籍番号",
  desc: [
    "アルファベット入力の際は大文字で入力してください。",
    "学籍番号がアルファベットから始まることはありません。",
  ],
  alt: "学籍番号の入力",
  placeholder: "",
  length: 10,
  isUpper: true,
  trailText: "",
  validator: (stNumber: string) => {
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    const fullSpaceRegex = new RegExp("^[^ -~｡-ﾟ]+$");

    const errors: string[] = [];
    if (stNumber) {
      const stringArray = stNumber.split("");
      let hasFull = false;

      stringArray.forEach((letter) => {
        if (letter.match(fullSpaceRegex)) {
          hasFull = true;
        }
      });

      if (hasFull) {
        errors.push("半角文字で入力してください");
      }

      if (stringArray[0].match(letterRegex)) {
        errors.push("学籍番号はアルファベットから始まることはありません");
      }

      if (stringArray.length < 10 && stringArray.length > 0) {
        errors.push("10文字以上にしてください");
      }
    } else if (!stNumber) {
      errors.push("必要項目です");
    }
    return errors;
  },
};

export const 氏名Data: TextInput = {
  size: "long",
  isNecessary: true,
  label: "氏名",
  desc: [],
  alt: "氏名の入力",
  placeholder: "山田　太郎",
  length: 100,
  isUpper: false,
  trailText: "",
  validator: (name: string) => {
    const errors: string[] = [];
    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const フリガナData: TextInput = {
  size: "long",
  isNecessary: true,
  label: "フリガナ",
  desc: [],
  alt: "フリガナの入力",
  placeholder: "ヤマダ　タロウ",
  length: 30,
  isUpper: false,
  trailText: "",
  validator: (name: string) => {
    const errors: string[] = [];
    const カタカナ = new RegExp("^[\u30A0-\u30FF]+$");
    const space = new RegExp("　+");
    let isKana = true;

    if (name) {
      const nameString = name.split("");

      nameString.forEach((letter) => {
        console.log(letter.match(カタカナ));
        console.log(letter.match(space));
        if (!letter.match(カタカナ) && !letter.match(space)) {
          isKana = false;
        }
      });
    }

    if (!isKana) {
      errors.push("全角カタカナで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 英字名FirstData: TextInput = {
  size: "long",
  isNecessary: true,
  label: "英字名 First Name (名前)",
  desc: ["頭文字のみ大文字で入力してください。"],
  alt: "英字名で名前の入力",
  placeholder: "Taro",
  length: 30,
  isUpper: false,
  trailText: "",
  validator: (name: string) => {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (name) {
      const nameArray = name.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      errors.push("半角ロマジで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 英字名LastData: TextInput = {
  size: "long",
  isNecessary: true,
  label: "英字名 Last Name (名字)",
  desc: [],
  alt: "英字名で名字の入力",
  placeholder: "YAMADA",
  length: 30,
  isUpper: true,
  trailText: "",
  validator: (name: string) => {
    const errors: string[] = [];
    const letterRegex = new RegExp("^[a-zA-Z]+$");
    let isLetters = true;

    if (name) {
      const nameArray = name.split("");
      nameArray.forEach((letter) => {
        if (!letter.match(letterRegex)) {
          isLetters = false;
        }
      });
    }

    if (!isLetters) {
      errors.push("半角ロマジで入力してください");
    }

    if (!name) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 学年Data: TextInput = {
  size: "short",
  isNecessary: true,
  label: "学年",
  desc: ["教職員の方は「教員」「職員」等と記載してください。"],
  alt: "学年の入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "年生",
  validator: (value: string) => {
    const errors: string[] = [];

    if (!value) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

//************************TO INTEGRATE */

export const 学部Data: TextInput = {
  size: "short",
  isNecessary: true,
  label: "学部",
  desc: [],
  alt: "学部の入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "学部",
  validator: (value: string) => {
    const errors: string[] = [];

    if (!value) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 学科Data: TextInput = {
  size: "short",
  isNecessary: true,
  label: "学科",
  desc: [],
  alt: "学科の入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "学科",
  validator: (value: string) => {
    const errors: string[] = [];

    if (!value) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

export const 英検Data: TextInput = {
  size: "short",
  isNecessary: false,
  label: "英検",
  desc: [],
  alt: "英検結果の入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "級",
  validator: (value: string) => {
    const errors: string[] = [];

    return errors;
  },
};

export const TOEFLData: TextInput = {
  size: "short",
  isNecessary: false,
  label: "TOEFL",
  desc: [],
  alt: "TOEFLスコアの入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "点",
  validator: (value: string) => {
    const errors: string[] = [];

    return errors;
  },
};

export const IELTSData: TextInput = {
  size: "short",
  isNecessary: false,
  label: "IELTS",
  desc: [],
  alt: "IELTSスコアの入力",
  placeholder: "",
  length: 10,
  isUpper: false,
  trailText: "点",
  validator: (value: string) => {
    const errors: string[] = [];

    return errors;
  },
};

export const きっかけData: TextInput = {
  size: "long",
  isNecessary: true,
  label: "本プログラムを知ったきっかけ",
  desc: ["本プログラムを知ったきっかけ記載してください。"],
  alt: "本プログラムを知ったきっかけの入力",
  placeholder: "",
  length: 30,
  isUpper: false,
  trailText: "点",
  validator: (value: string) => {
    const errors: string[] = [];

    if (!value) {
      errors.push("必要項目です");
    }

    return errors;
  },
};

//***********EMAIL DATA ************/

export const 大学メールData: EmailInput = {
  isNecessary: true,
  label: "大学メールアドレス",
  desc: [
    `大学より貸与される"@toyo.jp"、"@iniad.org"のアドレスを入力してください。`,
  ],
  placeholder: "",
  alt: "大学メールの入力",
};

export const 個人メールData: EmailInput = {
  isNecessary: false,
  label: "個人メールアドレス",
  desc: [
    `大学メールアドレスへのメールが届かない場合に、連絡が可能なメールアドレスを入力してください。。`,
  ],
  placeholder: "",
  alt: "個人メールの入力",
};

//**********PHONE DATA *******/

export const 電話番号Data: PhoneInput = {
  isNecessary: true,
  desc: ["携帯電話等、日中に連絡のとれる番号を入力ください"],
  label: "電話番号",
};

//**********LARGE TEXT DATA +*******/

export const その他Data: LargeTextInput = {
  isNecessary: false,
  size: "small",
  label: "その他",
  desc: [],
  placeholder: "",
};

export const 備考Data: LargeTextInput = {
  isNecessary: false,
  size: "large",
  label: "備考",
  desc: ["ご質問事項等ございましたら、上記へご記入ください。"],
  placeholder: "",
};

//***************ADDRESS DATA *****/

export const 住所Data: AddressInput = {
  isNecessary: true,
  label: "住所",
  desc: [
    `登録いただいた住所に教材を郵送いたしますので受け取り希望される住所を
  建物名や部屋番号まで正確にご記入ください。`,
  ],
};

//***************RADIO DATA ****/

export const 性別Data: RadioInput = {
  isNecessary: true,
  label: "性別",
  alt: "性別の入力",
  choices: ["男性", "女性"],
  desc: [],
};

export const 種別Data: RadioInput = {
  isNecessary: true,
  label: "種別",
  alt: "種別の入力",
  choices: ["学部生", "大学院生", "その他（通信・教職員等）"],
  desc: [],
};

export const 試験Data: CheckboxInput = {
  isNecessary: false,
  label: "英語試験の受験経験あり・なし",
  alt: "英語試験の受験経験あり・なしの入力",
  choices: ["英語試験の受験経験なし"],
  desc: [""],
};

export const TOEICData: SelectInputWithLabel = {
  isNecessary: false,
  label: "TOEIC受験経験",
  alt: "TOEIC受験経験の入力",
  placeholder: "--TOEIC受験経験を選択--",
  options: ["～350点", "350～450点", "450～600点", "600～点"],
  desc: [
    "TOEIC受験経験がない方はその他の英語試験スコアを下記に記載してください。",
  ],
};
