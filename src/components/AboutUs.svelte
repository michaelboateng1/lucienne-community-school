<script>
	import SectionHeader from './SectionHeader.svelte';
	import CountUp from './CountUp.svelte';
	import listImage from '$lib/assets/images/list_mark/checklist-check-yes-svgrepo-com.svg';
</script>

<section class="mt-28">
	<div>
		<SectionHeader title={'About us'} />
		<p class="px-14">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, libero! Dicta, perspiciatis
			autem. Reprehenderit eum deleniti fuga doloremque. Rem exercitationem atque facilis
			consequatur dolorem? Perferendis, itaque hic.
		</p>

		<ul class=" customList mt-5 list-inside space-y-3 px-16">
			<li>Lorem, ipsum dolor.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem, ipsum dolor.</li>
		</ul>

		<div class="mt-10 flex items-center justify-start gap-20 px-14">
			<div>
				<div class="flex items-center pb-2">
					<CountUp initial={0} value={4000} step={1} duration={30000} />
				</div>
				<p
					class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
				>
					Students
				</p>
			</div>

			<div>
				<div class="flex items-center pb-2">
					<CountUp initial={0} value={100} step={1} duration={15000} />
				</div>
				<p
					class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
				>
					Teachers
				</p>
			</div>

			<div>
				<div class="flex items-center pb-2">
					<CountUp initial={0} value={50} step={1} duration={1000} />
				</div>
				<p
					class="inline-block bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-2xl font-bold font-extrabold text-transparent"
				>
					Partnership
				</p>
			</div>
		</div>
	</div>
	<div>
		<div id="videoPlayer"></div>
	</div>
</section>

<style>
	.custom-list {
		list-style: none;
		padding-left: 0;
	}

	.custom-list li {
		position: relative;
		padding-left: 2rem; /* space for the marker */
		margin-bottom: 0.5rem;
	}

	.custom-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 1rem;
		height: 1rem;
		background-image: var(--list-image);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
