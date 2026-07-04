<script>
	let { text, level = 'h2' } = $props();
</script>

<svelte:element
	this={level}
	class="bg-blue my-8 inline-block bg-clip-padding p-1 text-3xl font-extrabold text-white"
>
	{text}
</svelte:element>
