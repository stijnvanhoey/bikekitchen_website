<script>
	let { item } = $props();

	const date = $derived(new Date(item.date));
	const month = $derived(date.toLocaleDateString('nl-BE', { month: 'short' }));
	const year = $derived(date.getFullYear());
</script>

<article class="w-full px-4 py-8">
	<div class="flex h-full items-start">
		<div class="flex w-12 flex-shrink-0 flex-col text-center leading-none">
			<span class="text-darkgray border-darkgray mb-2 border-b-2 pb-2 capitalize">{month}</span>
			<span class="text-lightgray text-lg leading-none font-medium">{year}</span>
		</div>
		<div class="min-w-0 flex-grow pl-6 break-words">
			<p class="text-xs font-medium tracking-widest text-gray-500 uppercase">{item.location}</p>
			<h3 class="text-darkgray mb-3 text-xl font-medium">{item.title}</h3>

			{#if item.image}
				<img
					src={item.image.src}
					alt={item.image.alt}
					width="600"
					height="400"
					loading="lazy"
					class="mb-5 w-full max-w-md rounded"
				/>
			{/if}

			{#each item.paragraphs as paragraph (paragraph)}
				<p class="mb-5 leading-relaxed">{@html paragraph}</p>
			{/each}

			{#if item.list}
				<ul class="m-5 list-disc">
					{#each item.list as point (point)}
						<li>{point}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</article>
