import type { MarkdownPostMetadataAndSlug } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = async ({ fetch }) => {
	const resp = await fetch('/api/posts');
	const posts: MarkdownPostMetadataAndSlug[] = await resp.json();
	return { posts };
};
