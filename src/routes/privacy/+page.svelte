<script>
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	const description =
		'Privacybeleid van de Fietskeuken Gent website: welke gegevens we verwerken, met welk doel en op welke rechtsgrond.';
</script>

<svelte:head>
	<title>Privacybeleid — Fietskeuken Gent</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://fietskeuken.org/privacy" />
	<meta property="og:title" content="Privacybeleid — Fietskeuken Gent" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://fietskeuken.org/privacy" />
	<meta property="og:image" content="https://www.fietskeuken.org/img/logo_fk.webp" />
</svelte:head>

<section class="text-darkgray body-font relative bg-white">
	<div class="container mx-auto max-w-screen-md px-5 py-5">
		<div class="mb-12 w-full px-5 text-left">
			<SectionHeading text="Privacybeleid" level="h1" />
			<div class="flex flex-col">
				<p class="p-4 italic">Laatst bijgewerkt: 2025-11-17</p>

				<p>
					Wij stellen uw privacy voorop. Deze website is door Fietskeuken Gent VZW ontworpen om met
					minimale gegevensverwerking te functioneren en zonder individuele bezoekers te
					identificeren. In dit beleid leggen we uit welke informatie we verwerken, voor welk doel
					en op welke rechtsgrond, in overeenstemming met de toepasselijke wetgeving inzake de
					bescherming van persoonsgegevens.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Gegevens die wij verzamelen</h2>
				<p>
					Wij verzamelen alleen anonieme, geaggregeerde, niet-herleidbare statistieken over bezoeken
					aan onze website. Concreet:
				</p>
				<ul class="m-5 list-disc">
					<li>Wij slaan geen IP-adressen op.</li>
					<li>Wij slaan niet de volledige User-Agent-header of enige unieke identifier op.</li>
					<li>
						Wij gebruiken geen cookies, localStorage, cache-identifiers, fingerprinting of andere
						methoden om informatie op jouw apparaat op te slaan of uit te lezen.
					</li>
					<li>
						De statistische gegevens die wij verzamelen kunnen niet worden gebruikt om jou te
						identificeren en zijn niet aan jou als individu te koppelen.
					</li>
				</ul>
				<p>
					Om deze anonieme statistieken te verzamelen maken we gebruik van
					<a href="https://www.goatcounter.com">GoatCounter</a>. Check de
					<a href="https://www.goatcounter.com/help/privacy">GoatCounter privacy policy</a> voor meer
					technische details.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Doel en rechtsgrond</h2>
				<p>
					De anonieme statistische gegevens worden uitsluitend verwerkt om het algemene gebruik van
					de website te begrijpen, zoals geaggregeerde tellingen van paginaweergaven. Omdat de
					gegevens volledig geanonimiseerd zijn en geen persoonsgegevens bevatten, is de AVG niet
					langer van toepassing. Wij publiceren dit beleid uit oogpunt van transparantie.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Delen van gegevens</h2>
				<p>
					Wij delen geen gegevens met derden, met uitzondering van de gebruikte service
					<a href="https://www.goatcounter.com">GoatCounter</a>.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Bewaartermijnen</h2>
				<p>
					Anonieme, geaggregeerde statistieken woorden voor interne analyses bewaard. Deze bevatten
					geen persoonsgegevens en zijn niet tot individuen te herleiden.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Jouw rechten</h2>
				<p>
					Wij verwerken geen persoonsgegevens. Heb je toch vragen over ons privacybeleid, dan kun je
					contact met ons opnemen via
					<a href="mailto:info@fietskeuken.org?SUBJECT=Vraag%20via%20website%20Privacy%20policy"
						>info@fietskeuken.org</a
					>
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Wijzigingen in dit beleid</h2>
				<p>
					Wij kunnen dit beleid bijwerken om te blijven voldoen aan toepasselijke regelgeving. De
					datum 'Laatst bijgewerkt' geeft de meest recente versie weer.
				</p>
			</div>
		</div>
	</div>
</section>
