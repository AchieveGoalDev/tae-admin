export type InputDef = {
  type: "input";
  key: string;
  label: string;
  size: string | null;
  placeholder: string;
};

export type RadioDef = {
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
    placeholder: "10AEF12345",
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
    placeholder: "山田 太郎",
  },
  {
    type: "input",
    key: "furigana",
    label: "フリガナ",
    size: "lg",
    placeholder: "ヤマダ　タロウ",
  },
  {
    type: "input",
    key: "first",
    label: "英字名（名前）",
    size: "",
    placeholder: "Taro",
  },
  {
    type: "input",
    key: "last",
    label: "英字名（名字）",
    size: "",
    placeholder: "YAMADA",
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
    placeholder: "",
  },
	{
    type: "input",
    key: "major",
    label: "学部",
    size: "sm",
    placeholder: "",
  },
	{
    type: "input",
    key: "faculty",
    label: "学科",
    size: "sm",
    placeholder: "",
  },
];
