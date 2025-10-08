<script>
	import BageCard from './BageCard.svelte';

	const bages = [
		{
			title: 'Nurturing Minds',
			tag: 'Available',
			bg: '#2a6be1',
			icon: 'fa-solid fa-brain sm:text-3xl text-2xl text-[#2a6be1]'
		},
		{
			title: 'Shaping Futures',
			tag: 'Available',
			bg: '#cb0101',
			icon: 'fa-solid fa-book sm:text-3xl text-2xl text-[#cb0101]'
		},
		{
			title: 'A Place to Learn',
			tag: 'Available',
			bg: '#055',
			icon: 'fa-solid fa-school sm:text-3xl text-2xl text-[#055]'
		}
	];
</script>

<div class="mt-10 flex flex-wrap items-center justify-center gap-8 p-10 sm:flex-row">
	{#each bages as item}
		<BageCard {item} />
	{/each}
</div>
