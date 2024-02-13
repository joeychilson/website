<script lang="ts">
	import { Circle, Star } from 'radix-icons-svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import ProjectList from '$lib/components/project-list/project-list.svelte';
</script>

<Tabs.Root value="projects">
	<Tabs.List>
		<Tabs.Trigger value="projects">Projects</Tabs.Trigger>
		<Tabs.Trigger value="posts">Posts</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="projects">
		<ProjectList />
	</Tabs.Content>
	<Tabs.Content value="posts">
		<div class="grid grid-cols-1 gap-4 mt-4">
		</div>
	</Tabs.Content>
</Tabs.Root>
