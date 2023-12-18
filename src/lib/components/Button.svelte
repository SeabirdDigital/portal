<script lang="ts">
	import t from '$lib/stores/t.js';

	export let id: string;

	let text = $t[id] ?? id;
	let href = $t[id + '.href'] ?? '#';

	let className = '';
	export { className as class };
</script>

<a {href}>
	<button class={className}>
		{text}
	</button>
</a>
