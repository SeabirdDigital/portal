<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/stores/auth';
	import { error } from '@sveltejs/kit';

	import { signInWithEmailAndPassword } from 'firebase/auth';

	const redirect = $page.url.searchParams.get('redirect');

	let email = '',
		password = '';

	let errorCode = '';

	const onLogin = () => {
		signInWithEmailAndPassword($auth, email, password)
			.then((credentials) => {
				goto(redirect ?? '/');
			})
			.catch((error) => {
				errorCode = error.code;
			});
	};
</script>

<div>{errorCode}</div>

<label for="email">Email</label>
<input type="email" name="email" id="email" bind:value={email} />

<label for="password">Password</label>
<input type="password" name="password" id="password" bind:value={password} />

<input type="submit" on:click={onLogin} value="Login" />

<a href={`/auth/signup${redirect ? `?redirect=${redirect}` : ''}`}>Signup</a>
