import supabase from '$lib/supabase';
import portal from 'portal';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { texts } = await portal.createPortal(supabase, 'burgerExample');
	console.log(texts);
	return {
		texts
	};
};
