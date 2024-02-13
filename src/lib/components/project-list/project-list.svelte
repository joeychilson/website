<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	interface Project {
		name: string;
		url: string;
		description: string;
		tags: string[];
	}

	const projects: Project[] = [
        {
            name: 'alpha_vantage_client',
            url: 'https://github.com/joeychilson/alpha_vantage_client',
            description: 'An Elixir HTTP client for Alpha Vantage API.',
            tags: ['Elixir']
        },
        {
            name: 'edgar_client',
            url: 'https://github.com/joeychilson/edgar_client',
            description: 'An Elixir-based HTTP Client for SEC EDGAR.',
            tags: ['Elixir', 'Rust']
        },
        {
            name: 'financial_formulas',
            url: 'https://github.com/joeychilson/financial_formulas',
            description: 'An Elixir library for financial formulas.',
            tags: ['Elixir']
        },
        {
            name: 'fmp_client',
            url: 'https://github.com/joeychilson/fmp_client',
            description: 'An Elixir HTTP client for Financial Modeling Prep.',
            tags: ['Elixir']
        },
        {
            name: 'fred_client',
            url: 'https://github.com/joeychilson/fred_client',
            description: 'An Elixir HTTP client for Federal Reserve Economic Data API.',
            tags: ['Elixir']
        },
		{
			name: 'hackernews',
			url: 'https://github.com/joeychilson/hackernews',
			description: 'A Hacker News clone in Go.',
			tags: ['Go', 'Tailwind', 'Templ']
		},
        {
			name: 'httputils',
			url: 'https://github.com/joeychilson/httputils',
			description: 'A library of helper functions for Go net/http package..',
			tags: ['Go', 'HTTP']
		},
		{
			name: 'links',
			url: 'https://github.com/joeychilson/links',
			description: 'A simple link sharing app built using go, htmx, and templ.',
			tags: ['Go', 'HTMX', 'Tailwind', 'Templ']
		},
		{
			name: 'links-svelte',
			url: 'https://github.com/joeychilson/links-svelte',
			description: 'A simple link sharing app built using SvelteKit.',
			tags: ['TypeScript', 'Svelte', 'SvelteKit', 'Tailwind']
		},
        {
			name: 'litemigrate',
			url: 'https://github.com/joeychilson/litemigrate',
			description: 'A simple SQLite migration library for Go.',
			tags: ['Go', 'SQL', 'SQLite']
		},
        {
			name: 'litequery',
			url: 'https://github.com/joeychilson/litequery',
			description: 'A simple and fast SQLite query builder library for Go.',
			tags: ['Go', 'SQL', 'SQLite']
		},
        {
			name: 'pghooks',
			url: 'https://github.com/joeychilson/pghooks',
			description: 'A simple PostgreSQL LISTEN/NOTIFY library for Go.',
			tags: ['Go', 'SQL', 'PostgreSQL']
		},
        {
            name: 'resume',
            url: 'https://github.com/joeychijson/resume',
            description: 'A simple resume generator using resume.json.',
            tags: ['Go', 'Templ']
        },
        {
            name: 'riot_games_client',
            url: 'https://github.com/joeychilson/riot_games_client',
            description: 'An Elixir HTTP client for the Riot Games API.',
            tags: ['Elixir']
        },
        {
            name: 'simplecli',
            url: 'https://github.com/joeychilson/simplecli',
            description: 'A simple CLI library for Go.',
            tags: ['Go']
        },
        {
            name: 'simplemux',
            url: 'https://github.com/joeychilson/simplemux',
            description: 'A simple HTTP mux library for Go.',
            tags: ['Go', 'HTTP']
        },
        {
            name: 'simple_rate_limiter',
            url: 'https://github.com/joeychilson/simple_rate_limiter',
            description: 'A simple rate limiter for Elixir.',
            tags: ['Elixir']
        },
        {
            name: 'testdb',
            url: 'https://github.com/joeychilson/testdb',
            description: 'A repo for building test Postgres databases.',
            tags: ['Go', 'SQL', 'PostgreSQL']
        },
	];
</script>

<div class="grid grid-cols-2 gap-4 mt-4">
	{#each projects as project}
		<a href={project.url} target="_blank" class="hover:shadow-md">
			<Card.Root>
				<Card.Header>
					<div class="space-y-1">
						<Card.Title>{project.name}</Card.Title>
						<Card.Description>{project.description}</Card.Description>
					</div>
				</Card.Header>
				<Card.Content>
					<div class="flex space-x-2">
						{#each project.tags as tag}
							<Badge variant="outline">{tag}</Badge>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>
