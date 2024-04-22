<script>
	import FkHero from '$lib/components/FkHero.svelte';
	import contactImg from '$lib/static/img/contact-bg.webp';
	import logo from '$lib/static/img/logo_fk.webp';
</script>

<svelte:head>
	<title>Contact Bikekitchen Ghent</title>
</svelte:head>

<FkHero imgUrl={contactImg} header="Contact" subheader="Vragen?" />

<section class="text-lightgray bg-darkgray body-font relative">

	<div class="container px-5 py-10 mx-auto text-xl">
		<div class="flex flex-col text-center w-full mb-12 pt-6 justify-center items-center">
			<p>Heb je vragen, suggesties? Wil je graag actief meewerken aan de Fietskeuken?</p>



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
				<p>
					Stuur je vraag door naar
					<a
						href="mailto:info@fietskeuken.org?SUBJECT=Vraag%20via%20website"
						class="font-medium text-white hover:underline">FK Brugse Poort.</a
					>
				</p>
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
				<p>
					Stuur je vraag door naar
					<a
						href="mailto:fietskeukenledeberg@gmail.com?SUBJECT=Vraag%20via%20website"
						class="font-medium text-white hover:underline">FK Ledeberg.</a
					>
				</p>
			</div>
		</div>
	</div>

	<p>We contacteren je zo snel mogelijk!</p>
	<img src={logo} alt="Logo Fietskeuken" class="w-64 pt-12" />
</div>
</div>

</section>
