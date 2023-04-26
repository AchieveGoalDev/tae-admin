<script lang="ts">
  import ModalNavButton from "./ModalNavButton.svelte";
</script>

<div class="flex grid-start-2 place-content-around py-3 text-md shadow-md">
  <ModalNavButton isSelected={true} content={"個人情報"} />
  <ModalNavButton isSelected={false} content={"コース情報"} />
  <ModalNavButton isSelected={false} content={"試験履歴"} />
</div>
