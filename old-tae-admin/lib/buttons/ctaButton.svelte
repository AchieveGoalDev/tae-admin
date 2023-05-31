<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a
  {href}
  class="block text-3xl font-bold text-white p-5 bg-rose-700 rounded-full shadow-lg transition ease-in hover:bg-rose-600 hover:-translate-y-2"
>
  {text}
</a>
