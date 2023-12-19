<script lang="ts">
	import { browser } from '$app/environment';
	import { Button, Photo, PhotoContainer, Text } from '$lib/index.js';
	import t from '$lib/stores/t.js';
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	export let data;

	t.set(data.texts);

	let line: SVGPathElement;
	let scrollText: HTMLSpanElement;
	let width: number;

	onMount(() => {
		const length = line.getTotalLength();
		line.style.strokeDasharray = length + '' + length;
		line.style.strokeDashoffset = length.toString();

		window.addEventListener('scroll', () => {
			const scrollPercentage =
				(document.documentElement.scrollTop + document.body.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight);

			const drawLength = length * scrollPercentage;
			line.style.strokeDashoffset = (length - drawLength).toString();

			if (scrollPercentage >= 0.99) {
				line.style.strokeDasharray = 'none';
			} else {
				line.style.strokeDasharray = length + ' ' + length;
			}
		});
	});
</script>

<svelte:window bind:innerWidth={width} />

<div class="absolute z-50 flex justify-center w-full pt-12">
	<div class="container flex items-center justify-between">
		<Photo class="h-16" src="/burger66-transparent.svg" alt="Burger Logo" />
		<Button
			id="header.cta"
			class="p-6 py-4 font-bold text-white duration-200 border-2 bg-secondary hover:bg-primary hover:border-primary border-secondary"
		/>
	</div>
</div>

<PhotoContainer
	class="flex flex-col items-center justify-center px-4 h-[80vh] md:h-[70vh] gap-4 text-white text-center bg-black/50"
	src="/route66.jpg"
>
	<h1>
		<Text id="home.hero.heading" />
	</h1>

	<p class="max-w-2xl text-lg md:text-2xl">
		<Text id="home.hero.text" />
	</p>
</PhotoContainer>

<div class="py-4 overflow-hidden text-3xl text-white bg-black">
	<div class="flex gap-2" id="scroll" style="--scroll: -{scrollText?.clientWidth + 8}px">
		<span class="block whitespace-nowrap" bind:this={scrollText}>
			<Text id="home.scroll" />
		</span>

		{#key width}
			{#if browser && scrollText}
				{#each { length: Math.ceil(width / scrollText.clientWidth) } as _}
					<span class="block whitespace-nowrap">
						<Text id="home.scroll" />
					</span>
				{/each}
			{/if}
		{/key}
	</div>
</div>

<div class="relative grid grid-cols-1 md:grid-cols-2">
	<svg
		class="absolute hidden h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 stroke-black left-1/2 top-1/2"
		viewBox="0 0 762 1004"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			bind:this={line}
			d="M185 1C185 1 199.306 34.4199 213.5 52.5C243.779 91.0674 273.649 103.005 320 119C425.959 155.564 488.91 60.5 601 60.5C662 60.5 706.493 85.2197 738 138C784.592 216.05 755.297 322.901 673 361.5C619.659 386.518 562.646 307.509 516 343.5C504.405 352.447 496.58 363.86 497 378.5C497.6 399.384 532.116 402.684 544 385.5C552.219 373.616 553.349 355.666 550.5 341.5C536.334 271.054 437.335 271.357 366 280C260.723 292.756 176.5 348.5 107 421.5C78.7179 451.207 41.402 488.095 27.0001 526.5C6.00005 582.5 -20.2962 646.858 34.0001 702C59.7401 728.141 82.6663 736.926 119 742C193.383 752.388 211.447 650.297 286.5 647.5C337.452 645.601 376.175 648.702 421 673C474.5 702 500.499 737.697 550.5 781C598.212 822.32 621.994 849.182 662 898C694.085 937.152 738 1003 738 1003"
			stroke-width="1"
		/>
	</svg>

	<div class="md:hidden">
		<PhotoContainer src="/la.jpg" class="flex items-end justify-center h-full">
			<Photo src="/burger.png" alt="Burger" class="z-20 mt-24 -mb-8 md:-mb-12 h-44 md:h-80" />
		</PhotoContainer>
	</div>
	<div class="container flex justify-center py-16 md:py-32 md:px-16">
		<div class="flex flex-col gap-4">
			<h2>
				<Text id="home.section1.heading" />
			</h2>
			<p class="max-w-lg">
				<Text id="home.section1.text" />
			</p>
			{#if $t['home.section1.cta']}
				<Button
					id="home.section1.cta"
					class="p-6 py-4 font-bold text-white duration-200 border-2 bg-secondary hover:bg-transparent hover:text-black hover:border-black border-secondary"
				/>
			{/if}
		</div>
	</div>
	<div class="hidden md:block">
		<PhotoContainer fullHeight src="/la.jpg" class="flex items-end justify-center h-full">
			<Photo src="/burger.png" alt="Burger" class="z-20 mt-24 -mb-8 md:-mb-12 h-44 md:h-80" />
		</PhotoContainer>
	</div>

	<PhotoContainer src="/miami.jpg" class="flex items-end justify-center h-full">
		<Photo src="/burger.png" alt="Burger" class="z-20 mt-24 -mb-8 md:-mb-12 h-44 md:h-80" />
	</PhotoContainer>
	<div class="container flex justify-center py-16 md:py-32 md:px-16">
		<div class="flex flex-col gap-4">
			<h2>
				<Text id="home.section2.heading" />
			</h2>
			<p class="max-w-lg">
				<Text id="home.section2.text" />
			</p>
			{#if $t['home.section2.cta']}
				<Button
					id="home.section2.cta"
					class="p-6 py-4 font-bold text-white duration-200 border-2 bg-secondary hover:bg-transparent hover:text-black hover:border-black border-secondary"
				/>
			{/if}
		</div>
	</div>

	<div class="md:hidden">
		<PhotoContainer src="/chicago.jpg" class="flex items-end justify-center h-full">
			<Photo src="/burger.png" alt="Burger" class="z-20 mt-24 -mb-8 md:-mb-12 h-44 md:h-80" />
		</PhotoContainer>
	</div>
	<div class="container flex justify-center py-16 md:py-32 md:px-16">
		<div class="flex flex-col gap-4">
			<h2>
				<Text id="home.section3.heading" />
			</h2>
			<p class="max-w-lg">
				<Text id="home.section3.text" />
			</p>
			{#if $t['home.section3.cta']}
				<Button
					id="home.section3.cta"
					class="p-6 py-4 font-bold text-white duration-200 border-2 bg-secondary hover:bg-transparent hover:text-black hover:border-black border-secondary"
				/>
			{/if}
		</div>
	</div>
	<div class="hidden md:block">
		<PhotoContainer fullHeight src="/chicago.jpg" class="flex items-end justify-center h-full">
			<Photo src="/burger.png" alt="Burger" class="z-20 mt-24 -mb-8 md:-mb-12 h-44 md:h-80" />
		</PhotoContainer>
	</div>
</div>

<iframe
	title="Eiffeltornet"
	class="object-cover"
	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916261172157!2d2.2919010132737765!3d48.858370071212626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffeltornet!5e0!3m2!1ssv!2sse!4v1702897470515!5m2!1ssv!2sse"
	width="100%"
	height="450"
	style="border:0;"
	allowfullscreen={false}
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
/>

<style>
	#scroll {
		animation: scroll 3s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(var(--scroll), 0);
		}
	}
</style>
