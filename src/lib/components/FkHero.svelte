<script>
	export let imgUrl;
	export let header;
	export let subheader;
</script>

<section class="relative bg-cover bg-center bg-no-repeat" style="background-image: url({imgUrl})">
	<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6">
		<div class="text-center">
			<h1 class="text-5xl text-white font-extrabold md:text-7xl bg-blue bg-clip-padding inline-block p-1">{header}</h1>
			<hr class="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-6" />
			<h1 class="text-2xl text-white font-light md:text-4xl bg-blue bg-clip-padding inline-block p-1">{subheader}</h1>
		</div>
	</div>
</section>
