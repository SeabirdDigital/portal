<script>
	import { onMount } from 'svelte';

	import { initializeApp } from 'firebase/app';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getAuth, setPersistence, onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/stores/auth';
	import { user } from '$lib/stores/user';

	const route = $page.route.id;

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyAfvAPt2jqXL6eBBev6ZXV4JJOKx3kcv6g',
			authDomain: 'seabirdportal.firebaseapp.com',
			projectId: 'seabirdportal',
			storageBucket: 'seabirdportal.appspot.com',
			messagingSenderId: '393340581155',
			appId: '1:393340581155:web:008bec8d58bface99f0896',
			measurementId: 'G-F69E3P0GJJ'
		};

		// Initialize Firebase
		initializeApp(firebaseConfig);
		auth.set(getAuth());

		onAuthStateChanged($auth, (u) => {
			if (u) {
				user.set(u);

				if (route == '/auth/login' || route == '/auth/signup') {
					goto(`/`);
				}

				return;
			}

			if (!(route == '/auth/login' || route == '/auth/signup')) {
				goto(`/auth/login?redirect=${route}`);
			}
		});
	});
</script>

<slot />
