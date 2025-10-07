<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<!-- Primary color: #2a6be1 -->
<!-- Secondary color: #cb0101 -->
<!-- Accent color: #d9bf2b -->
<!-- Background color: #ffffff -->
