<script>
	let open = $state(null);
	const faq = [
		{
			title: 'What levels of education does Lucienne Community School offer?',
			body: 'Lucienne Community School provides a complete learning journey from Crèche and Nursery through Primary to Junior High School (JHS). We prepare students academically, socially, and morally for success in higher education and life.'
		},
		{
			title: 'Does the school conduct entrance exams for new students?',
			body: 'Yes. All new students take a short entrance assessment or interview to help us understand their learning level and ensure proper class placement.'
		},
		{
			title: 'What curriculum does the school follow?',
			body: 'We offer a hybrid curriculum that blends the Ghana Education Service (GES) syllabus with elements of the Cambridge International Program. This ensures that students receive both a strong local foundation and international exposure, preparing them to excel globally.'
		},
		{
			title: 'Does the school teach Coding, Robotics, or Abacus?',
			body: 'Yes! As part of our Smart Learning Program, Lucienne Community School partners with SmartTribe to offer specialized courses in Coding, Robotics, and Abacus. These programs enhance students’ problem-solving skills, logical thinking, and creativity — helping them become innovators of the future.'
		},
		{
			title: 'Does the school offer transportation services?',
			body: 'Yes. Lucienne Community School provides safe, comfortable, and reliable transportation on selected routes. Parents can inquire at the office for routes and fees.'
		},
		{
			title: 'What extracurricular activities are available?',
			body: 'We believe in holistic development. Our students enjoy sports, music, debates, cultural events, art, clubs, and excursions — all designed to build confidence, teamwork, and leadership skills.'
		},
		{
			title: 'What are the school hours?',
			body: 'School hours are 7:30 AM to 3:00 PM, Monday to Friday. Early learners may close earlier depending on their daily schedule.'
		}
	];

	const toggleFAQ = (i) => {
		console.log(i, open);
		open = open === i ? null : i;
	};

	const openStyle = 'opacity-100 max-h-screen py-4 px-5 transition-all duration-300';
	const closeStyle = 'opacity-0 max-h-0 py-0 overflow-hidden px-5 transition-all duration-300';
</script>

<section class="container mx-auto py-20 md:w-[800px]">
	{#each faq as qts, i}
		<div class="mt-10 rounded-xl border-t-8 border-[#cb0101] shadow-sm">
			<div
				class="flex cursor-pointer items-center justify-between px-5 py-6 text-xl font-semibold"
				onclick={() => toggleFAQ(i)}
			>
				<h3>{qts.title}</h3>
				<i
					class={i === open
						? 'fa-solid fa-chevron-down rotate-180 transform transition-all duration-300'
						: 'fa-solid fa-chevron-down rotate-0 transform transition-all duration-300'}
				></i>
			</div>
			<p class={i === open ? openStyle : closeStyle}>
				{qts.body}
			</p>
		</div>
	{/each}
</section>

<style>
	h3 {
		color: #000 !important;
	}
</style>
