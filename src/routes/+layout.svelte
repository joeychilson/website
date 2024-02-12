<script>
	import Header from '$lib/components/header/header.svelte';
	import '../app.css';
</script>

<main class="mx-auto w-full max-w-screen-lg px-2.5">
	<Header />
	<slot />
</main>
