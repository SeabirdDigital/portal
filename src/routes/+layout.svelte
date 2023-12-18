<script>
	import Text from '$lib/components/Text.svelte';
	import '@fontsource/space-grotesk';
	import '@fontsource/space-grotesk/700.css';
	import '../app.css';
</script>

<div style="--primary: #ffbb34;">
	<slot />

	<footer class="flex justify-center px-4 py-6 text-center text-white bg-primary">
		<Text id="footer.copyright" />
	</footer>
</div>
