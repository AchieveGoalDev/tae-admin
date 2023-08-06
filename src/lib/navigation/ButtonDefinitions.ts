export type SideNavButtonProps = {
  icon: string;
  text: string;
  link: string;
};

export const sideNavButtons: SideNavButtonProps[] = [
  {
    icon: "material-symbols:school",
    text: "学生",
    link: "/student",
  },
  {
    icon: "bxs:party",
    text: "イベント",
    link: "/event",
  },
  {
    icon: "fa-solid:school",
    text: "キャンパス",
    link: "/campus",
  },
  {
    icon: "mdi:teacher",
    text: "先生",
    link: "/teacher",
  },
  {
    icon: "mingcute:schedule-fill",
    text: "授業",
    link: "/class",
  },
  {
    icon: "bxs:report",
    text: "リポート",
    link: "/report",
  },
  {
    icon: "material-symbols:article",
    text: "ニュース",
    link: "/news"
  }
];
