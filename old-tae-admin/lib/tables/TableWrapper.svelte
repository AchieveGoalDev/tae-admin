<script lang="ts">
  import type { TableContainerFooter } from "./TableDefs";

  type WrapperData = {
    title: string;
    cols: number;
    footer: TableContainerFooter;
  };

  export let wrapperData: WrapperData;
</script>

<table class="table-auto bg-slate-50 lg:min-w-[1200px] mx-auto text-xl">
  <thead
    class="border-2 border-slate-700 bg-rose-600 font-bold text-3xl text-white"
  >
    <td class="text-center" colspan={wrapperData.cols}>
      <div class="my-2 w-full">
        {wrapperData.title}
      </div>
    </td>
  </thead>
  <tbody>
    <slot />
  </tbody>
  <tfoot class="bg-yellow-50">
    <td
      colspan={wrapperData.cols}
      class="border-l-2 border-r-2 border-b-2 border-slate-700"
    >
      <div class="my-2 ml-2">
        <h2 class="font-bold text-2xl">
          {wrapperData.footer.title}
        </h2>
        {#each wrapperData.footer.content as footer}
          <div class="my-2">
            {#each footer as segment}
              <p class="my-1">{segment}</p>
            {/each}
          </div>
        {/each}
      </div>
    </td>
  </tfoot>
</table>
