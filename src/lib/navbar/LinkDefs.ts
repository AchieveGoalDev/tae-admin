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
      href: "/about",
      jpText: "キャンパス内留学とは？",
      enText: "About TAE",
      icon: s3 + "images/Icons/info.svg",
      iconAlt: "キャンパス内留学についてのアイコン",
      reload: false,
    },
    {
      href: "/details",
      jpText: "講座情報",
      enText: "Details",
      icon: s3 + "images/Icons/details.svg",
      iconAlt: "講座情報のアイコン",
      reload: false,
    },
    {
      href: "/faq",
      jpText: "よくある質問",
      enText: "Q&A",
      icon: s3 + "images/Icons/question.svg",
      iconAlt: "よくある質問のアイコン",
      reload: false,
    },
    {
      href: "/news",
      jpText: "新着情報",
      enText: "News",
      icon: s3 + "images/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
      reload: false,
    },
  ],
};
