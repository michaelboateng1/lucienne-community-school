<script>
	import SectionHeader from './SectionHeader.svelte';
	import CountUp from './CountUp.svelte';
	import AboutImage from '$lib/assets/images/475442807_1196576558846308_7994411322552990177_n.jpg';
	import listImage from '$lib/assets/images/list_mark/checklist-check-yes-svgrepo-com.svg';
</script>

<section class="container mx-auto mt-24 flex justify-between py-5">
	<div>
		<SectionHeader>
			<h2 class="pl-10 capitalize sm:pl-14">About us</h2>
		</SectionHeader>
		<p class=" px-10 md:px-14">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, libero! Dicta, perspiciatis
			autem. Reprehenderit eum deleniti fuga doloremque. Rem exercitationem atque facilis
			consequatur dolorem? Perferendis, itaque hic.
		</p>

		<ul class=" customList mt-5 list-inside space-y-3 px-10 md:px-16">
			<li>Lorem, ipsum dolor.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem, ipsum dolor.</li>
		</ul>

		<div class="mt-10 flex flex-wrap items-center justify-start gap-20 px-10 py-2 md:px-14">
			<div
				class="gradient-border w-[150px] rounded-lg p-0.5 transition-all duration-300 hover:shadow-xl"
			>
				<div class="rounded-md px-3 py-5">
					<div class="flex items-center pb-2">
						<CountUp initial={3050} value={4000} step={10} duration={3000} />
					</div>
					<p
						class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
					>
						Students
					</p>
				</div>
			</div>

			<div
				class="gradient-border w-[150px] rounded-lg p-0.5 transition-all duration-300 hover:shadow-xl"
			>
				<div class="rounded-md px-3 py-5">
					<div class="flex items-center pb-2">
						<CountUp initial={50} value={100} step={1} duration={3000} />
					</div>
					<p
						class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
					>
						Teachers
					</p>
				</div>
			</div>

			<div
				class="gradient-border w-[150px] rounded-lg p-0.5 transition-all duration-300 hover:shadow-xl"
			>
				<div class="rounded-md px-3 py-5">
					<div class="flex items-center pb-2">
						<CountUp initial={0} value={50} step={1} duration={3000} />
					</div>
					<p
						class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
					>
						Partners
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden drop-shadow-lg sm:block">
		<img
			src={AboutImage}
			alt="About Us"
			class="h-full w-full rounded-2xl object-cover transition-all duration-300"
		/>
	</div>
</section>

<style>
	.gradient-border {
		background: linear-gradient(to bottom left, #d9bf2b, #cb0101);
	}

	.gradient-border div {
		background-color: white;
	}
</style>
