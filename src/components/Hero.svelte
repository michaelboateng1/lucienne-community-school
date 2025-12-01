<script>
	import { onMount } from 'svelte';
</script>

<section
	class="hero-bg flex h-screen w-full flex-col justify-center overflow-hidden bg-gradient-to-bl from-white to-[#f7f9ff]"
	data-aos="fade-up"
>
	<div class="container mx-auto w-full px-5">
		<h1
			class="text-4xl font-bold text-[#2a6be1] text-shadow-md sm:text-6xl md:text-nowrap"
			data-aos="zoom-in"
			data-aos-delay="200"
		>
			Lucienne Community School
		</h1>

		<p
			class="text-md mt-5 font-semibold text-[#cb0101] text-shadow-2xs sm:pl-5 sm:text-xl"
			data-aos="fade-right"
			data-aos-delay="400"
		>
			Building Tomorrow’s Leaders Today
		</p>

		<div class="mt-10 flex items-center justify-start gap-8 sm:pl-5">
			<a
				data-aos="fade-up"
				data-aos-delay="200"
				href="/admission"
				class="hero-btn rounded-lg bg-[#2a6be1] px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl sm:px-10 sm:py-3"
				>Join us</a
			>
			<a
				data-aos="fade-in"
				data-aos-delay="800"
				href="/contact"
				class="hero-btn rounded-lg bg-[#cb0101] px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl sm:px-10 sm:py-3"
				>Contact us</a
			>
		</div>
	</div>
</section>
