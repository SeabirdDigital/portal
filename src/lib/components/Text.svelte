<script lang="ts">
	import t from '$lib/stores/t.js';

	export let id: string;

	let text = $t[id] ?? id;
</script>

{@html text}
