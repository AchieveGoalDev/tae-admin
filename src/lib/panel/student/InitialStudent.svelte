<script lang="ts">
    import HeaderCell from "../tables/HeaderCell.svelte";
    import TableCell from "../tables/TableCell.svelte";
    import TableHeader from "../tables/TableHeader.svelte";
    import TableRow from "../tables/TableRow.svelte";

    import { fetchStudentData, context } from "$lib/stores/dataContext";
    import { onMount } from "svelte";

    onMount(async () => {
        const fetchedData = await fetchStudentData();
        console.log(fetchedData);
        $context.students = fetchedData.data;
    });

    $: console.log($context.students);
</script>

<pre>
    {#key $context.students}
        {#if $context.students}
            <TableHeader length={4}>
        <HeaderCell>学籍番号</HeaderCell>
        <HeaderCell>氏名</HeaderCell>
        <HeaderCell>大学メール</HeaderCell>
        <HeaderCell>個人メール</HeaderCell>
      </TableHeader>
      {#each $context.students as student, i}
                <TableRow length={4} index={i}>
          <TableCell>{student.学籍番号}</TableCell>
          <TableCell>{student.氏名}</TableCell>
          <TableCell>{student.大学メール}</TableCell>
          <TableCell>{student.個人メール}</TableCell>
        </TableRow>
            {/each}
        {/if}
    {/key}

</pre>
