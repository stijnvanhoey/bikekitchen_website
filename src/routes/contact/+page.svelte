<script>
	import FkHero from '$lib/components/FkHero.svelte';
</script>

<svelte:head>
	<title>Contact Bikekitchen Ghent</title>
</svelte:head>

<FkHero imgUrl="img/contact-bg.webp" header="Contact" subheader="Vragen?" />

<section class="text-lightgray bg-darkgray body-font relative">
	<div class="container px-5 py-10 mx-auto text-xl">
		<div class="flex flex-col text-center w-full mb-12 pt-6 justify-center items-center">
			<p>Heb je vragen, suggesties? Wil je graag actief meewerken aan de Fietskeuken?</p>
			<p>
				Stuur je vraag door naar
				<a
					href="mailto:info@fietskeuken.org?SUBJECT=Vraag%20via%20website"
					class="font-medium text-white hover:underline">de fietskeuken</a
				>
				en we contacteren je zo snel mogelijk.
			</p>

			<img src="img/logo_fk.webp" alt="Logo Fietskeuken" class="w-64 pt-12" />
		</div>
	</div>
</section>
