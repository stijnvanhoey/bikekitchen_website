<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import HeaderStyled from '../../lib/components/HeaderStyled.svelte';
</script>

<svelte:head>
	<title>About Bikekitchen Ghent</title>
</svelte:head>

<FkHero imgUrl="img/about-bg.webp" header="Fietskeuken" subheader="Zelf je fiets repareren." />

<section class="bg-white text-darkgray body-font relative">
	<div class="container px-5 py-5 mx-auto max-w-screen-md">
		<div class="flex flex-col text-left w-full mb-12 px-5">
			<HeaderStyled header="Que?" />
			<p>
				De Fietskeuken Gent of ‘bike kitchen’ is een openbare uitlaatklep van het kloppend fietshart
				in Gent. In de eerste plaats is het een plek om fietscultuur te promoten in haar breedste
				zin. In de ‘DIY’ (Do It Yourself)-workshop of RepareerBAaR kunnen fietsliefhebbers
				vrijblijvend sleutelen en knutselen. Fietsen maken of kapot maken, ombouwen tot de gekste
				creaties, alles kan. De fietskeuken is een ontmoetingsplaats om passies te delen, creatief
				te wezen, iets te drinken… met de fiets als rode draad door de Brugse Poort en de stad Gent.
			</p>

			<h2 class="text-2xl text-darkgray font-extrabold mt-8 mb-4">Doelstellingen</h2>
			<ul>
				<li>
					Handen uit de mouwen! We willen mensen de mogelijkheid, het nodige materiaal en een ruimte
					bieden om aan hun fiets te sleutelen. Gaande van simpele reparaties, de jaarlijkse opsmuk
					van je stalen ros, tot het uitbouwen van een gepersonaliseerd kunstwerk op wielen!
				</li>
				<li>
					Respect voor materiaal. Recyclage van oude fietsen en onderdelen willen we zoveel mogelijk
					nastreven, bij ons krijgt alles een 10de leven als het kan!
				</li>
				<li>
					Iedereen is welkom! Een alternatieve economie kan misschien niet overal, maar in een
					fietskeuken is het op zijn plaats. Met het principe van ‘vrije bijdrage’ willen we de
					drempel zo laag mogelijk houden. Iedereen kan langskomen of actief meewerken, zowel
					actieve of occasionele fietsers…
				</li>
			</ul>

			<h2 class="text-2xl text-darkgray font-extrabold mt-8 mb-4">
				Concurrentie voor de fietsenmaker?
			</h2>
			<p>
				De fietskeuken wil geen concurrent zijn voor de fietsenwinkels in het Gentse. Daarom
				verkopen wij, op enkele kleine dingen zoals remblokjes na, geen materiaal. Wie iets wil
				repareren zal dus eerst zijn gerief elders moeten kopen. Daarnaast staan wij open voor
				samenwerking met andere initiatieven in het kader van de fiets. Hoe meer belgerinkel, hoe
				leefbaarder onze stad!
			</p>

			<h2 class="text-2xl text-darkgray font-extrabold mt-8 mb-4">Uitpas in Gent</h2>
			<p>
				Fietskeuken is verdeler van <a href="https://uitin.gent.be/uitpas/wat">UitPas</a> punten. UiTPAS
				Gent is een digitale kaart waarmee je aan cultuur, sport of jeugdactiviteiten kan doen. Je kan
				met de kaart UiTpunten sparen. Die kan je dan omruilen voor korting, een cadeau of een ander
				voordeel.
			</p>
			<div class="flex items-center justify-center">
				<a href="https://uitin.gent.be/">
					<img class="block m-4" src="img/uitpas-logo-bw.png" alt="UitPAS" />
				</a>
			</div>
			<p>
				Wanneer je naar de Fietskeuken komt, vraag gerust aan iemand van de vrijwilligers om je
				kaart te kunnen scannen.
			</p>
		</div>
	</div>
</section>
