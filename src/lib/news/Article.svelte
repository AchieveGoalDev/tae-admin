<script lang="ts">
	import type { Tag, TagArray } from '$lib/news/TagDefs';

	export let data: {
		title: string;
		author: { name: string };
		createdAt: Date;
		content: string;
		tags: TagArray;
	};
</script>

<article class="mb-12">
	{#if data}
		<h2 class="text-3xl font-bold text-rose-800">{data.title}</h2>
		<hr />
		<div class="flex flex-row flex-wrap">
			{#each data.tags as tag}
				{#if tag.isSelected}
					<div class={`mr-2 ${tag.color} font-bold text-white px-2 py-1 rounded-full my-2`}>
						{tag.text}
					</div>
				{/if}
			{/each}
		</div>

		<div class="my-10">
			{@html data.content}
		</div>

		<div>
			<span>{data.createdAt.toLocaleDateString('ja-JP')}</span>
			<p class="italic text-sky-400">{data.author.name}</p>
		</div>
	{/if}
</article>
