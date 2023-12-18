<script lang="ts">
	import { Button, Photo, PhotoContainer, Text } from '$lib/index.js';
	import t from '$lib/stores/t.js';

	export let data;

	t.set(data.texts);
</script>

<div class="absolute z-50 flex justify-center w-full pt-12">
	<div class="container flex items-center justify-between">
		<Photo class="h-24" src="/logo.png" alt="Burger Logo" />
		<Button
			id="home.hero.cta1"
			class="p-6 py-4 font-bold duration-200 border-2 bg-primary hover:bg-transparent hover:text-white hover:border-white border-primary"
		/>
	</div>
</div>

<PhotoContainer
	class="flex flex-col items-center justify-center h-[70vh] gap-6 text-center bg-black/50"
	src="/burger.jpg"
>
	<h1 class="text-primary">
		<!-- svelte-ignore missing-declaration -->
		<Text id="home.hero.heading" />
	</h1>

	<div class="flex gap-4">
		<Button
			id="home.hero.cta1"
			class="p-6 py-4 font-bold duration-200 border-2 bg-primary hover:bg-transparent hover:text-white hover:border-white border-primary"
		/>
		<Button
			id="home.hero.cta2"
			class="p-6 py-4 font-bold duration-200 border-2 border-primary text-primary hover:bg-white hover:border-white hover:text-black"
		/>
	</div>
</PhotoContainer>

<div class="grid grid-cols-2">
	<div class="flex justify-center px-16 py-32">
		<div class="flex flex-col gap-8">
			<h2>
				<Text id="home.section1.heading" />
			</h2>
			<p class="w-[36rem]">
				<Text id="home.section1.text" />
			</p>
			{#if $t['home.section1.cta']}
				<Button
					id="home.section1.cta"
					class="p-6 py-4 font-bold duration-200 border-2 bg-primary hover:bg-transparent hover:text-black hover:border-black border-primary"
				/>
			{/if}
		</div>
	</div>
	<PhotoContainer src="/inside.jpg" />

	<PhotoContainer src="/hamburger.jpg" />
	<div class="flex justify-center px-16 py-32">
		<div class="flex flex-col gap-8">
			<h2>
				<Text id="home.section2.heading" />
			</h2>
			<p class="w-[36rem]">
				<Text id="home.section2.text" />
			</p>
			{#if $t['home.section2.cta']}
				<Button
					id="home.section2.cta"
					class="p-6 py-4 font-bold duration-200 border-2 bg-primary hover:bg-transparent hover:text-black hover:border-black border-primary"
				/>
			{/if}
		</div>
	</div>

	<div class="flex justify-center px-16 py-32">
		<div class="flex flex-col gap-8">
			<h2>
				<Text id="home.section3.heading" />
			</h2>
			<p class="w-[36rem]">
				<Text id="home.section3.text" />
			</p>
			{#if $t['home.section3.cta']}
				<Button
					id="home.section3.cta"
					class="p-6 py-4 font-bold duration-200 border-2 bg-primary hover:bg-transparent hover:text-black hover:border-black border-primary"
				/>
			{/if}
		</div>
	</div>
	<PhotoContainer src="/outside.jpg" />
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
