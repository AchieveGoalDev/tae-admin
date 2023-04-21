export type InputDef = {
  type: "input";
  key: string;
  label: string;
  sublabel: string | null;
  size: string | null;
  placeholder: string;
  isRequired: boolean;
};

export type RadioDef = {
  type: "radio";
  key: string;
  label: string;
  options: string[];
};

export type SelectDef = {
  type: "select";
  key: string;
  label: string;
  options: string[];
  isRequired: boolean;
};

export const personalInputs: (InputDef | RadioDef)[] = [
  {
    type: "input",
    key: "number",
    label: "学籍番号",
    sublabel: null,
    size: "md",
    placeholder: "10AEF12345",
    isRequired: true,
  },
  {
    type: "radio",
    key: "gender",
    label: "男性",
    options: ["男性", "女性"],
  },
  {
    type: "input",
    key: "name",
    label: "氏名",
    sublabel: null,
    size: "",
    placeholder: "山田 太郎",
    isRequired: true,
  },
  {
    type: "input",
    key: "furigana",
    label: "フリガナ",
    sublabel: null,
    size: "lg",
    placeholder: "ヤマダ　タロウ",
    isRequired: true,
  },
  {
    type: "input",
    key: "first",
    label: "名前",
    sublabel: "ローマ字",
    size: "",
    placeholder: "Taro",
    isRequired: true,
  },
  {
    type: "input",
    key: "last",
    label: "苗字",
    sublabel: "ローマ字",
    size: "",
    placeholder: "YAMADA",
    isRequired: true,
  },
  {
    type: "radio",
    key: "status",
    label: "種別",
    options: ["学部生", "大学院生", "その他(通信・教職員など)"],
  },
  {
    type: "input",
    key: "year",
    label: "学年",
    sublabel: null,
    size: "sm",
    placeholder: "1",
    isRequired: true,
  },
  {
    type: "input",
    key: "major",
    label: "学部",
    sublabel: null,
    size: "md",
    placeholder: "文学部",
    isRequired: true,
  },
  {
    type: "input",
    key: "faculty",
    label: "学科",
    sublabel: null,
    size: "lg",
    placeholder: "哲学学科",
    isRequired: true,
  },
];

export const courseInputs = [
  {
    hey: "sup",
  },
];

export const testInputs = [
  {
    sup: "hey",
  },
];
