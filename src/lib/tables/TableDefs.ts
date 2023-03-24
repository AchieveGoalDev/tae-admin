export type TableContainer = {
  cols: number;
  title: string;
  footer: TableContainerFooter;
  tables: Table[];
};

export type TableContainerFooter = {
  title: string;
  content: string[][];
};

export type Table = {
  title: string;
  colspan: number;
  rows: RowData[];
};

export type RowData = {
  cells: CellData[];
};

export type CellData = {
  isBold: boolean;
  isTitle: boolean;
  content: string;
};

class Cell {
  isBold: boolean;
  isTitle: boolean;
  content: string;

  constructor(isBold = false, isTitle = false, content: string) {
    (this.isBold = isBold), (this.isTitle = isTitle), (this.content = content);
  }
}

const groupOne: Table = {
  title: "開講プログラム",
  colspan: 2,
  rows: [
    {
      cells: [
        {
          isBold: false,
          isTitle: false,
          content: "半期プログラム",
        },
      ],
    },
    {
      cells: [
        {
          isBold: false,
          isTitle: false,
          content: "初級・初中級・中級・上級",
        },
      ],
    },
    {
      cells: [
        {
          isBold: false,
          isTitle: false,
          content: "全キャンパス",
        },
      ],
    },
  ],
};

const groupTwo: Table = {
  title: "新規受講費用（税込み）",
  colspan: 1,
  rows: [
    {
      cells: [
        new Cell(true, true, "受講料"),
        new Cell(false, false, "42,500円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "教材費"),
        new Cell(false, false, "3,630円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "事務手数料"),
        new Cell(false, false, "500円"),
      ],
    },
    {
      cells: [new Cell(true, true, "合計"), new Cell(true, true, "46,630円")],
    },
  ],
};

const groupThree: Table = {
  title: "リピーター受講費用(税込)",
  colspan: 1,
  rows: [
    {
      cells: [
        new Cell(true, true, "受講料"),
        new Cell(false, false, "34,000円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "教材費"),
        new Cell(false, false, " 3,630円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "事務手数料"),
        new Cell(false, false, "500円"),
      ],
    },
    {
      cells: [new Cell(true, true, "合計"), new Cell(true, true, "38,130円")],
    },
  ],
};

export const groupLesson: TableContainer = {
  title: "グループレッスン",
  cols: 3,
  footer: {
    title: "レッスンスケジュール",
    content: [
      [
        "後期(50回)：2022年10月13日(木) ～12月23日(金)",
        "※祝日により、回数が減る場合があります。",
        "全キャンパスで開催",
      ],
    ],
  },
  tables: [groupOne, groupTwo, groupThree],
};

const mtmOne: Table = {
  title: "開講コース",
  colspan: 2,
  rows: [
    {
      cells: [
        new Cell(false, true, "1コマ"),
        new Cell(false, true, "2コマ"),
        new Cell(false, true, "※3コマ"),
        new Cell(false, true, "※4コマ"),
        new Cell(false, true, "※5コマ"),
      ],
    },
  ],
};

const mtmTwo: Table = {
  title: "新規受講費用(税込)",
  colspan: 1,
  rows: [
    {
      cells: [
        new Cell(true, true, "受講料"),
        new Cell(false, false, "35,000円"),
        new Cell(false, false, "70,000円"),
        new Cell(false, false, "100,000円"),
        new Cell(false, false, "125,000円"),
        new Cell(false, false, "140,000円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "教材費"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "3,300円"),
        new Cell(false, false, "3,300円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "事務手数料"),
        new Cell(false, false, "500円"),
        new Cell(false, false, "500円"),
        new Cell(false, false, "500円	"),
        new Cell(false, false, "500円	"),
        new Cell(false, false, "500円	"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "合計"),
        new Cell(true, true, "37,150円	"),
        new Cell(true, true, "72,150円	"),
        new Cell(true, true, "102,150円"),
        new Cell(true, true, "128,800円"),
        new Cell(true, true, "143,800円"),
      ],
    },
  ],
};

const mtmThree: Table = {
  title: "リピーター受講費用(税込)",
  colspan: 1,
  rows: [
    {
      cells: [
        new Cell(true, true, "受講料"),
        new Cell(false, false, "28,00円"),
        new Cell(false, false, "56,000円"),
        new Cell(false, false, "80,000円"),
        new Cell(false, false, "100,000円"),
        new Cell(false, false, "112,000円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "教材費"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "1,650円	"),
        new Cell(false, false, "3,300円"),
        new Cell(false, false, "3,300円"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "事務手数料"),
        new Cell(false, false, "500円"),
        new Cell(false, false, "500円"),
        new Cell(false, false, "500円	"),
        new Cell(false, false, "500円	"),
        new Cell(false, false, "500円	"),
      ],
    },
    {
      cells: [
        new Cell(true, true, "合計"),
        new Cell(true, true, "30,150,150円	"),
        new Cell(true, true, "85,150円	"),
        new Cell(true, true, "82,150円"),
        new Cell(true, true, "103,800円"),
        new Cell(true, true, "115,800円"),
      ],
    },
  ],
};
export const mtmLesson: TableContainer = {
  title: "マンツーマンレッスン",
  cols: 7,
  footer: {
    title: "レッスンスケジュール",
    content: [
      [
        "半期(10週間)：週 1/ 2/ 3/ 4/ 5コマ (合計；10/ 20/ 30/ 40/ 50回)",
        "平日：2022年10月13日(木) ～12月23日(金)",
        "土曜日：2022年10月15日(土) ～12月24日(土)",
      ],
      [
        "※土曜コース…2コマまで受講可能。連続で受講しても、時間を空けて受講することも可能です。",
        "※平日コース…週5コマまで受講可能。月～金曜日の間で自由に時間割を組むことができます。",
        "(例：水曜日に3コマ連続して受講、又は月/水/金曜日それぞれ1コマずつ受講など)",
      ],
    ],
  },

  tables: [mtmOne, mtmTwo, mtmThree],
};

export const studentAmt: TableContainer = {
  title: "募集人数/ 枠数",
  cols: 9,
};
