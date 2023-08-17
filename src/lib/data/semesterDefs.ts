type UpdateHistoryItem = {
  updatedBy: string,
  updatedOn: Date;
}

export type SemesterData = {
  createdOn: string;
  createdBy: string;
  updatedOn: Date;
  updateHistory: UpdateHistoryItem[];
  isCurrent: boolean;
  season: "秋" | "春";
  year: "2022" | "2023" | "2024";
  startDate: Date;
  endDate: Date;
  priorityStartDate: Date;
  priorityEndDate: Date;
};