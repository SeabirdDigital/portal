<script lang="ts">
	export let className = '';
	export { className as class };

	export let src: string;
	export let fullHeight = false;
</script>

<div
	style="background-image: url({src}); background-position: center; background-size: cover; height: {fullHeight
		? '100%'
		: 'auto'};"
>
	<div class={className}>
		<slot />
	</div>
</div>
