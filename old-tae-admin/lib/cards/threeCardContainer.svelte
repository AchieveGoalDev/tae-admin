<script>
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import Card from "$lib/cards/card.svelte";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;
</script>

<div>
  <div
    class="flex flex-col sm:flex-row md:flex-nowrap sm:flex-wrap mx-auto place-content-around"
  >
    <Card
      imgPath={s3 + "images/cards/advantage_img1.jpg"}
      heading="1. 毎日キャンパスで学べる"
      altText="授業中で学生が相談している"
    />
    <Card
      imgPath={s3 + "images/cards/advantage_img2.jpg"}
      heading="2. English Only Policy"
      altText="学生と先生が会話をしている"
    />
    <Card 
    
      imgPath={s3 + "images/cards/advantage_img3.jpg"} 
      heading="3. お得な受講料"
      altText="学生が授業を受けている"    
          />
  </div>
</div>

