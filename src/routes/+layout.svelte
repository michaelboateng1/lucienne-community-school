<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Lucienne Community School – Inspiring Minds, Building the Future</title>
	<meta
		name="description"
		content="Welcome to Lucienne Community School, where curiosity meets creativity. We offer GES + Cambridge programs with Coding, Abacus, and Robotics training from SmartTribe to nurture tomorrow’s innovators."
	/>
</svelte:head>

<Header />
{@render children?.()}
<Footer />

<!-- Primary color: #2a6be1 -->
<!-- Secondary color: #cb0101 -->
<!-- Accent color: #d9bf2b -->
<!-- Background color: #ffffff -->
