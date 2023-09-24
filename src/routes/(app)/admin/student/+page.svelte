<script lang="ts">
  import PanelInteriorWrapper from "$lib/panel/PanelInteriorWrapper.svelte";
  import PanelSelector from "$lib/panel/PanelSelector.svelte";

  import InitialStudent from "$lib/panel/student/InitialStudent.svelte";

  import { initialStudent } from "$lib/panel/TabDefs";

  const componentList = [
    {
      name: initialStudent.tag,
      isDefaut: initialStudent.isDefault,
      component: InitialStudent,
    },
  ];
</script>

<PanelInteriorWrapper>
  <PanelSelector components={componentList} panelName={"student"} />
</PanelInteriorWrapper>
