<script>
	export let imgUrl;
	export let header;
	export let subheader;
</script>

<section class="relative bg-cover bg-center bg-no-repeat" style="background-image: url({imgUrl})">
	<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6">
		<div class="text-center">
			<h1 class="text-5xl font-extrabold md:text-7xl">
				<!-- https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even -->
				<span class="relative inline-block">
					<span class="block absolute -inset-2 -skew-y-2 bg-blue" aria-hidden="true" />
					<span class="relative text-white">{header}</span>
					<!-- <h1 class="text-5xl text-white font-extrabold md:text-7xl">{header}</h1> -->
				</span>
			</h1>
			<hr class="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-6" />
			<strong class="block text-2xl font-light text-white md:text-4xl">
				<span class="relative">
					<span class="block absolute -inset-1 -skew-y-4 bg-blue" aria-hidden="true" />
					<span class="relative text-white">{subheader}</span>
				</span>
			</strong>
		</div>
	</div>
</section>
