<script>
	export let item;
</script>

<section
	class="flex h-[100px] w-full items-center gap-5 rounded-xl px-3 py-3 transition-all duration-300 hover:scale-x-[1.1] hover:transform hover:drop-shadow-xl sm:w-[350px] sm:gap-5 sm:px-5"
	style="background: {item.bg};"
>
	<!-- Slot: if no content is provided, render a default icon using item.icon -->
	<slot>
		{#if item.icon}
			<div class="rounded-full bg-white px-2 py-3">
				<i class={item.icon}></i>
			</div>
		{/if}
	</slot>
	<div>
		<p class="text-xl text-white sm:text-2xl">{item.title}</p>
		<p class="text-md text-white sm:text-lg">{item.tag}</p>
	</div>
</section>
