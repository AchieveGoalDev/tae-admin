export type SemesterData = {
  isCurrent: boolean;
  season: "秋" | "春";
  year: "2022" | "2023" | "2024";
  startDate: Date;
  endDate: Date;
  priorityStartDate: Date;
  priorityEndDate: Date;
};
