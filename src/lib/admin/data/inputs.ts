type InputDef = {
  type: "input";
  key: string;
  label: string;
  size: string | null;
};

type RadioDef = {
  type: "radio";
  key: string;
  label: string;
  options: string[];
};

export const personalInputs: (InputDef | RadioDef)[] = [
  {
    type: "input",
    key: "number",
    label: "学籍番号",
    size: "md",
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
    size: "",
  },
  {
    type: "input",
    key: "furigana",
    label: "フリガナ",
    size: "lg",
  },
  {
    type: "input",
    key: "first",
    label: "英字名（名前）",
    size: "",
  },
  {
    type: "input",
    key: "last",
    label: "英字名（名字）",
    size: "",
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
    size: "sm",
  },
];
