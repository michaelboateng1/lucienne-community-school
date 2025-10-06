<script>
	export let program;
</script>

<section class="rounded-br-xl rounded-bl-xl shadow-md">
	<div>
		<img
			src={program.image_url}
			alt={program.alt}
			class="h-full w-full rounded-tl-xl rounded-tr-xl object-cover"
		/>
	</div>
	<h3 class="px-5 pt-5 text-xl font-semibold">{program.title}</h3>
	<div class="mt-5 px-5 pb-5">
		{program.body}
	</div>
</section>
