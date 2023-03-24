<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import Icon from "$lib/social-components/socialIcon.svelte";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;
</script>

<div class="flex flex-row items-center place-content-around px-36 mb-5">
  <Icon
    target="https://www.youtube.com/channel/UCJCs3EIgYKTH1BO3uNWdpzQ"
    path={s3 + "images/icons8-youtube.svg"}
    text="Youtube"
    ariaText="Youtube"
  />
  <Icon
    target="https://www.facebook.com/toyoachieveenglish/"
    path={s3 + "images/icons8-facebook.svg"}
    text="Facebook"
    ariaText="Facebook"
  />
  <Icon
    target="https://twitter.com/ToyoAchieve_Eng"
    path={s3 + "images/icons8-twitter.svg"}
    text="Twitter"
    ariaText="Twitter"
  />
</div>
