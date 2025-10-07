<script>
	import smartTribeLogo from '$lib/assets/images/smartribelogo.png';
	import smartTribeLogoBG from '$lib/assets/images/smart_tribe_logo.png';
</script>

<section class="mt-28 flex text-white">
	<div class="more-progrms-bg-1 w-[60%] py-20 pr-10 pl-20">
		<h2 class="white-heaing mb-5 text-3xl font-bold">Most Popular Programs</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, delectus quam. Eos
			dolores ipsum a suscipit nihil harum qui repellat incidunt neque, laboriosam possimus itaque
			quos, quae unde in sunt.
		</p>

		<div class="mt-14 flex items-start justify-between gap-8">
			<section>
				<div class="w-[150px]">
					<img
						src={smartTribeLogoBG}
						alt="Smart Tribe Logo"
						class="h-full w-full rounded-xl object-cover"
					/>
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Abacus Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>

			<section>
				<div class="w-[150px]">
					<img src={smartTribeLogo} alt="Smart Tribe Logo" class="h-full w-full object-cover" />
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Coding Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>

			<section>
				<div class="w-[150px]">
					<img src={smartTribeLogo} alt="Smart Tribe Logo" class="h-full w-full object-cover" />
				</div>
				<h2 class="white-heaing py-4 text-lg font-semibold md:text-nowrap">Robotics Training</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores.</p>
			</section>
		</div>
	</div>
	<div class="more-progrms-bg-2 w-1/2"></div>
</section>
