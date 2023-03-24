<script lang="ts">
  import ApplciationForm from "$lib/forms/ApplciationForm.svelte";
  import HighlightTitle from "$lib/headers/HighlightTitle.svelte";
</script>

<div class="w-full sm:w-2/3 mx-auto pt-[100px] pb-[50px] h-full">
  <HighlightTitle
    pretext="Toyo Achieve Englishの"
    highlight="申し込み"
    posttext=""
    themeColor="red"
  />

  <ApplciationForm />
</div>
