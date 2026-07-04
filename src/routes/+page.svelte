<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import NewsItem from '$lib/components/NewsItem.svelte';
	import { newsItems } from '$lib/data/news.js';
	import homeImg from '$lib/static/img/home-bg.webp';

	const description =
		'Tijdens de RepareerBAaR van de Fietskeuken kunnen fietsliefhebbers vrijblijvend sleutelen met hulp van de vrijwilligers.';

	// keep these opening hours in sync with the LocationCard content below — manual step
	const localBusinessJsonLd = JSON.stringify([
		{
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: 'Fietskeuken Gent - Brugse Poort',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Meibloemstraat 18',
				postalCode: '9000',
				addressLocality: 'Gent',
				addressCountry: 'BE'
			},
			openingHoursSpecification: {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Thursday',
				opens: '16:00',
				closes: '21:30'
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: 'Fietskeuken Ledeberg',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Standaertsite 1',
				postalCode: '9050',
				addressLocality: 'Ledeberg',
				addressCountry: 'BE'
			},
			openingHoursSpecification: {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Wednesday',
				opens: '18:30',
				closes: '21:00'
			}
		}
	]);
</script>

<svelte:head>
	<title>Fietskeuken Gent</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://fietskeuken.org/" />
	<meta property="og:title" content="Fietskeuken Gent, in Ledeberg en de Brugse Poort" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://fietskeuken.org" />
	<meta property="og:image" content="https://www.fietskeuken.org/img/logo_fk.webp" />
	<meta property="og:image:width" content="450" />
	<meta property="og:image:height" content="450" />

	{@html '<' + 'script type="application/ld+json">' + localBusinessJsonLd + '<' + '/script>'}
</svelte:head>

<FkHero imgUrl={homeImg} header="Fietskeuken Gent" subheader="Bike repair and food" />

<section id="where" class="text-lightgray bg-darkgray body-font pt-8">
	<div class="container mx-auto max-w-screen-lg px-5 py-12">
		<div class="flex flex-wrap place-content-around gap-2">
			<LocationCard variant="brugse-poort" name="FK Brugse Poort">
				<p class="my-1 text-center text-xl">Heel vaak open op<br />donderdag van 16:00 - 21:30</p>
				<p class="mb-8 text-center text-sm">
					Om helemaal zeker te zijn, check
					<a href="https://www.facebook.com/FietskeukenGent" class="underline">Facebook</a>
				</p>
				<a href="https://goo.gl/maps/jufjmNWP3hALfHmf6" class="text-center">
					<p class="text-lg leading-loose font-bold">Meubelfabriek</p>
					<p>Meibloemstraat 18</p>
					<p>9000 Gent</p>
				</a>
			</LocationCard>
			<LocationCard variant="ledeberg" name="FK Ledeberg">
				<p class="my-4 text-xl">Woensdag: 18u30 - 21u</p>
				<p class="mb-8 text-center text-sm">
					Voor up to date info, check
					<a href="https://www.facebook.com/fietskeukenledeberg" class="underline">Facebook</a>
				</p>
				<a href="https://goo.gl/maps/Y75sUcsPnFZaHzJb8" class="text-center">
					<p class="text-lg leading-loose font-bold">Standaertsite</p>
					<p>Standaertsite 1</p>
					<p>9050 Ledeberg</p>
				</a>
			</LocationCard>
		</div>
	</div>
</section>

<section id="news" class="text-darkgray body-font bg-white">
	<div class="container mx-auto max-w-screen-md px-5 py-10">
		<SectionHeading text="Nieuws" />
		<div class="my-8 flex flex-wrap text-lg md:text-base">
			{#each newsItems as item (item.slug)}
				<NewsItem {item} />
			{/each}
		</div>
	</div>
</section>
