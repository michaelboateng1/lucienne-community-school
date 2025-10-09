<script>
	import Info from '../../components/Info.svelte';
	import SectionHeader from '../../components/SectionHeader.svelte';
	import Image1 from '$lib/assets/images/476839066_662626196106300_4966439693691221527_n.jpg';
	import Image2 from '$lib/assets/images/476628036_662626216106298_2083335453912877213_n(1).jpg';

	const admissionProcess = [
		{
			title: 'Inquiry and School Tour',
			body: 'Parents or guardians are encouraged to visit the school or contact our admission office to learn more about our programs, facilities, and values. School tours are available by appointment.'
		},
		{
			title: 'Pick Up or Download an Admission Form',
			body: 'Admission forms can be obtained at the school’s front office or downloaded from our website. Ensure all sections of the form are filled accurately.'
		},
		{
			title: 'Submission of Application',
			body: 'Submit the completed form along with the following documents:',
			subList: [
				'Two (2) passport-size photographs of the student',
				'A copy of the student’s birth certificate',
				'Previous school report or transfer letter (if applicable)',
				'Health record or medical report'
			]
		},
		{
			title: 'Entrance Assessment',
			body: 'Prospective students may be required to take an entrance test or interview to help us determine the appropriate class placement and understand their learning needs.'
		},
		{
			title: 'Admission Decision',
			body: 'Parents will be notified of the admission status within a few days after the assessment. Successful applicants will receive an official admission letter.'
		},
		{
			title: 'Enrollment and Orientation',
			body: 'Upon receiving the admission letter, parents should proceed to pay the required fees to confirm the student’s place. New students and their parents are invited to an orientation program before the start of the term.'
		}
	];
</script>

<Info {Image1} {Image2}>
	<div class="hidden sm:block">
		<SectionHeader title={'Get Your Child Admitted Today'} />
	</div>
	<section class="space-y-2 sm:px-14">
		<h3>Admission Process</h3>
		<p>
			At <span
				class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
				>Lucienne Community School</span
			>, we believe every child deserves a nurturing and inspiring environment to learn and grow.
			Our admission process is designed to be simple, transparent, and welcoming to all families.
		</p>

		<ul class=" list-inside">
			{#each admissionProcess as step}
				<li class="py-10">
					<h3 class="inline">{step.title}</h3>
					<p class="pt-2 pl-5">{step.body}</p>
					{#if step.subList}
						<ul class="mt-10 list-inside pl-5 sm:pl-10">
							{#each step.subList as list}
								<li>{list}</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</Info>

<style>
	ul {
		list-style-image: url('../../lib/assets/images/list_mark/checklist-finish-race-line-svgrepo-com.svg');
	}

	ul li ul {
		list-style-image: url('../../lib/assets/images/list_mark/checklist-marketing-pointer-svgrepo-com.svg');
	}
</style>
