<script lang="ts">
  import PanelInteriorWrapper from "$lib/panel/PanelInteriorWrapper.svelte";
  import PanelSelector from "$lib/panel/PanelSelector.svelte";

  import Courses from "$lib/panel/class/Courses.svelte";
  import Textbooks from "$lib/panel/class/Textbooks.svelte";
  import Schedule from "$lib/panel/class/Schedule.svelte";

  import {
    classTextbook,
    classCourse,
    classSchedule,
  } from "$lib/panel/TabDefs";

  const componentList = [
    {
      name: classCourse.tag,
      isDefaut: classCourse.isDefault,
      component: Courses,
    },
    {
      name: classSchedule.tag,
      isDefaut: classSchedule.isDefault,
      component: Schedule,
    },
    {
      name: classTextbook.tag,
      isDefaut: classTextbook.isDefault,
      component: Textbooks,
    },
  ];
</script>

<PanelInteriorWrapper>
  <PanelSelector components={componentList} panelName={"class"} />
</PanelInteriorWrapper>
