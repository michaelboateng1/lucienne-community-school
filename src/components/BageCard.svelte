<script>
	export let item;
</script>

<section
	class="flex h-[100px] w-[350px] items-center gap-5 rounded-xl px-5 py-3 transition-all duration-300 hover:scale-x-[1.1] hover:transform hover:drop-shadow-xl"
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
		<p class="text-2xl text-white">{item.title}</p>
		<p class="text-lg text-white">{item.tag}</p>
	</div>
</section>
