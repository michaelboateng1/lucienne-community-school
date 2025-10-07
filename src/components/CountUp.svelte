<script>
	import Countup from 'svelte-countup';
	export let initial;
	export let value;
	export let step;
	export let duration;
</script>

<div
	class="flex inline-block items-start bg-gradient-to-bl from-[#2a6be1] to-[#cb0101] bg-clip-text text-8xl font-bold font-extrabold text-transparent"
>
	<Countup {initial} {value} {step} {duration} format={true} />
	<span class="self-center">+</span>
</div>

<style>
	div,
	span {
		font-variant-numeric: tabular-nums;
		font-size: 2rem;
	}
</style>
