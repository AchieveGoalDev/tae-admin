export type TabDef = {
  text: string;
  tag: string;
  icon: string;
  isDefault: boolean;
};

export type TabIndex = {
  event: TabDef[];
  uc: TabDef[];
  class: TabDef[];
};

const eventManageGakunai: TabDef = {
  text: "学内イベント管理",
  tag: "学内管理",
  icon: "material-symbols:folder-managed",
  isDefault: true,
};

const eventManageGakugai: TabDef = {
  text: "学外イベント管理",
  tag: "学外管理",
  icon: "material-symbols:folder-managed-outline",
  isDefault: false,
};

const eventApplicantGakunai: TabDef = {
  text: "学内申込管理",
  tag: "学内申込",
  icon: "ph:stamp-fill",
  isDefault: false,
};

const eventApplicantGakugai: TabDef = {
  text: "学外申込管理",
  tag: "学外申込",
  icon: "ph:stamp-fill",
  isDefault: false,
};

const underConstruction: TabDef = {
  text: "準備中",
  tag: "準備中",
  icon: "material-symbols:construction",
  isDefault: true,
};

const classTextbook: TabDef = {
  text: "教科書",
  tag: "教科書",
  icon: "ph:book-fill",
  isDefault: false,
}

const classCourse: TabDef = {
  text: "コース",
  tag: "コース",
  icon: "ph:book-fill",
  isDefault: false,
}

const classSchedule: TabDef = {
  text: "時刻表",
  tag: "時刻表",
  icon: "mdi:timetable",
  isDefault: true
}

export const tabIndex: TabIndex = {
  event: [
    eventManageGakunai,
    eventManageGakugai,
    eventApplicantGakunai,
    eventApplicantGakugai,
  ],
  uc: [underConstruction],
  class: [
    classSchedule,
    classCourse,
    classTextbook,
  ]
};
