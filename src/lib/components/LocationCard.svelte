<script>
	import LocationIcon from './LocationIcon.svelte';

	let { variant, name, children } = $props();
</script>

<div class="flex flex-col items-center justify-center px-4 py-4 shadow-lg shadow-neutral-900">
	<div class="flex h-32 w-32 items-center justify-center rounded-full bg-white text-gray-500">
		<LocationIcon {variant} />
	</div>
	<h2 class="m-4 text-2xl font-extrabold text-white">{name}</h2>
	{@render children()}
</div>
