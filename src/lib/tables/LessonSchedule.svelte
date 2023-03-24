<script lang="ts">
  export let title: string;
  export let footnote: string;
</script>

<table class="table-auto border-2 border-slate-700 bg-slate-50">
  <thead
    class="border-2 border-slate-700 bg-rose-600 font-bold text-3xl text-white"
  >
    <tr class="text-center">
      <div class="my-2">
        {title}
      </div>
    </tr>
  </thead>
  <tbody>
    <slot />
  </tbody>
  <tfoot class="bg-yellow-50">
    <div class="my-2">
      {footnote}
    </div>
  </tfoot>
</table>
