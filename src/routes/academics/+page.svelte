<script>
	import Info from '../../components/Info.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
	import Image1 from '$lib/assets/images/476599220_662626026106317_3148505665180866110_n(1).jpg';
	import Image2 from '$lib/assets/images/476599220_662626026106317_3148505665180866110_n(1).jpg';

	const learningStages = [
		{
			title: 'Early Childhood (Crèche & Nursery):',
			body: 'Our early years program focuses on play-based learning, helping children build confidence, language, and social skills in a warm and caring environment.'
		},
		{
			title: 'Primary School:',
			body: 'We emphasize literacy, numeracy, science, and moral education. Students are guided to think independently, work collaboratively, and apply knowledge to real-life situations.'
		},
		{
			title: 'Junior High School (JHS):',
			body: 'Our JHS program prepares students for the Basic Education Certificate Examination (BECE). We combine strong academic instruction with practical learning experiences in ICT, entrepreneurship, and problem-solving.'
		}
	];
</script>

<Info {Image1} {Image2}>
	<SectionHeader title={'About Our Academics'} />
	<section class="space-y-2 sm:px-14">
		<p>
			At <span
				class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
				>Lucienne Community School</span
			>, we are dedicated to providing a solid academic foundation that prepares students for
			lifelong learning, creativity, and leadership. Our curriculum blends academic excellence with
			moral discipline and practical skills to nurture well-rounded learners.
		</p>

		<h3>Curriculum</h3>
		<p>
			We follow a comprehensive curriculum that integrates the Ghana Education Service (GES)
			standards with modern teaching methods. Our subjects are designed to develop students’
			intellectual, social, and emotional abilities while encouraging curiosity and critical
			thinking.
		</p>

		<ul class=" mt-10 list-inside">
			<h3>Learning Stages</h3>
			{#each learningStages as stages}
				<li class="pt-3 pb-10">
					<h3 class="inline">{stages.title}</h3>
					<p class="pt-2 pl-5">{stages.body}</p>
				</li>
			{/each}
		</ul>

		<h3>Teaching and Learning Approach</h3>
		<p>
			Our teachers use innovative teaching methods, including group discussions, projects, digital
			learning tools, and interactive lessons. Each classroom promotes creativity, discipline, and
			participation, ensuring that every learner reaches their full potential.
		</p>

		<h3>Assessment and Progress</h3>
		<p>
			Students are assessed through continuous classwork, projects, and termly examinations. Regular
			feedback and parent-teacher meetings ensure that every child receives the guidance and support
			needed for academic growth.
		</p>

		<h3>Beyond the Classroom</h3>
		<p>
			We believe that education goes beyond textbooks. Students participate in extracurricular
			activities such as debates, cultural performances, sports, science fairs, and excursions to
			develop leadership, teamwork, and confidence.
		</p>
	</section>
</Info>

<!--  -->

<style>
	h3 {
		margin-top: 3rem;
	}

	ul {
		list-style-image: url('../../lib/assets/images/list_mark/checklist-finish-race-line-svgrepo-com.svg');
	}
</style>
