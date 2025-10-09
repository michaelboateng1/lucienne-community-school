<script>
	export let Image1;
	export let Image2;
</script>

<main
	class=" mt-[100px] flex min-h-screen w-full flex-col justify-between px-5 py-20 sm:px-10 md:flex-row"
>
	<div class="flex h-auto w-full flex-col justify-between drop-shadow-2xl md:gap-20 md:py-24">
		<img src={Image1} alt="Our Students" class="h-auto w-full rounded-2xl object-cover" />
		<img
			src={Image2}
			alt="Our Students"
			class="hidden h-auto w-full rounded-2xl object-cover md:block"
		/>
	</div>
	<div class="pt-10 md:pt-0">
		<slot />
	</div>
</main>

<style>
	main {
		background:
			linear-gradient(hsla(0, 100%, 100%, 0.9), hsla(0, 100%, 100%, 0.9)),
			url('../lib/assets/images/476125439_1201101361727161_1891004193275354962_n.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
</style>
