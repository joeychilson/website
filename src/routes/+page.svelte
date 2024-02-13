<script lang="ts">
	import type { PageData } from './$types';
	import * as Tabs from '$lib/components/ui/tabs';
	import ProjectList from '$lib/components/project-list/project-list.svelte';
	import PostList from '$lib/components/post-list/post-list.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Joey Chilson</title>
</svelte:head>

<Tabs.Root value="projects">
	<Tabs.List>
		<Tabs.Trigger value="projects">Projects</Tabs.Trigger>
		<Tabs.Trigger value="posts">Posts</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="projects">
		<ProjectList />
	</Tabs.Content>
	<Tabs.Content value="posts">
		<PostList posts={data.posts} />
	</Tabs.Content>
</Tabs.Root>
