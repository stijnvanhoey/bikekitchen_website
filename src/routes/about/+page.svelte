<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import aboutImg from '$lib/static/img/about-bg.webp';
	import uitpasImg from '$lib/static/img/uitpas-logo-bw.png';

	const description =
		'Wat is de Fietskeuken Gent? Ontdek onze doelstellingen, de RepareerBAaR-werking en hoe je met UitPas kan sparen.';
</script>

<svelte:head>
	<title>Over ons — Fietskeuken Gent</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://fietskeuken.org/about" />
	<meta property="og:title" content="Over de Fietskeuken Gent" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://fietskeuken.org/about" />
	<meta property="og:image" content="https://www.fietskeuken.org/img/logo_fk.webp" />
</svelte:head>

<FkHero imgUrl={aboutImg} header="Fietskeuken" subheader="Zelf je fiets repareren." />

<section class="text-darkgray body-font relative bg-white">
	<div class="container mx-auto max-w-screen-md px-5 py-5">
		<div class="mb-12 w-full px-5 text-left">
			<SectionHeading text="Que?" />
			<div class="flex flex-col">
				<p>
					De Fietskeuken Gent of 'bike kitchen' is een openbare uitlaatklep van het kloppend
					fietshart in Gent. In de eerste plaats is het een plek om fietscultuur te promoten in haar
					breedste zin. In de 'DIY' (Do It Yourself)-workshop of RepareerBAaR kunnen
					fietsliefhebbers vrijblijvend sleutelen en knutselen. Fietsen maken of kapot maken,
					ombouwen tot de gekste creaties, alles kan. De fietskeuken is een ontmoetingsplaats om
					passies te delen, creatief te wezen, iets te drinken... met de fiets als rode draad door
					de Brugse Poort en de stad Gent.
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Doelstellingen</h2>
				<ul>
					<li>
						Handen uit de mouwen! We willen mensen de mogelijkheid, het nodige materiaal en een
						ruimte bieden om aan hun fiets te sleutelen. Gaande van simpele reparaties, de
						jaarlijkse opsmuk van je stalen ros, tot het uitbouwen van een gepersonaliseerd
						kunstwerk op wielen!
					</li>
					<li>
						Respect voor materiaal. Recyclage van oude fietsen en onderdelen willen we zoveel
						mogelijk nastreven, bij ons krijgt alles een 10de leven als het kan!
					</li>
					<li>
						Iedereen is welkom! Een alternatieve economie kan misschien niet overal, maar in een
						fietskeuken is het op zijn plaats. Met het principe van 'vrije bijdrage' willen we de
						drempel zo laag mogelijk houden. Iedereen kan langskomen of actief meewerken, zowel
						actieve of occasionele fietsers.
					</li>
				</ul>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">
					Concurrentie voor de fietsenmaker?
				</h2>
				<p>
					De fietskeuken wil geen concurrent zijn voor de fietsenwinkels in het Gentse. Daarom
					verkopen wij, op enkele kleine dingen zoals remblokjes na, geen materiaal. Wie iets wil
					repareren zal dus eerst zijn gerief elders moeten kopen. Daarnaast staan wij open voor
					samenwerking met andere initiatieven in het kader van de fiets. Hoe meer belgerinkel, hoe
					leefbaarder onze stad!
				</p>

				<h2 class="text-darkgray mt-8 mb-4 text-2xl font-extrabold">Uitpas in Gent</h2>
				<p>
					Fietskeuken is verdeler van <a href="https://uitin.gent.be/uitpas/wat">UitPas</a> punten. UiTPAS
					Gent is een digitale kaart waarmee je aan cultuur, sport of jeugdactiviteiten kan doen. Je kan
					met de kaart UiTpunten sparen. Die kan je dan omruilen voor korting, een cadeau of een ander
					voordeel.
				</p>
				<div class="flex items-center justify-center">
					<a href="https://uitin.gent.be/">
						<img class="m-4 block" src={uitpasImg} alt="UitPAS" />
					</a>
				</div>
				<p>
					Wanneer je naar de Fietskeuken komt, vraag gerust aan iemand van de vrijwilligers om je
					kaart te kunnen scannen.
				</p>
			</div>
		</div>
	</div>
</section>
