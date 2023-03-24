<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import LogoWrapper from "$lib/media-wrappers/LogoWrapper.svelte";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let themeColor: string;

  let bgColor = "black";

  if (themeColor === "blue") {
    bgColor = "bg-blue-900";
  }

  if (themeColor === "red") {
    bgColor = "bg-rose-700";
  }
</script>

<div class={`${bgColor} min-h-[300px]`}>
  <div
    class="flex flex-col md:flex-row px-3 mt-3 w-full place-content-around text-white md:items-center md:py-5"
  >
    <div class="flex flex-col text-center sm:text-left">
      <div class="flex items-center">
        <LogoWrapper height={50} source={s3 + "images/TAENavLogo.svg"} />
        <h2 class="font-bold text-2xl sm:text-3xl mb-2 ml-3">
          Toyo Achieve English
        </h2>
      </div>
      <p>講座内容・お申込みにかんする</p>
      <button
        class="flex items-center place-content-center w-full bg-green-600 rounded-lg my-2 shadow-md h-[40px]"
      >
        <a href="tel:0353022239">
          <img
            src={s3 + "images/Icons/call.svg"}
            class="h-[30px]"
            alt="電話ボタン"
          />
        </a>
      </button>
      <p>Tel: 03-5302-2239 (平日： 9:00～18:00)</p>
      <button
        class="flex items-center place-content-center w-full bg-sky-700 rounded-lg my-2 shadow-md h-[40px]"
      >
        <a href="mailto:info@achieve-english.jp">
          <img
            src={s3 + "images/Icons/mail.svg"}
            class="h-[30px]"
            alt="メールボタン"
          />
        </a>
      </button>
      <p>Mail：info@achieve-english.jp</p>
      <p class="mt-2">株式会社アチーブゴール</p>
      <p>キャンパス内留学サポートデスク</p>
    </div>
    <hr class="md:hidden my-5" />
    <div class="flex flex-row place-content-around">
      <div>
        <h3 class="font-bold text-md">サイトのナビゲーション</h3>
        <div class="ml-3 underline">
          <a href="/" class="block">トップページ</a>
          <a href="#" class="block">新着情報</a>
          <a href="#" class="block">キャンパス内留学とは?</a>
          <a href="#" class="block">講座情報</a>
          <a href="#" class="block">オンライン申込み</a>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-md">各キャンパスの申込みに</h3>
        <div class="ml-3 underline">
          <a href="#" class="block">白山キャンパス</a>
          <a href="#" class="block">川越キャンパス</a>
          <a href="#" class="block">板倉キャンパス</a>
          <a href="#" class="block">INIADキャンパス</a>
          <a href="#" class="block">WELLBキャンパス</a>
        </div>
      </div>
    </div>
    <hr class="md:hidden my-5" />
    <div class="flex flex-row place-content-around mb-5">
      <div class="flex flex-col place-content-around">
        <div class="ml-3 font-bold underline sm:mr-2">
          <h3 class="font-bold text-lg mb-2">公式SNS</h3>
          <a href="#" class="flex items-center"
            ><img
              src={s3 + "images/icons8-facebook.svg"}
              class="h-[30px]"
              alt="フェースブックのアイコン"
            />Facebook</a
          >
          <a href="#" class="flex items-center">
            <img
              src={s3 + "images/icons8-twitter.svg"}
              class="h-[30px] my-2"
              alt="ツイッターのアイコン"
            />
            Twitter
          </a>
          <a href="#" class="flex">
            <img
              src={s3 + "images/icons8-youtube.svg"}
              class="h-[30px]"
              alt="ユーチューブのアイコン"
            />
            Youtube
          </a>
        </div>
      </div>
      <div class="flex flex-col my-auto">
        <!--TODO add links to banner images https://tgu.mext.go.jp/-->
        <img
          src={s3 + "images/images/tugs-banner.jpg"}
          alt="東洋大学グローバルサービス"
        />
        <img
          src={s3 + "images/images/toyo-banner.jpg"}
          class="my-2"
          alt="東洋大学"
        />
        <img
          src={s3 + "images/images/tguj-banner.jpg"}
          alt="スーパーグローバル大学"
        />
      </div>
    </div>
  </div>
</div>

