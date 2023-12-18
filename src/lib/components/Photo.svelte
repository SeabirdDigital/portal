<script lang="ts">
	export let className = '';
	export { className as class };

	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} class={className} />
