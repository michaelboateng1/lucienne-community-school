<script>
	import SectionHeader from '../../components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>Contact Lucienne Community School – We’d Love to Hear From You</title>
	<meta
		name="description"
		content="Get in touch with Lucienne Community School for inquiries, admissions, or partnerships. Let’s shape a brighter future together."
	/>
</svelte:head>

<main class="mt-[130px] min-h-screen py-10">
	<section class="mx-auto rounded-xl bg-white p-10 pt-5 drop-shadow-2xl md:w-[800px]">
		<SectionHeader>
			<h1 class="capitalize">Contact us</h1>
		</SectionHeader>
		<form class="mt-5 space-y-7 pb-5">
			<div class="flex gap-8">
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
			</div>

			<div>
				<input type="text" placeholder="Email" />
			</div>
			<div>
				<textarea placeholder="Message"></textarea>
			</div>
			<div>
				<button type="submit" class="cursor-pointer px-5 py-2 transition-all duration-300"
					>Submit</button
				>
			</div>
		</form>
	</section>
</main>

<style>
	main {
		background:
			linear-gradient(hsla(0, 100%, 100%, 0.9), hsla(0, 100%, 100%, 0.9)),
			url('../../lib/assets/images/476125439_1201101361727161_1891004193275354962_n.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	input,
	textarea {
		font-family: inherit;
		width: 100%;
		border: 2px solid #2a6be1;
		border-radius: 5px;
	}

	button {
		font-family: inherit;
		border: 2px solid #2a6be1;
		border-radius: 5px;
	}
</style>
