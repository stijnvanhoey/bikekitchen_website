<script>
	let { imgUrl, header, subheader } = $props();
</script>

<section class="relative bg-cover bg-center bg-no-repeat" style="background-image: url({imgUrl})">
	<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6">
		<div class="text-center">
			<h1
				class="bg-blue inline-block bg-clip-padding p-1 text-5xl font-extrabold text-white md:text-7xl"
			>
				{header}
			</h1>
			<hr class="mx-auto my-4 h-1 w-48 rounded border-0 bg-white md:my-6" />
			<p
				class="bg-blue inline-block bg-clip-padding p-1 text-2xl font-light text-white md:text-4xl"
			>
				{subheader}
			</p>
		</div>
	</div>
</section>
