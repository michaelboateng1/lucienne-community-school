<script>
	import logo from '$lib/assets/images/school-logo.jpg';
</script>

<section class="bg[#fff] container mx-auto flex items-center justify-between p-4">
	<a href="/">
		<div class="h-16 w-16">
			<img src={logo} alt="School Logo" class="h-full w-full object-cover" />
		</div>
	</a>

	<div class="md:hidden">
		<i class="fa-solid fa-bars text-2xl text-[#2a6be1]"></i>
	</div>

	<nav class="hidden md:block">
		<ul class="flex list-none space-x-4 bg-[#fff] px-4">
			<li>
				<a
					href="/"
					class=" hover:before:content-[' '] relative px-4 py-8 text-lg text-[#2a6be1] transition-all duration-300 before:absolute before:top-[70%] before:left-0 before:block before:h-1 before:w-0 before:transform before:rounded-4xl before:bg-[#cb0101] before:opacity-0 before:transition-all before:duration-300 hover:text-[#cb0101] hover:before:w-full hover:before:opacity-100"
					>Home</a
				>
			</li>
			<li>
				<a
					href="/about"
					class="hover:before:content-[' '] relative px-4 py-8 text-lg text-[#2a6be1] before:absolute before:top-[70%] before:left-0 before:block before:h-1 before:w-0 before:transform before:rounded-4xl before:bg-[#2a6be1] before:bg-[#cb0101] before:opacity-0 before:transition-all before:duration-300 hover:text-[#cb0101] hover:before:w-full hover:before:opacity-100"
					>About</a
				>
			</li>
			<li>
				<a
					href="/admissions"
					class="hover:before:content-[' '] relative px-4 py-8 text-lg text-[#2a6be1] before:absolute before:top-[70%] before:left-0 before:block before:h-1 before:w-0 before:transform before:rounded-4xl before:bg-[#2a6be1] before:bg-[#cb0101] before:opacity-0 before:transition-all before:duration-300 hover:text-[#cb0101] hover:before:w-full hover:before:opacity-100"
					>Admissions</a
				>
			</li>
			<li>
				<a
					href="/academics"
					class="hover:before:content-[' '] relative px-4 py-8 text-lg text-[#2a6be1] before:absolute before:top-[70%] before:left-0 before:block before:h-1 before:w-0 before:transform before:rounded-4xl before:bg-[#2a6be1] before:bg-[#cb0101] before:opacity-0 before:transition-all before:duration-300 hover:text-[#cb0101] hover:before:w-full hover:before:opacity-100"
					>Academics</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class="hover:before:content-[' '] relative px-4 py-8 text-lg text-[#2a6be1] before:absolute before:top-[70%] before:left-0 before:block before:h-1 before:w-0 before:transform before:rounded-4xl before:bg-[#2a6be1] before:bg-[#cb0101] before:opacity-0 before:transition-all before:duration-300 hover:text-[#cb0101] hover:before:w-full hover:before:opacity-100"
					>Contact</a
				>
			</li>
		</ul>
	</nav>
</section>
