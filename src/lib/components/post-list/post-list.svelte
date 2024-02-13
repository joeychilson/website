<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { type MarkdownPostMetadataAndSlug } from '$lib/types';

	export let posts: MarkdownPostMetadataAndSlug[];
</script>

<div class="grid grid-cols-1 gap-4 mt-4">
	{#each posts as post}
		<a href="/posts/{post.slug}" target="_blank" class="hover:shadow-md">
			<Card.Root>
				<Card.Header>
					<div class="space-y-1">
						<Card.Title>{post.metadata.title}</Card.Title>
						<Card.Description>{post.metadata.description}</Card.Description>
					</div>
				</Card.Header>
				<Card.Content>
					<div class="flex space-x-2">
						<Badge variant="outline">{post.metadata.publishedAt}</Badge>
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>
