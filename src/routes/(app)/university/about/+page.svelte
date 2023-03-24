<script lang="ts">
  import { windowWidth } from "$lib/store/windowData";
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
  import MediaWrapper from "$lib/wrappers/media-wrapper.svelte";

  import RedCtaButton from "$lib/buttons/redCtaButton.svelte";
  import ApplciationForm from "$lib/forms/ApplciationForm.svelte";

  let width: number;
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  windowWidth.subscribe((v) => {
    width = v;
  });
</script>

<h1>Need hero here</h1>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "", highlight: "毎日", posttext: "まなぶ" }}
>
  <TextWrapper>
    フレンドリ―なフィリピン人講師と履修授業の合間をぬって毎日(月曜日～土曜日)英語でレッスンを進めていきます。
  </TextWrapper>
  <TextWrapper>
    <strong>“English Only Policy”</strong
    >の環境だからこそできるスピーキング・リスニングに焦点を当てたレッスン内容になっています。英会話スクールに行く時間が確保できなくてもキャンパス内留学だからこそ空いている時間でレッスンに取り組むことができ、大学の授業や部活、バイトなどとも両立することができます！
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "", highlight: "自由", posttext: "にスケジュール" }}
>
  <TextWrapper>
    講座の時間割は大学の授業に合わせて組まれているので、授業の空き時間にレッスンを受講できます。月曜日から金曜日まで自分の予定に合わせて自由にスケジュールを組むことができるのも、本講座の特徴です。
  </TextWrapper>
  <MediaWrapper description="自由にスケジュール">
    <img
      slot="media"
      alt="スケジュールのイメージ"
      class="w-[full] sm:w-auto sm:h-[300px] rounded-md"
      src={s3 + "images/schedule.jpg"}
    />
  </MediaWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "開講講座(選べる2講座)", highlight: "", posttext: "" }}
>
  <h2 class="pl-2 text-3xl font-bold border-l-4 border-rose-800">
    グループレッスン
  </h2>
  <TextWrapper>
    英語は苦手と思っている人ほど受けて欲しい！なので初級クラスはTOEIC350点未満の学生を対象にカリキュラムを用意しています。またクラスは最大4名まで、さらに初級・初中級・中級・上級と細かくレベルも分かれているので、少人数でよりレベルの合った学生と英語を学ぶことができます。またクラスのメンバーと学年を問わず仲良くなれるので、サークルのように楽しくなること間違いなし！プログラム終了後には自分が伝えたい事が伝えられるようになる！ということを目標に、講師と楽しく英語を話しましょう。
    <div class="flex">
      <RedCtaButton text="詳細はこちら" href="#" />
    </div>
  </TextWrapper>

  <h2 class="pl-2 text-3xl font-bold border-l-4 border-rose-800">
    マンツーマンレッスン
  </h2>
  <TextWrapper>
    少人数とはいえ人前で話すのが恥ずかしい、講師とマンツーマンで自分のペース、レベルに合わせて英語を勉強したいという方にはこちらのレッスンがおすすめです。講座オリジナルのテキストを使用し講師を独占して学んでいただけます！また平日、土曜日のどちらも開講しているので、ご自身のご都合の良い曜日、時間に存分に学んでいただけます。
    <div class="flex">
      <RedCtaButton text="詳細はこちら" href="#" />
    </div>
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{
    pretext: "",
    highlight: "親しみやすい",
    posttext: "講師と一緒に学ぶ",
  }}
>
  <TextWrapper>
    フレンドリーな講師が指導にあたります。毎日の授業がきっと楽しみになるはず！
    海外の生きた英語を学ぶチャンス！
  </TextWrapper>

  <h2 class="pl-2 text-3xl font-bold border-l-4 border-rose-800">
    「読む」「書く」「聞く」「話す」 英語の４技能を鍛える！
  </h2>
  <TextWrapper>
    CLT(Communicative Language
    Teaching)という英語教授法を用い、スピーキング・リスニングに焦点を当てたレッスンを行います。英語でのコミュニケーション能力を備え、レッスンの会話の中で、正確な文法と綺麗な発音を身につける訓練を行います。
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{
    pretext: "講師の",
    highlight: "紹介",
    posttext: "",
  }}
>
  Stuff Here
</SectionWrapper>
