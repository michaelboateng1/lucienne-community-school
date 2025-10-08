<script>
	import Image from '$lib/assets/images/476839066_662626196106300_4966439693691221527_n.jpg';
	import SectionHeader from '../../components/SectionHeader.svelte';
</script>

<main
	class="mt-[100px] flex h-screen w-full flex-col justify-between gap-8 overflow-y-scroll px-10 py-20 text-xl md:flex-row"
>
	<div class="h-auto w-full drop-shadow-2xl">
		<img src={Image} alt="Our Students" class="h-full w-full rounded-2xl object-cover" />
	</div>
	<div>
		<SectionHeader title={'Get Your Child Admitted Today'} />
		<div class="space-y-2 px-14">
			<p>
				Applying for a place at <span
					class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
					>Lucienne Community School</span
				>
				is highly competitive. However, priority is given to children who already have their sibling(s)
				in the school. To enroll at
				<span
					class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
					>LCS</span
				>, one is expected to write an entrance examination and attain not less than fifty percent
				(50%) in each of the subjects to be written.
				<span
					class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
					>English Language and Mathematics</span
				>
				are written by pupils in Kindergarten 2 up to Grade 3; while those in Grade 4-JHS 1 write
				<span
					class="before:'*' relative z-20 before:absolute before:bottom-0 before:left-0 before:-z-20 before:h-[10px] before:w-full before:skew-1 before:transform before:bg-[#d9bf2b]"
					>Science</span
				>
				in addition to the two subjects stated earlier.
			</p>

			<p>For all pupils, admission is given based on the availability of vacancy.</p>
		</div>
	</div>
</main>

<style>
	main {
		background:
			linear-gradient(hsla(0, 100%, 100%, 0.9), hsla(0, 100%, 100%, 0.9)),
			url('../../lib/assets/images/476125439_1201101361727161_1891004193275354962_n.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
</style>
