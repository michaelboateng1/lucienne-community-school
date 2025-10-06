<script>
	import BageCard from './BageCard.svelte';

	const bages = [
		{
			title: 'Nurturing Minds',
			tag: 'Available',
			bg: '#2a6be1',
			icon: 'fa-solid fa-brain text-3xl text-[#2a6be1]'
		},
		{
			title: 'Shaping Futures',
			tag: 'Available',
			bg: '#cb0101',
			icon: 'fa-solid fa-book text-3xl text-[#cb0101]'
		},
		{
			title: 'A Place to Learn',
			tag: 'Available',
			bg: '#055',
			icon: 'fa-solid fa-school text-3xl text-[#055]'
		}
	];
</script>

<div class="mt-10 flex items-center justify-center gap-8 p-10">
	{#each bages as item}
		<BageCard {item} />
	{/each}
</div>
