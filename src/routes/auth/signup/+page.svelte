<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/stores/auth';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

	const redirect = $page.url.searchParams.get('redirect');

	let email = '',
		password = '',
		repeat = '';

	let errorCode = '';

	const onSignup = () => {
		createUserWithEmailAndPassword($auth, email, password)
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

<label for="repeat">Repeat Password</label>
<input type="password" name="repeat" id="repeat" bind:value={repeat} />

<input
	type="submit"
	on:click={onSignup}
	disabled={password != repeat || !password}
	value="Signup"
/>

<a href={`/auth/login${redirect ? `?redirect=${redirect}` : ''}`}>Login</a>
