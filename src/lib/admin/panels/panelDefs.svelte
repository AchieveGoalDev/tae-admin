<script lang="ts" context="module">
  import TestTab from "$lib/admin/panels/TestTab.svelte";
  import UnderConstructionTab from "$lib/admin/panels/UnderConstructionTab.svelte";

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

  export const TestPanel: Panel = {
    tabs: [
      {
        icon: "student.svg",
        iconAlt: "学生管理タブ",
        id: 1,
        component: UnderConstructionTab,
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
</script>
