<script>
	import { auth } from '$lib/stores/auth';

	import { signOut } from 'firebase/auth';
</script>

<button
	on:click={() => {
		signOut($auth);
	}}>Sign out</button
>
