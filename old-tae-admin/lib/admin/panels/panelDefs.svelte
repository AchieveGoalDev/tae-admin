<script lang="ts" context="module">
  import UnderConstructionTab from "$lib/admin/panels/UnderConstructionTab.svelte";
  import StudentTab from "$lib/admin/panels/StudentTab.svelte";

  import StudentRowCourse from "$lib/admin/expandable-rows/StudentRowCourse.svelte";
  import StudentRowPersonal from "$lib/admin/expandable-rows/StudentRowPersonal.svelte";
  import StudentRowTest from "$lib/admin/expandable-rows/StudentRowTest.svelte";

  export type Tab = {
    icon: string;
    iconAlt: string;
    id: number;
    component: any;
  };

  export type Panel = {
    tabs: Tab[];
    defaultTab: number;
  };

  export type TextTab = {
    text: string;
    id: number;
    component: any;
  };

  export type SubPanel = {
    tabs: TextTab[];
    defaultTab: number;
  };

  export const TestPanel: Panel = {
    tabs: [
      {
        icon: "student.svg",
        iconAlt: "学生管理タブ",
        id: 1,
        component: StudentTab,
      },
      {
        icon: "approve.svg",
        iconAlt: "申込管理タブ",
        id: 2,
        component: UnderConstructionTab,
      },
      {
        icon: "class.svg",
        iconAlt: "講座管理タブ",
        id: 3,
        component: UnderConstructionTab,
      },
      {
        icon: "teacher.svg",
        iconAlt: "講師管理タブ",
        id: 4,
        component: UnderConstructionTab,
      },
    ],
    defaultTab: 1,
  };

  export const StudentPanel: SubPanel = {
    tabs: [
      {
        text: "個人情報",
        id: 1,
        component: StudentRowPersonal,
      },
      {
        text: "試験情報",
        id: 2,
        component: StudentRowCourse,
      },
      {
        text: "コース",
        id: 3,
        component: StudentRowTest,
      },
    ],
    defaultTab: 1,
  };
</script>
