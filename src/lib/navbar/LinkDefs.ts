import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

const s3 = PUBLIC_IMAGE_BUCKET_URL;

export type LinkData = {
  href: string;
  jpText: string;
  enText: string;
  icon: string;
  iconAlt: string;
  reload: boolean;
};

export type NavbarContent = {
  color: string;
  navText: string;
  links: LinkData[];
};

export const mainNav = {
  color: "red",
  navText: "英語講座",
  links: [
    {
      href: "/",
      jpText: "ホーム",
      enText: "Home",
      icon: s3 + "images/Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
      reload: false,
    },
    {
      href: "/university/about",
      jpText: "キャンパス内留学とは？",
      enText: "About TAE",
      icon: s3 + "images/Icons/info.svg",
      iconAlt: "キャンパス内留学についてのアイコン",
      reload: false,
    },
    {
      href: "/university/details",
      jpText: "講座情報",
      enText: "Details",
      icon: s3 + "images/Icons/details.svg",
      iconAlt: "講座情報のアイコン",
      reload: false,
    },
    {
      href: "/university/faq",
      jpText: "よくある質問",
      enText: "Q&A",
      icon: s3 + "images/Icons/question.svg",
      iconAlt: "よくある質問のアイコン",
      reload: false,
    },
    {
      href: "/university/apply",
      jpText: "講座申込",
      enText: "Apply",
      icon: s3 + "images/Icons/apply.svg",
      iconAlt: "申し込みのアイコン",
      reload: false,
    },
    {
      href: "/university/news",
      jpText: "新着情報",
      enText: "News",
      icon: s3 + "images/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
      reload: false,
    },
    {
      href: "/special",
      jpText: "学外特別講座",
      enText: "Open",
      icon: "",
      iconAlt: "",
      reload: true,
    },
  ],
};

export const specialNav = {
  color: "blue",
  navText: "特別講座",
  links: [
    {
      href: "/special",
      jpText: "特別講座ホーム",
      enText: "Home",
      icon: s3 + "images/Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
      reload: false,
    },
    {
      href: "/special/specialnews",
      jpText: "新着情報",
      enText: "News",
      icon: s3 + "images/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
      reload: false,
    },
    {
      href: "/special/public",
      jpText: "学外向け講座",
      enText: "Public",
      icon: s3 + "",
      iconAlt: "",
      reload: false,
    },
    {
      href: "/special/students",
      jpText: "学内向け講座",
      enText: "Students",
      icon: s3 + "",
      iconAlt: "",
      reload: false,
    },
    {
      href: "/special/specialfaq",
      jpText: "よくあるご質問",
      enText: "Q&A",
      icon: s3 + "",
      iconAlt: "",
      reload: false,
    },
    {
      href: "/",
      jpText: "本講座",
      enText: "University",
      icon: "",
      iconAlt: "",
      reload: false,
    },
  ],
};
