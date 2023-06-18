<script lang="ts">
    import AddNew from "$lib/buttons/AddNew.svelte";

    const click = () => {
        console.log("click");
    };
</script>

<h1
    class="
    pl-2
    pt-2
    font-bold
    text-2xl 
    text-dark-dark "
>
    学外イベント管理
</h1>
<div class="w-full">
    <table class="bg-white w-full">
        <thead>
            <th>講座名</th>
            <th>開催日</th>
            <th>申込者</th>
            <th>講座の詳細</th>
        </thead>
        <tbody>
            <tr>
                <td>テスト講座</td>
                <td>07/15/2023</td>
                <td>25名</td>
                <td>拡大</td>
            </tr>
        </tbody>
    </table>
</div>
<AddNew addFunction={click} />
