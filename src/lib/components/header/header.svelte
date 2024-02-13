<script>
	import { Button } from '$lib/components/ui/button';
	import { EnvelopeClosed, GithubLogo, TwitterLogo } from 'radix-icons-svelte';
</script>

<div class="flex h-16 items-center justify-between">
	<div class="flex items-center">
		<a href="/" class="text-2xl font-semibold">Joey Chilson</a>
	</div>
    <div class="relative inline-block">
        <div class="flex items-center space-x-2">
            <Button variant="outline" size="icon" href="mailto:joeychilson@outlook.com">
                <EnvelopeClosed class="w-4 h-4" />
            </Button>
			<Button variant="outline" size="icon" href="https://github.com/joeychilson">
				<GithubLogo class="w-4 h-4" />
			</Button>
			<Button variant="outline" size="icon" href="https://twitter.com/joeychilson">
				<TwitterLogo class="w-4 h-4" />
			</Button>
        </div>
    </div>
</div>
