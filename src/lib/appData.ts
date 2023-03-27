export type AppStyle = {
  bgColors: {
    primaryDark: string;
    primaryMid: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryMid: string;
    secondaryLight: string;
  };
  textColors: {
    primary: string;
    secondary: string;
  };
};

export const appStyle: AppStyle = {
  bgColors: {
    primaryDark: "bg-emerald-800",
    primaryMid: "bg-emerald-700",
    primaryLight: "bg-emerald-600",
    secondaryDark: "bg-blue-800",
    secondaryMid: "bg-blue-700",
    secondaryLight: "bg-blue-600",
  },
  textColors: {
    primary: "text-emerald-800",
    secondary: "text-blue-800",
  },
};
