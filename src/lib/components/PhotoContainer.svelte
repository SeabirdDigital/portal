<script lang="ts">
	export let className = '';
	export { className as class };

	export let src: string;
</script>

<div style="background-image: url({src}); background-position: center; background-size: cover;">
	<div class={className}>
		<slot />
	</div>
</div>
