<script lang="ts">
    //@ts-nocheck
    import dayjs from "dayjs";
    import "dayjs/locale/ja.js";
    import { Datepicker } from "svelte-calendar";

    let locale = dayjs.locale("ja");

    const theme = {
        calendar: {
            width: "300px",
            font: {
                regular: "1rem",
                large: "7rem",
            },
            colors: {
                background: {
                    primary: "#F8F6F1",
                    highlight: "#3A697E",
                    hover: "#F2EEE3",
                },
            },
        },
    };

    export let selected;
</script>

<div class="w-full flex flex-row justify-center mt-[5%]">
    <Datepicker value={{ locale }} bind:selected {theme} />
</div>
