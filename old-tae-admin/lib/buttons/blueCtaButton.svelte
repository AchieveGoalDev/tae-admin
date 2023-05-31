<script lang="ts">
  export let text: string;
  export let href: string;
</script>

<a
  {href}
  class="block text-2xl sm:text-3xl font-bold text-white p-4 sm:p-5 bg-sky-700 rounded-full shadow-lg transition ease-in hover:bg-sky-600 hover:-translate-y-2 mx-auto focus:bg-sky-600"
>
  {text}
</a>
