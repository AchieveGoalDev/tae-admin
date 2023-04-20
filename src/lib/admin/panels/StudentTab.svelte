<script lang="ts">
  import AddItem from "$lib/admin/buttons/AddItem.svelte";
  import StudentRow from "$lib/admin/expandable-rows/StudentRow.svelte";
  import UtilityBar from "$lib/admin/panels/UtilityBar.svelte";

  import ModalWrapper from "$lib/admin/modals/ModalWrapper.svelte";
  import StudentPersonalModal from "$lib/admin/modals/StudentPersonalModal.svelte";

  import dummyData from "$lib/admin/data/dummystudents.json";

  let students: Student[] = [];
  let modal = false;

  dummyData.data.forEach((student) => {
    let toInitialize = new Student(
      new Course(),
      new TestHistory(),
      new Personal()
    );

    toInitialize.courseData.initializeData(student.courseData);
    toInitialize.testData.initializeData(student.testData);
    toInitialize.personalData.initializeData(student.personalData);

    console.log(toInitialize);
    students = [...students, toInitialize];
  });

  import { Course, TestHistory, Student } from "$lib/admin/data/application";

  import { Personal } from "$lib/admin/data/personal";

  function addStudent() {
    students = [
      ...students,
      new Student(new Course(), new TestHistory(), new Personal()),
    ];
  }

  const data = "hello";
</script>

<div class="flex flex-col h-full relative">
  <button on:click={() => (modal = !modal)}>modal</button>
  <UtilityBar>
    <input type="text" class="bg-slate-100" />
    <AddItem {data} handleAdd={addStudent} alt="学生を追加" />
  </UtilityBar>
  <div class="overflow-y-scroll">
    {#each students as student, i}
      <StudentRow index={i} data={student} />
    {/each}
  </div>
</div>

{#if modal}
  <ModalWrapper bind:control={modal}>
    <StudentPersonalModal />
  </ModalWrapper>
{/if}
