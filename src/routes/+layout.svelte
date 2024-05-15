<script>
	import '../app.postcss';
	import logo from '$lib/static/img/logo_fk.webp';

	const navItems = [
		{ label: 'Waar', href: '/#where' },
		{ label: 'Nieuws', href: '/#news' },
		{ label: 'Over', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	// Show mobile icon and display menu
	let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	const handleMobileSwitch = () => {
		if (showMobileMenu) {
			showMobileMenu = !showMobileMenu;
		}
	};
</script>

<svelte:head>
	<title>Fietskeuken Gent</title>
	<link rel="icon" href="/img/favicon.ico" />

	<meta
		name="description"
		content="Tijdens de RepareerBAaR van de Fietskeuken kunnen fietsliefhebbers vrijblijvend sleutelen met hulp van de vrijwilligers."
	/>

	<meta property="og:title" content="Fietskeuken Gent, in Ledeberg en de Brugse Poort" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fietskeuken.org" />
	<meta
		property="og:description"
		content="Tijdens de RepareerBAaR van de Fietskeuken kunnen fietsliefhebbers vrijblijvend sleutelen met hulp van de vrijwilligers."
	/>
	<meta property="og:image" content="https://www.fietskeuken.org/img/logo_fk.webp" />
	<meta property="og:image:width" content="450" />
	<meta property="og:image:height" content="450" />
	<script data-goatcounter="https://fietskeuken.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
</svelte:head>

<header
	aria-label="Bike kitchen Ghent"
	class="bg-white fixed top-0 left-0 right-0 z-10"
>
	<nav
		class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 md:flex md:items-center md:justify-between"
		aria-label="Site Nav"
	>
		<div class="flex items-center justify-between h-16">
			<div class="flex-1 flex items-center gap-4">
				<img src={logo} alt="Logo Fietskeuken" class="w-12 h-12" />
				<a
					href="/"
					class="text-lg text-darkgray font-bold hover:text-lightgray"
					on:click={handleMobileSwitch}>Fietskeuken Gent<span class="sr-only">Home</span></a
				>
			</div>
			<div class="flex items-center gap-4 md:hidden">
				<button
					class="rounded bg-white p-2 text-darkgray transition hover:text-lightgray"
					on:click={handleMobileIconClick}
					aria-label="Menu toggle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		<div
			class="flex space-y-4 bg-white md:flex md:items-center md:gap-12 {showMobileMenu
				? 'flex float-right text-right'
				: 'hidden'}"
		>
			<ul class="items-center gap-6 text-sm {showMobileMenu ? 'flex-col' : 'flex'}">
				{#each navItems as item}
					<li class="p-2">
						<a
							class="text-darkgray transition hover:text-lightgray font-medium text-lg"
							href={item.href}
							on:click={handleMobileSwitch}
						>
							{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>

<main class="relative pt-16">
	<slot />
</main>

<footer class="text-darkgray body-font">
	<div class="container px-5 py-8 mx-auto flex items-center flex-col">
		<div
			class="flex title-font font-medium items-center md:justify-start justify-center text-darkgray"
		>
			<img src={logo} alt="Logo Fietskeuken" class="w-6 h-6" />
			<span class="ml-3 text-xl">Fietskeuken Gent</span>
		</div>
		<div class="container flex px-8 py-8  mx-auto justify-start lg:flex-row flex-col max-w-xs md:max-w-fit">
			<p
			class="text-sm text-lightgray sm:ml-4 sm:pl-4 lg:border-l lg:border-lightgray sm:py-2 sm:mt-0 mt-4"
		>
			FK Brugse Poort - Fietskeuken Gent VZW<br>
			Meibloemstraat 18, 9000 Gent<br>
			Email: <a href="mailto:info@fietskeuken.org?SUBJECT=Vraag%20via%20website%20footer%20link">info@fietskeuken.org</a><br>
			Ondernemingsnummer: 834.610.269<br>
			Rekeningnummer: BE95 8939 4404 2158<br>
			RPR, Ondernemingsrechtbank te Gent<br><br>
		</p>
		<p
			class="text-sm text-lightgray sm:ml-4 sm:pl-4 lg:border-l lg:border-lightgray sm:py-2 sm:mt-0 mt-4"
		>
			FK Ledeberg - Fietskeuken Ledeberg<br>
			Standaertsite 1, 9050 Ledeberg<br>
			Rekeningnummer: BE90 3636 2351 5232<br>
			Email: <a href="mailto:fietskeukenledeberg@gmail.com?SUBJECT=Vraag%20via%20website%20footer%20link">fietskeukenledeberg@gmail.com</a>
		</p>
		<p
			class="text-sm text-lightgray sm:ml-4 sm:pl-4 lg:border-l lg:border-lightgray sm:py-2 sm:mt-0 mt-4"
		>
			FK Bloemekenswijk<br>
			Jan Yoensplein, 9000 Gent<br>
			Email: <a href="mailto:fietskeukenbloemekenswijk@gmail.com?SUBJECT=Vraag%20via%20website%20footer%20link">fietskeukenbloemekenswijk@gmail.com</a><br>
			Rekeningnummer: BE13363186230239<br><small>(vermelding: "FK bloemekenswijk" bij storting)</small>
		</p>
		</div>
		<p class="text-sm text-lightgray sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 text-center">Logo by Koen Degroote<br>Photos by Daan Van Hauwermeiren</p>
		<div class="items-center">
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<a
					class="ml-3 text-lightgray"
					href="https://www.facebook.com/pages/Fietskeuken-Gent-Bike-kitchen-Ghent/150152548379572"
					aria-label="Read more about the bike kitchen on Facebook"
				>
					<svg
						class="w-5 h-5"
						viewBox="0 0 24 24"
						width="24px"
						height="24px"
						id="icon_facebook"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0" />
						<g id="SVGRepo_iconCarrier"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
							/></g
						></svg
					>
				</a>
				<a
					class="ml-3 text-lightgray"
					href="https://github.com/stijnvanhoey/bikekitchen_website"
					aria-label="Check out the source code of the bike kitchen on Github"
				>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						,=""
						class="w-5 h-5"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
						/>
					</svg>
				</a>
			</span>
		</div>
	</div>
</footer>
