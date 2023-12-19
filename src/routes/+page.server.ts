import portal from '$lib/index.js';
import supabase from '$lib/supabase.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const { texts } = await portal.createPortal(supabase, 'burger66');

	return {
		texts
	};
};
