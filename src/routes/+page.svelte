<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import HeaderStyled from '../lib/components/HeaderStyled.svelte';
</script>

<svelte:head>
	<title>Homepage Bikekitchen Ghent</title>
</svelte:head>

<FkHero imgUrl="img/home-bg.webp" header="Fietskeuken Gent" subheader="Bike repair and food" />

<section id="where" class="text-lightgray bg-darkgray body-font pt-8">
	<div class="container px-5 py-12 mx-auto max-w-screen-lg">
		<div class="flex flex-wrap gap-12 place-content-around">
			<div
				class="flex flex-col items-center justify-center px-12 py-4 shadow-lg shadow-neutral-900"
			>
				<div class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
					<svg
						class="w-24"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.867 19.125h.008v.008h-.008v-.008z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h2 class="text-2xl text-white font-extrabold m-4">FK Brugse Poort</h2>
				<p class="text-xl my-8">Donderdag: 18u - 21u30</p>
				<a href="https://goo.gl/maps/jufjmNWP3hALfHmf6" class="text-center">
					<p class="leading-loose font-bold text-lg">Meubelfabriek</p>
					<p>Meibloemstraat 18</p>
					<p>9000 Gent</p>
				</a>
			</div>
			<div
				class="flex flex-col items-center justify-center px-12 py-4 shadow-lg shadow-neutral-900"
			>
				<div class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
					<svg
						class="w-24"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<h2 class="text-2xl text-white font-extrabold m-4">FK Ledeberg</h2>
				<p class="text-xl my-8">Woensdag: 18u30 - 21u</p>
				<a href="https://goo.gl/maps/Y75sUcsPnFZaHzJb8" class="text-center">
					<p class="leading-loose font-bold text-lg">Standaertsite</p>
					<p>Standaertsite 1</p>
					<p>9050 Ledeberg</p>
				</a>
			</div>
		</div>
	</div>
</section>

<section id="news" class="text-darkgray bg-white body-font">
	<div class="container px-5 py-10 mx-auto max-w-screen-md">
		<HeaderStyled header="Nieuws" />
		<div class="flex flex-wrap -mx-4 my-8 text-lg md:text-base">
			<div class="blog-post py-8 px-4">
				<div class="h-full flex items-start">
					<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
						<span class="text-darkgray pb-2 mb-2 border-b-2 border-darkgray">Jan</span>
						<span class="font-medium text-lg text-lightgray leading-none title-font">2023</span>
					</div>
					<div class="flex-grow pl-6">
						<p class="tracking-widest text-xs title-font font-medium text-gray">
							FK Brugse Poort
						</p>
						<h2 class="title-font text-xl font-medium text-darkgray mb-3">
							Fietskeuken vanaf 9 februari op donderdag
						</h2>
						<p class="leading-relaxed mb-5">
							Voortaan zijn we enkel open op donderdag-avonden (zoals het vroeger was). Eerst
							volgende opening donderdag 9 februari van 18u tot 21u30.
						</p>
						<p class="leading-relaxed mb-5">Welkom!</p>
					</div>
				</div>
			</div>

			<div class="blog-post py-8 px-4">
				<div class="h-full flex items-start">
					<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
						<span class="text-darkgray pb-2 mb-2 border-b-2 border-darkgray">Dec</span>
						<span class="font-medium text-lg text-lightgray leading-none title-font">2022</span>
					</div>
					<div class="flex-grow pl-6">
						<p class="tracking-widest text-xs title-font font-medium text-gray">
							FK Brugse Poort
						</p>
						<h2 class="title-font text-xl font-medium text-darkgray mb-3">
							Afscheid van de maandagploeg
						</h2>
						<p class="leading-relaxed mb-5">
							Na jaren van noeste arbeid houdt onze maandagploeg er tot nader order mee op. Vanaf
							januari is er dus enkel nog een avondopening op dinsdag.
						</p>
						<p class="leading-relaxed mb-5">
							We gaan actief opzoek naar nieuwe vrijwilligers om opnieuw een namiddagwerking
							mogelijk te maken. Veel dankaan alle maandagmechaniekers voor menig duizend uren
							gesleutel!
						</p>
						<p class="leading-relaxed mb-5">
							Zoals altijd: heeft u zin om te komen vrijwilligen? Laat van u horen!
						</p>
					</div>
				</div>
			</div>

			<div class="blog-post py-8 px-4">
				<div class="h-full flex items-start">
					<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
						<span class="text-darkgray pb-2 mb-2 border-b-2 border-darkgray">Mei</span>
						<span class="font-medium text-lg text-lightgray leading-none title-font">2022</span>
					</div>
					<div class="flex-grow pl-6">
						<p class="tracking-widest text-xs title-font font-medium text-gray">
							FK Brugse Poort
						</p>
						<h2 class="title-font text-xl font-medium text-darkgray mb-3">
							Fietskeuken Brugse Poort open op dinsdag
						</h2>
						<p class="leading-relaxed mb-5">
							Voor wie de Fietskeuken reeds een tijdje bezoekt is donderdavond een vaste afspraak.
							Vanaf mei 2022 kan je ons bezoeken op dinsdagavond.
						</p>
						<p class="leading-relaxed mb-5">
							De maandagmiddag ploeg blijft natuurlijk ook nog steeds beschikbaar.
						</p>
					</div>
				</div>
			</div>

			<div class="blog-post py-8 px-4">
				<div class="h-full flex items-start">
					<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
						<span class="text-darkgray pb-2 mb-2 border-b-2 border-darkgray">Apr</span>
						<span class="font-medium text-lg text-lightgray leading-none title-font">2019</span>
					</div>
					<div class="flex-grow pl-6">
						<p class="tracking-widest text-xs title-font font-medium text-gray">
							FK Brugse Poort
						</p>
						<h2 class="title-font text-xl font-medium text-darkgray mb-3">
							Nieuw adres Fietskeuken Brugse Poort!
						</h2>
						<p class="leading-relaxed mb-5">
							Vanaf mei 2019 is de Fietskeuken Brugse Poort terug actief in de Meubelfabriek,
							Meibloemstraat 18.
						</p>
						<p class="leading-relaxed mb-5">
							Alvast een serieuze dankjewel aan Treck Hostel om enkele jaren onderdak te
							verschaffen. Merci voor de fijne samenwerking!
						</p>
						<p class="leading-relaxed mb-5">
							In de meubelfabriek zullen we onder goed gezelschap, check zeker eens de
							<a href="https://www.facebook.com/meubelfabriek/" class="underline"
								>facebook pagina van de Meubelfabriek</a
							>. Hopelijk tot binnenkort!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
