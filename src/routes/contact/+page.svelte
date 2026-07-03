<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import contactImg from '$lib/static/img/contact-bg.webp';
	import logo from '$lib/static/img/logo_fk.webp';

	const description =
		'Vragen of suggesties voor de Fietskeuken Gent? Contacteer de vestiging in de Brugse Poort of in Ledeberg.';
</script>

<svelte:head>
	<title>Contact — Fietskeuken Gent</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://fietskeuken.org/contact" />
	<meta property="og:title" content="Contacteer de Fietskeuken Gent" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://fietskeuken.org/contact" />
	<meta property="og:image" content="https://www.fietskeuken.org/img/logo_fk.webp" />
</svelte:head>

<FkHero imgUrl={contactImg} header="Contact" subheader="Vragen?" />

<section class="text-lightgray bg-darkgray body-font relative">
	<div class="container mx-auto px-5 py-10 text-xl">
		<div class="mb-12 flex w-full flex-col items-center justify-center pt-6 text-center">
			<p>Heb je vragen, suggesties? Wil je graag actief meewerken aan de Fietskeuken?</p>

			<div class="container mx-auto max-w-screen-lg px-5 py-12">
				<div class="flex flex-wrap place-content-around gap-2">
					<LocationCard variant="brugse-poort" name="FK Brugse Poort">
						<p>
							Stuur je vraag door naar<br />
							<a
								href="mailto:info@fietskeuken.org?SUBJECT=Vraag%20via%20website"
								class="font-medium text-white hover:underline">FK Brugse Poort.</a
							>
						</p>
					</LocationCard>
					<LocationCard variant="ledeberg" name="FK Ledeberg">
						<p>
							Stuur je vraag door naar<br />
							<a
								href="mailto:fietskeukenledeberg@gmail.com?SUBJECT=Vraag%20via%20website"
								class="font-medium text-white hover:underline">FK Ledeberg.</a
							>
						</p>
					</LocationCard>
				</div>
			</div>

			<p>We contacteren je zo snel mogelijk!</p>
			<img src={logo} alt="Logo Fietskeuken" class="w-64 pt-12" />
		</div>
	</div>
</section>
