<script>
	import SectionHeader from '../../components/SectionHeader.svelte';
	
	let firstName, lastName, email, number, message;
	let messageStatus = $state({});


	const sendMessage = async () => {
		try {
			if (firstName.value) {

				const inputData = {
					firstName: firstName.value,
					lastName: lastName.value,
					email: email.value,
					number: number.value,
					message: message.value
				};

				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(inputData)
				};
				const response = await fetch('/api/email/', options);
				const data = await response.json();
				messageStatus = {
					status: response.status,
					message: data.message,
					bg: response.status === 200 ? 'bg-green-500' : 'bg-red-500'
				};
				firstName.value = "";
				lastName.value = "";
				email.value = "";
				number.value = "";
				message.value = "";
				setTimeout(() => (messageStatus = {}), 3400);
			}
			return;
		} catch (err) {
			console.log(err.message);
		}
	};

</script>

<svelte:head>
	<title>Contact Lucienne Community School – We’d Love to Hear From You</title>
	<meta
		name="description"
		content="Get in touch with Lucienne Community School for inquiries, admissions, or partnerships. Let’s shape a brighter future together."
	/>
</svelte:head>

<main class="mt-[130px] min-h-screen px-5 py-10">
	<section class="mx-auto rounded-xl bg-white p-10 pt-5 drop-shadow-2xl lg:w-[800px]" data-aos="zoom-in">
		<SectionHeader>
			<h1 class="capitalize">Contact us</h1>
		</SectionHeader>
		<form class="mt-5 space-y-7 pb-5">
			<p
			class="rounded-lg px-5 text-center text-white transition-all duration-300 sm:px-5 {messageStatus.status
				? 'max-h-full py-3'
				: 'max-h-0 py-0'} {messageStatus.bg}"
			>
				{messageStatus.message}
			</p>

			<div class="flex flex-col sm:flex-row sm:gap-8 space-y-7 sm:space-y-0">
				<input bind:this={firstName} type="text" placeholder="First Name" />
				<input bind:this={lastName} type="text" placeholder="Last Name" />
			</div>

			<div>
				<input bind:this={email} type="text" placeholder="Email" />
			</div>

			<div>
				<input bind:this={number} type="tel" placeholder="Enter you number" />
			</div>

			<div>
				<textarea bind:this={message} placeholder="Message"></textarea>
			</div>
			<div>
				<button onclick={() => sendMessage()} type="button" class="cursor-pointer w-full sm:w-auto font-bold px-5 py-2 transition-all duration-300"
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
