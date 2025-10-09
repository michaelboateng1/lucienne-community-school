<script>
	import ExtraProgramesCard from './ExtraProgramesCard.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import image from '$lib/assets/images/473566276_1185590823278215_4078071514193835889_n.jpg';

	const programs = [
		{
			image_url: image,
			alt: 'Student on the football field',
			title: 'Football',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam tempore, obcaecati laborum aliquam repudiandae temporibus voluptate sed nostrum mollitia.'
		},
		{
			image_url: image,
			alt: 'Student on the football field',
			title: 'Football',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam tempore, obcaecati laborum aliquam repudiandae temporibus voluptate sed nostrum mollitia.'
		},
		{
			image_url: image,
			alt: 'Student on the football field',
			title: 'Football',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam tempore, obcaecati laborum aliquam repudiandae temporibus voluptate sed nostrum mollitia.'
		}
	];
</script>

<section class="mt-20 px-5">
	<SectionHeader>
		<h2 class="pl-5 sm:pl-10">Extracurricular</h2>
	</SectionHeader>
	<div
		class="container mx-auto grid grid-cols-1 place-items-center gap-8 py-5 sm:grid-cols-2 md:grid-cols-3"
	>
		{#each programs as program}
			<ExtraProgramesCard {program} />
		{/each}
	</div>
</section>
