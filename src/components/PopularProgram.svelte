<script>
	import smartTribeLogo from '$lib/assets/images/smartribelogo.png';
	import smartTribeLogoBG from '$lib/assets/images/smart_tribe_logo.png';
</script>

<section class="mt-28 text-white md:flex">
	<div class="more-progrms-bg-1 py-20 px-5 sm:pr-10 sm:pl-20 md:w-[60%]">
		<h2 class="white-heaing mb-5 text-3xl font-bold">Most Popular Programs</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, delectus quam. Eos
			dolores ipsum a suscipit nihil harum qui repellat incidunt neque, laboriosam possimus itaque
			quos, quae unde in sunt.
		</p>

		<div class="mt-14 grid gap-8 sm:grid-cols-2">
			<section data-aos="fade-in">
				<div class="w-[100px]">
					<img
						src={smartTribeLogo}
						alt="Smart Tribe Logo"
						class="h-full w-full rounded-xl object-cover"
					/>
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Abacus Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>

			<section data-aos="fade-in">
				<div class="w-[100px]">
					<img src={smartTribeLogo} alt="Smart Tribe Logo" class="h-full w-full object-cover" />
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Coding Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>

			<section data-aos="fade-in">
				<div class="w-[100px]">
					<img src={smartTribeLogo} alt="Smart Tribe Logo" class="h-full w-full object-cover" />
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Robotics Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>
		</div>
	</div>
	<div class="more-progrms-bg-2 hidden w-1/2 md:block"></div>
</section>
