import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from '../$types';

export const load = (async ({ params }) => {
	const markdownPost: MarkdownPost = await import(`../../../posts/${params.slug}.md`);
	return {
		metadata: markdownPost.metadata,
		post: markdownPost.default
	};
}) satisfies PageLoad;
