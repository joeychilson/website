<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<svelte:head>
	<title>{metadata.title} - Joey Chilson</title>
</svelte:head>

<div class="max-w-none mx-auto">
	<div class="text-center">
		<h1 class="text-3xl font-extrabold tracking-tight">
			{metadata.title}
		</h1>
		<p class="text-sm">
			Published on {metadata.publishedAt}
		</p>
		<p class="my-4 text-lg">{metadata.description}</p>
	</div>
	<article class="prose prose-neutral max-w-none">
		<Post />
	</article>
</div>
